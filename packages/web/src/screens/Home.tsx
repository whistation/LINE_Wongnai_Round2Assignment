import axios from "axios";
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import * as React from 'react';
import background from '../../assets/foodstuffs.jpg';
import HomeBackground from "../components/HomeBackground";


function Home() {

  //test data api call
  const data = async () => {
    const res = await axios.get("http://localhost:3001/restaurants/227018");
    console.log(res);
  } 
  try {
    data();
  } catch (error){
    console.log("error");
  }

  return (
    <React.Fragment>
        <CssBaseline /> 
            <Container maxWidth="xl">
                <Box 
                    sx={{ 
                        bgcolor: 'white', 
                        opacity: '0.5',
                        height: "100vh", 
                        width: "100vw",
                        position: 'absolute',
                        top: 0,
                        zIndex: 1
                    }}>
                </Box>
                <Box 
                  sx={{
                    width: "100vw",
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'absolute',
                    zIndex: 2,
                    alignItems: 'center'
                  }}>
                  <Box
                    sx={{
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
                    }}>
                    <Typography sx={{ fontWeight: "bold", fontSize: 60}}>
                      Menu Finder!
                    </Typography>
                  </Box>
                </Box>
                <Box 
                  sx={{
                    bgcolor:"white",
                    width: "100vw",
                    height: "100vh",
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'absolute',
                    top: 200,
                    zIndex: 2,
                    alignItems: 'center',
                    borderRadius: 25
                  }}>
                  </Box>
                <HomeBackground></HomeBackground>   
                          
            </Container>
    </React.Fragment>

  )
}

export default Home
