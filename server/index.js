const express = require("express");
const path = require("path");
const compression = require("compression");
const controllers = require("../db/controllers.js");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(compression());

app.use(express.static(path.join(__dirname, "../client/public"), {}));

app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("listening on port 3000");
});

app.get("/items", controllers.getItems);

app.post("/items", controllers.addItem);

app.put("/items", controllers.deleteItem);
