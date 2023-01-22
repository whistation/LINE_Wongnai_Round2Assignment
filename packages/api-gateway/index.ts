import express, { Application } from "express";
import restaurantRouter from "./routers/restaurant_router";
import shortMenuRouter from "./routers/short_menu_router";
import cors from "cors";

const app: Application = express();
const port = 3001;
const allowedOrigins =["http://localhost:3000"];
const options: cors.CorsOptions = {
	origin: allowedOrigins
  };

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(options));

// app.get("/", (req, res) => res.send("LINE MAN Wongnai Frontend Assignment"));
app.use("/restaurantdata", restaurantRouter);
app.use("/shortmenudata", shortMenuRouter);


try {
	app.listen(port, (): void => {
		console.log(`Connected successfully on port ${port}`);
	});
} catch (error) {
	console.error(`Error occured: ${(error as Error).message}`);
}
