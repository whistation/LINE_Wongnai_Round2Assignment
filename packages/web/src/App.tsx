import axios from "axios";

function App() {

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
      <h1>Edit this app to complete LINE MAN Wongnai Frontend Assignment!</h1>
    </div>
  )
}

export default App
