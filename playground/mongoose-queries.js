const { ObjectID } = require('mongodb');
const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');

/*var id = '5ac380d53cad730e6005576311';

if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}*/

/*Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos', todos);
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo', todo);
});*/

/*Todo.findById(id).then((todo) => {
  if (!todo)
    return console.log('Id not found');
  console.log('Todo By Id', todo);
}).catch((err) => {
  console.log(err);
});*/

// User.findById
// check user found
// user found message
// global catch errors

User.findById('5ac379efd59e854d6c1d0ad3').then((user) => {
  if (!user)
    return console.log('User id not found');

  console.log(user);
}).catch((err) => {
  console.log(err);
})
