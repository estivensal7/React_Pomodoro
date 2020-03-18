const express = require("express");
const mongoose = require("mongoose");

//setting up dotenv
require("dotenv").config();

//setting up app
const app = express();
const PORT = process.env.PORT || 3001;

// setting up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

console.log(process.env.MONGO_USER);
console.log(process.env.MONGO_PASSWORD);

//setting up mongoose connection
const mongoUri =
	process.env.MONGODB_URI ||
	`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-uq6pl.mongodb.net/pomodoro-react?retryWrites=true&w=majority`;
mongoose.Promise = Promise;
mongoose
	.connect(mongoUri, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => console.log("MongoDB Connected..."))
	.catch(err => console.log(err));

//setting up routes
const routes = require("./routes");

app.use(routes);

app.listen(PORT, () =>
	console.log(`🗺️ => now listening on http://localhost:${PORT}`)
);
