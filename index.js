require("dotenv").config();
const express = require("express"),
	app = express(),
	router = require("./routes.js"),
	port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));

app.use(router);

app.listen(port, () => {
	console.log("Server is running on port " + port);
});
