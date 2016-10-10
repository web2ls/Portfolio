const firebase = require('firebase');

const config = {
    apiKey: "AIzaSyBZylV35-qbYyG5xfOqIgfKqRKjVU-eQtU",
    authDomain: "online-react-app.firebaseapp.com",
    databaseURL: "https://online-react-app.firebaseio.com",
    storageBucket: "online-react-app.appspot.com"
};

firebase.initializeApp(config);
const database = firebase.database();
const storage = firebase.storage();

console.log(database);

module.exports = {
	database: database,
	storage: storage
}