const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  password: "postgres",
  host: "127.0.0.1",
  port: 5432,
  database: "calorietracker",
});

client.connect(function (err) {
  if (err) {
    throw err;
  }
  console.log("Database is Connected");
});

exports.addItem = (req, res) => {
  var { name, calories, protein } = req.body;
  var values = [name, calories, protein];
  var text = "INSERT INTO items (name, calories, protein) VALUES ($1,$2,$3)";
  client.query(text, values, (err, result) => {
    if (err) {
      res.status(501).end();
      return;
    }
    res.status(201).end();
  });
};

exports.getItems = (req, res) => {
  var values = [];
  var text = "SELECT * FROM items";
  client.query(text, values, (err, result) => {
    if (err) {
      res.status(501).end();
      return;
    }
    res.status(200).send(result.rows);
  });
};

exports.deleteItem = (req, res) => {
  var id = req.body.id;
  var values = [id];
  var text = "DELETE FROM items WHERE id = $1";
  client.query(text, values, (err, result) => {
    if (err) {
      res.status(501).end();
      return;
    }
    res.status(204).end();
  });
};
