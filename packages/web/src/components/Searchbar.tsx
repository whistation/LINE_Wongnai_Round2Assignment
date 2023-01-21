import TextField from "@mui/material/TextField";

export default function Searchbar() {
  return(
    <TextField placeholder="Search..."
      sx={{
        width: "85%",
        height: 75,
        position: 'relative',
        top: 45,
        borderRadius: 20
      }}>
    </TextField>
  )
}