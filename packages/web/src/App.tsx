import axios from "axios";

function App() {
  axios.get("http://localhost:3001/")
  .then((res) => {
    console.log(res)
  }, (error) => {
    console.log("error!")
  });

  return (
    <div>
      <h1>Edit this app to complete LINE MAN Wongnai Frontend Assignment!</h1>
    </div>
  )
}

export default App
