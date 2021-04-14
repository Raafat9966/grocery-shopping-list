import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/router.js";
import "dotenv/config.js";
import path from "path";

const app = express();
let port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

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

app.use("/api", router);

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "app")));
app.use((req, res) => res.sendFile(path.join(__dirname, "app", "index.html")));
