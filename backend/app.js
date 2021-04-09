import express from "express";
import mongoose from "mongoose";
import router from "./routes/router.js";
import "dotenv/config.js";

const app = express();
let port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// connecting MongoDB
mongoose
	.connect(process.env.MONGODB_URI, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
	})
	.then(() => app.listen(port, () => console.log(`http://localhost:${port}`)))
	.catch((err) => {
		console.log(err);
		process.exit(1);
	});

app.use("/", router);
