//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {

  if (err)
    return console.log('Unable to connect to MongoDB server');

  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp');

  /*db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5ac3439b4c76145f939d24d3')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });*/

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5ac335367d64292fb4cc5ba1')
  }, {
    $set: {
      name: 'Alon'
    },
    $inc: {
      'age': 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  //client.close();

});
