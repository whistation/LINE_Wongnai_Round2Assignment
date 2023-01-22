import express from 'express';
import axios from 'axios';

const shortMenuRouter = express.Router();

//get ALL dish id, name, thumbnail, original price, price after discount given a restaurant id
shortMenuRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
	var result: { id: any; name: any; thumbnailImage: any; fullPrice: any; discountedPrice: any; }[] = [];

  //get array of menu items
  var menuItems: never[] = [];
  await axios({
    method: "get",
    url: `https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/${id}.json`
  })
  .then(
    (response) => {
      menuItems = response.data.menus;
    })
  .catch(err => console.log(err));

  //iterate over all menu names and add the required data into result array
  for (var name of menuItems) {
    await axios({
      method: "get",
      url: `https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/${id}/menus/${name}/short.json`
    })
    .then(
      (response) => {
        var discountedPrice = 0;
        if (response.data.discountedPercent > 0) {
          discountedPrice = response.data.fullPrice * ((100 - response.data.discountedPercent) / 100);
        } else {
          discountedPrice = response.data.fullPrice;
        }
        
        result.push({
          id: response.data.id,
          name: response.data.name,
          thumbnailImage: response.data.thumbnailImage,
          fullPrice: response.data.fullPrice,
          discountedPrice: discountedPrice
        })
      })
    .catch(err => console.log(err))
  }

  res.send(result);
})

export default shortMenuRouter;