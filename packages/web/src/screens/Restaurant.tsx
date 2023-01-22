import axios from "axios";
import { useLocation } from "react-router-dom";
import Typography from '@mui/material/Typography';
import { CssBaseline } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect } from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import { useState } from "react";
import {Button} from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  color: theme.palette.text.secondary,
  textAlign:"center",
  border: "1px solid #D9D9D9"
}));

const Click = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  color: theme.palette.text.secondary,
  textAlign:"center",
  border: "1px solid #D9D9D9"
}));

//responsive font
let theme = createTheme();
theme = responsiveFontSizes(theme);

function Restaurant() {
  //location data
  const location = useLocation();
  const restaurantID = location.state.restaurantID;
  console.log(restaurantID);

  //get data to render menu items
  const dishesDefault = [{id: "test", name: "Please wait while we load the data for you...", thumbnailImage: "url", fullPrice: 0, discountedPrice: 0, }];
  const [dishes, setDishes] = useState(dishesDefault);
  const getDishes = async () => {
    const res = await axios.get(`http://localhost:3001/shortmenudata/${restaurantID}`);
    setDishes(res.data);
  } 

  useEffect(() => {
    try{
      getDishes();
      console.log(dishes);
    } catch(error) {
      console.log("error");
    }
  }, [dishes])

  //handler functions for the pop up 
  const getLargeImage = async (name: any) => {
    const res = await axios.get(`http://localhost:3001/fullmenudata/largeimage/${restaurantID}/${name}`)
    setLargeImage(res.data);
  }

  const [largeImage, setLargeImage] = useState("");

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (name: any) => {
    try {
      getLargeImage(name);
      console.log(name)
    } catch(error) {
      console.log(error);
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return (
      <React.Fragment>
        <CssBaseline/>
        <Container maxWidth="xl">
          <Box sx={backgroundLayer}/>
          <Box 
            sx={{
              width: "100vw",
              display: 'flex',
              flexDirection: 'column',
              position: 'absolute',
              zIndex: 2,
              alignItems: 'center',
            }}>
              <Item sx={{mt: 5, width:"85vw"}}>
                <ThemeProvider theme={theme}>
                  <Typography variant="h3" sx={{ color:"black", fontWeight: "bold"}}>
                    {localStorage.getItem("restaurantName")}
                  </Typography>
                </ThemeProvider>
              </Item>
              <Item sx={restaurantContentBackground}>
                <Typography sx={{pt: 2, color:"black", fontSize:25, fontStyle:"italic", fontWeight: "semilight"}}>
                  {"Opening Hours " + localStorage.getItem("open") + "-" + localStorage.getItem("close")}
                </Typography>

                <Box sx={{ width: '90%', pr:2, pl:2, pt: 2, pb: 2, mt: 2, mb: 5, ml: 10, mr: 10, overflow:'auto', border:"1px solid #69A8FF", borderRadius:5 }}>
                  <Stack spacing={2}>

                    {dishes.map((dishes) => (
                      <Click key={dishes.id} sx={{pl: 1, pr: 3}} onClick={() => handleClickOpen(dishes.name)}>
                        <Stack direction="row">
                          <Box component='img' src={dishes.thumbnailImage}/>
                          <Box sx={{pl:2, width:"100%", display:"flex", flexDirection:"row", alignItems:"center", bgcolor:"white"}}>
                            <Typography sx={{fontSize:20}}>
                              {dishes.name}
                            </Typography>
                          </Box>
                          <Box sx={{pl:2, width:"20%", display:"flex", flexDirection:"row", alignItems:"center", justifyContent: "flex-end"}}>
                            {//no discount
                              dishes.discountedPrice === dishes.fullPrice && 
                              <Typography alignSelf="right" sx={{fontSize:20}}>
                                {dishes.fullPrice}
                              </Typography>
                            }
                            {//there is discount
                              dishes.discountedPrice != dishes.fullPrice &&
                              <>
                                <Typography alignSelf="right" sx={{fontSize:20, textDecorationLine:"line-through"}}>
                                  {dishes.fullPrice }
                                </Typography>
                                <Typography alignSelf="right" sx={{fontSize:20}}>
                                {dishes.discountedPrice +"!"}
                                </Typography>
                              </>
                            }
                          </Box>
                        </Stack>
                      </Click>

                    ))}


                  </Stack>
                </Box>
                <Dialog
                  open={open}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={handleClose}
                  aria-describedby="alert-dialog-slide-description"
                >
                  <Box component="img" src={largeImage}/>
                  <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                  </DialogActions>
                </Dialog>
              </Item>
          </Box>
          <Box 
            component="img" 
            src={localStorage.getItem("coverImage")}
            sx={{width: "100vw", height: "100vh"}}/>


        </Container>
      </React.Fragment>
    )
  }
  
  export default Restaurant

  const backgroundLayer = {
    bgcolor: 'white', 
    opacity: '0.5',
    height: "100vh", 
    width: "100vw",
    position: 'absolute',
    top: 0,
    zIndex: 1
  }

  const restaurantContentBackground = {
    bgcolor:"white",
    width: "85%",
    height: "70vh",
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    top: 50,
    zIndex: 2,
    alignItems: 'center',
    margin: 'auto',
    borderRadius: 25,
    flexGrow: 1, 
  }