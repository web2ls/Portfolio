const firebase = require('firebase');

const config = {
    apiKey: "AIzaSyDaMWwZ4icC9i93iNbdHP2Xk3kdVh_GXes",
    authDomain: "web2ls-2143f.firebaseapp.com",
    databaseURL: "https://web2ls-2143f.firebaseio.com",
    storageBucket: "web2ls-2143f.appspot.com"
};

firebase.initializeApp(config);
const database = firebase.database();
const storage = firebase.storage();
const auth = firebase.auth();


module.exports = {
	database: database,
	storage: storage,
	auth: auth
}