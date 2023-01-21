import axios from "axios";
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


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
    <div>
        <Typography variant="h1" component="h2">
        Home page
        </Typography>
        <Link to="/restaurant">restaurant</Link>
    </div>

  )
}

export default Home
