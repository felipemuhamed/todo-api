const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5b041455fb38fc1906086469')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then(result => {
        console.log(result);
    })
});