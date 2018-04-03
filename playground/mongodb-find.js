//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {

  if (err)
    return console.log('Unable to connect to MongoDB server');

  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp');

  /*db.collection('Todos').find({
    _id: new ObjectID('5ac3399e4c76145f939d1f60')
  }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }).catch((err) => {
    console.log('Unable to fetch todos', err);
  });*/

  /*db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count ${count}`);
  }).catch((err) => {
    console.log('Unable to fetch todos', err);
  });*/

  db.collection('Users').find({
    name: 'Andrew'
  }).count().then((count) => {
    console.log(`Users count with name Andrew: ${count}`);
  }).catch((err) => {
    console.log('Unable to fetch users count', err);
  });

  db.collection('Users').find({
    name: 'Andrew'
  }).toArray().then((users) => {
    console.log(JSON.stringify(users, undefined, 2));
  }).catch((err) => {
    console.log('Unable to fetch users', err);
  });

  //client.close();

});
