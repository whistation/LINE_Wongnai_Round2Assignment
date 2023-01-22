import express from 'express';
import axios from 'axios';

const fullMenuRouter = express.Router();

//get large image given restaurantID and menu name
fullMenuRouter.get("/largeimage/:id/:name", async (req, res) => {
  const id = req.params.id;
  const name = req.params.name;

  await axios({
    method: "get",
    url: `https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/${id}/menus/${name}/full.json`
  })
  .then(
    (response) => {
      res.send(response.data.largeImage);
    }
  )
  .catch(err => console.log(err));
})

//

export default fullMenuRouter;
