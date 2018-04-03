var express = require('express');
var bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');
const { ObjectID } = require('mongodb');
const { Todo } = require('./models/todo');
const { User } = require ('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((result) => {
    res.send(result);
  }).catch((err) => {
    res.status(400).send(err);
  })
});

app.get('/todos', (req, res) => {

  Todo.find().then((todos) => {
    res.send({
      todos
    });
  }).catch((err) => {
    res.status(400).send(err);
  });

});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  // validate id using isValid -> stop function execution and respond with 404. send empty body
  // findById - query the todos collection.
  //       error - send back 400. send back nothing.
  //       success - if there is todo, send it back. if not todo, send back 404 with empty body

  if (!ObjectID.isValid(id))
    res.status(404).send();

  Todo.findById(id).then((todo) => {
    if (!todo)
      return res.status(404).send();
    res.send({
      todo
    });
  }).catch((err) => {
    res.status(400).send();
  });

});

app.listen(3000, () => {
  console.log('Started on port 3000');
});
