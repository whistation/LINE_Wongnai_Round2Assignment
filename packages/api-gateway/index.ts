import express, { Application } from "express";
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

app.get("/", (req, res) => res.send("LINE MAN Wongnai Frontend Assignment"));
app.get("/test", (req, res) => res.send("Test complete"));

try {
	app.listen(port, (): void => {
		console.log(`Connected successfully on port ${port}`);
	});
} catch (error) {
	console.error(`Error occured: ${(error as Error).message}`);
}
