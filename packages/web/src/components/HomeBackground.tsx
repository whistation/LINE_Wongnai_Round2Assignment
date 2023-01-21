import Box from '@mui/material/Box';
import background from '../assets/foodstuffs.jpg';

export default function HomeBackground() {
    return (
        <Box component="img" src={background} sx={{width: "100vw", height: "100vh"}}/>
    )
}