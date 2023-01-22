import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


function RestaurantListing(name: any, open: any, close: any, coverImage: any) {
  const openingHours = "" + open + "-" + close;
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        sx={{ height: 250 }}
        image={coverImage}
        title="Restaurant cover image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {openingHours}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Menu</Button>
      </CardActions>
    </Card>
  )
}

export default RestaurantListing;