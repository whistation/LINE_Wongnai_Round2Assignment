import express from 'express';
import axios from 'axios';

const restaurantRouter = express.Router();
const restaurantIDs = [227018, 567051];

//get all restaurant IDs
restaurantRouter.get("/", (req, res) => res.send(restaurantIDs));

//get ALL restaurant id, name, opening hours and cover image
//implement a shuffled array of IDs?
restaurantRouter.get("/homepage", async (req, res) => {
	var result: { id: any; name: any; open: any; close: any; coverImage: any; }[] = [];
	for (var ID of restaurantIDs) {
		await axios({
			method: "get",
			url: `https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/${ID}.json`
		})
		.then(
			(response) => {
				result.push({
					id: ID,
					name: response.data.name, 
					open: response.data.activeTimePeriod.open, 
					close: response.data.activeTimePeriod.close,
					coverImage: response.data.coverImage
				})
			})
		.catch(err => console.log(err))
	}
	res.send(result);
})

export default restaurantRouter;