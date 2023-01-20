import express from 'express';
import axios from 'axios';

const restaurantRouter = express.Router();
const restaurantIDs = [227018, 567051];

//get all restaurant IDs
restaurantRouter.get("/", (req, res) => res.send(restaurantIDs));

//get all restaurant info by ID
restaurantRouter.get("/:id", (req, res, next) => {
	const id = req.params.id;
    axios({
		method: "get",
		url: `https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/${id}.json`,
	})
	.then(response => res.send(response.data))
	.catch(err => console.log(err))
});

//get restaurant cover image by ID
restaurantRouter.get("/:id/image", (req, res, next) => {
	const id = req.params.id;
    axios({
		method: "get",
		url: `https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/${id}.json`,
	})
	.then(response => res.send(response.data.coverImage))
	.catch(err => console.log(err))
});

//get restaurant name by ID
restaurantRouter.get("/:id/name", (req, res, next) => {
	const id = req.params.id;
    axios({
		method: "get",
		url: `https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/${id}.json`,
	})
	.then(response => res.send(response.data.name))
	.catch(err => console.log(err))
});

//get restaurant opening time by ID
restaurantRouter.get("/:id/opening_hours", (req, res, next) => {
	const id = req.params.id;
    axios({
		method: "get",
		url: `https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/${id}.json`,
	})
	.then(response => res.send(response.data.activeTimePeriod))
	.catch(err => console.log(err))
});

export default restaurantRouter;