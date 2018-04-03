//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {

  if (err)
    return console.log('Unable to connect to MongoDB server');

  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp');

  /*db.collection('Todos').insertOne({
    text: 'Something to do',
    completed: false
  }, (err, result) => {
    if (err)
      return console.log('Unable to insert todo');

    console.log(JSON.stringify(result.ops, undefined, 2));
  });*/

  // Insert new doc into the Users
  /*db.collection('Users').insertOne({
    name: 'Alon',
    age: 30,
    location: 'Ramat Gan'
  }, (err, result) => {
    if (err)
      return console.log('Unable to insert user', err);

    console.log(result.ops[0]._id.getTimestamp());
  });*/

  client.close();

});
