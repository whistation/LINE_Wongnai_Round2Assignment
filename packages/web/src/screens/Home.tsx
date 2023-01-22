import axios from "axios";
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import * as React from 'react';
import HomeBackground from "../components/HomeBackground";
import Searchbar from "../components/Searchbar";
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { useState, useEffect } from "react";

function Home() {
  const navigate = useNavigate();

  //Get data for restaurant listings
  const listingDefault = [{id: 1, name: "default", open: "0900", close: "1700", coverImage: "url"}];
  const [listings, setListings] = useState(listingDefault);
  const getData = async () => {
    const res = await axios.get("http://localhost:3001/restaurantdata/homepage");
    setListings(res.data);
  } 

  useEffect(() => {
    try {
      getData();
      console.log(listings);
    } catch (error){
      console.log("error");
    }
  }, [listings]);


  return (
    <React.Fragment>
        <CssBaseline /> 
            <Container maxWidth="xl">
              <Box sx={backgroundLayer}/>
              <Box 
                sx={{
                  width: "100vw",
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'absolute',
                  zIndex: 2,
                  alignItems: 'center'
                }}>
                  <Box sx={headerHighlight}>
                    <Typography sx={{ fontWeight: "bold", fontSize: 60}}>
                      Menu Finder!
                    </Typography>
                  </Box>
              </Box>
              <Box sx={homepageContentBackground}>
                  <Searchbar/>
                  <Box sx={gridBackground}>
                      <Grid 
                        container 
                        rowSpacing={7} 
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }} 
                        sx={gridContainer}>
                          
                          {listings.map((listings) => (
                            <Grid item key={listings.id} xs={6} sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                              <Card sx={{ maxWidth: 500, height: "100%", display: "flex", flexDirection: "column"}}>
                                <CardMedia
                                  component="img"
                                  sx={{ height: 250 }}
                                  image={listings.coverImage}
                                  title="Restaurant cover image"
                                />
                                <CardContent>
                                  <Typography gutterBottom variant="h5" component="div">
                                    {listings.name}
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary">
                                    {"" + listings.open + "-" + listings.close}
                                  </Typography>
                                </CardContent>
                                <CardActions disableSpacing sx={{ mt: "auto" }}>
                                  <Button size="small" onClick={() => navigate("/Restaurant", {state: {restaurantID: listings.id}})}>
                                    View Menu
                                  </Button>
                                </CardActions>
                              </Card>
                            </Grid>
                          ))}

                      </Grid>
                  </Box>
                 
              </Box>
              <HomeBackground/>
            </Container>
    </React.Fragment>

  )
}

export default Home

const backgroundLayer = {
  bgcolor: 'white', 
  opacity: '0.5',
  height: "100vh", 
  width: "100vw",
  position: 'absolute',
  top: 0,
  zIndex: 1
}

const headerHighlight = {
  bgcolor: "#F0F0F0",
  borderRadius: 5,
  width: 425,
  height: 100,
  top: 50,
  position: 'relative',
  zIndex: 3,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}

const homepageContentBackground = {
  bgcolor:"white",
  width: "100vw",
  height: "100vh",
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  top: 200,
  zIndex: 2,
  alignItems: 'center',
  borderRadius: 25,
  flexGrow: 1
}

const gridBackground = {
  width: "85vw",
  top: 75,
  position: "relative",
  pb: 10
}

const gridContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center'
}
