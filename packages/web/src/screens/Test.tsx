import axios from "axios";
import Typography from '@mui/material/Typography';

import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from "@mui/material/Grid";
import RestaurantListing from "../components/RestaurantListing";



function Test() {

    return (
      <Grid 
        container 
        rowSpacing={7} 
        columnSpacing={{ xs: 1, sm: 2, md: 3 }} 
        sx={gridContainer}>
          
            <Grid item xs={6} sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
              <RestaurantListing
                name="Ekkamai Macchiato - Home Brewer"
                open="08:00"
                close="17:00"
                coverImage="https://img.wongnai.com/p/1920x0/2021/03/09/fc6f2b50e313418590eb113cbc4981c2.jpg"
              />
            </Grid>
          
      </Grid>
    )
  }

export default Test;

const gridContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center'
}
