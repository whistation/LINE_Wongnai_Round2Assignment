import axios from "axios";
import Typography from '@mui/material/Typography';
import { CssBaseline } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  textAlign:"center",
  border: "1px solid #D9D9D9"
}));

//responsive font
let theme = createTheme();
theme = responsiveFontSizes(theme);

function Restaurant() {


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
              // bgcolor:"red"
            }}>
              <Item sx={{mt: 5, width:"85vw"}}>
                <ThemeProvider theme={theme}>
                  <Typography variant="h3" sx={{ color:"black", fontWeight: "bold"}}>
                    Ekkamai Macchiato - Home Brewer
                  </Typography>
                </ThemeProvider>
              </Item>
              <Item sx={restaurantContentBackground}>
                <Typography sx={{pt: 2, color:"black", fontSize:25}}>
                  Opening hours: 1200-1200
                </Typography>

                <Box sx={{ width: '90%', mt: 2, mb: 2, ml: 10, mr: 10, overflow:'auto' }}>
                  <Stack spacing={2}>
                    <Item>Item 1</Item>
                    <Item>Item 2</Item>
                    <Item>Item 3</Item>
                    <Item>Item 1</Item>
                    <Item>Item 2</Item>
                    <Item>Item 3</Item>
                    <Item>Item 1</Item>
                    <Item>Item 2</Item>
                    <Item>Item 3</Item>
                    <Item>Item 1</Item>
                    <Item>Item 2</Item>
                    <Item>Item 3</Item>
                  </Stack>
                </Box>
              </Item>
              

          </Box>
          <Box 
            component="img" 
            src="https://img.wongnai.com/p/1920x0/2021/03/09/fc6f2b50e313418590eb113cbc4981c2.jpg" 
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