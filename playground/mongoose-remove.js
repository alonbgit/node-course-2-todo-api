const { ObjectID } = require('mongodb');
const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');

/*Todo.remove({}).then((result) => {
  console.log(result);
});*/

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findOneAndRemove({
  _id: '5ac397f04c76145f939d383c'
}).then((todo) => {

});

Todo.findByIdAndRemove('5ac397f04c76145f939d383c').then((todo) => {
  console.log(todo);
});
