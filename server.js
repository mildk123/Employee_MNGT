
const express = require('express');
const app = express();
const path = require('path');

const cors = require('cors')
const mongoose = require('./config/db');

const routes = require('./routes');


let port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.set('port', (port || 5000));

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log("db connected!")
});

// Static file declaration
app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/', routes);

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});


app.listen(app.get('port'), () => {
  console.log('Server is running on port : ' + app.get('port'));
})




















// ///////////////// APIs ////////////////////
// // Get all todos
// app.get('/todos/getAll', (req, res) => {
//   console.log('requesting todos')
//   // res.json(["Tony", "Lisa", "Michael", "Ginger"]);

//   Todos.find({})
//     .then(result => res.send(result))
//     .catch(e => res.send({ message: e.message }))

// });

// // Insert ToDo
// app.post("/todos/add", (req, res) => {
//   console.log('Pushing Todo');

//   const todo = new Todos(req.body);

//   todo.save()
//     .then(() => res.send({ message: "Todo inserted successfully!" }))
//     .catch(e => res.send({ message: e.message }))
// })

// // Update ToDo
// app.put("/todos/update", (req, res) => {
//   console.log('Updating Todo');

//   Todos.updateOne({ email: req.body.email }, { age: req.body.age })
//     .then(result => res.send(result))
//     .catch(e => res.send({ message: e.message }))
// })

// // Remove ToDo
// app.delete("/todos/remove", (req, res) => {
//   console.log('removing Todo');
//   Todos.deleteOne({ title: req.body.title })
//     .then(result => res.send(result))
//     .catch(e => res.send({ message: e.message }))
// })
