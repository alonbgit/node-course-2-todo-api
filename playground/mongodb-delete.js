//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {

  if (err)
    return console.log('Unable to connect to MongoDB server');

  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp');

  // deleteMany
  /*db.collection('Todos').deleteMany({
    text: 'Eat lunch'
  }).then((result) => {
    console.log(result);
  });*/

  // deleteOne
  /*db.collection('Todos').deleteOne({
    text: 'Eat lunch'
  }).then((result) => {
    console.log(result);
  });*/

  // findOneAndDelete
  /*db.collection('Todos').findOneAndDelete({
    completed: false
  }).then((result) => {
    console.log(result);
  });*/

  db.collection('Users').deleteMany({
    name: 'Andrew'
  }).then((result) => {
    console.log('deleted users with the name Andrew');
  });

  db.collection('Users').deleteOne({
    _id: new ObjectID('5ac33550e1cd3f6830c964fd')
  }).then((result) => {
    console.log('deleted user with id 5ac33550e1cd3f6830c964fd');
  });

  //client.close();

});
