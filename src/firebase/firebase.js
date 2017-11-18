import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };


// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) =>{
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });
// database.ref('expenses').push({
//     description: 'groceries',
//     note: '',
//     amount: 109500,
//     createdAt: 3454398989
// });

// database.ref('expenses').on('value', (snapshot) =>{
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log('expenses: ', expenses);
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) =>{
//         const expenses=[];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log('expenses: ', expenses);
//     })
//     .catch((e) =>{
//         console.log('oops, ', e);
//     });
// database.ref('notes').push({
//     title: 'course topics',
//     body: 'react native'
// });

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job} in ${val.location.city}.`)
// });
// // database.ref().on('value', (snapshot) => {
// //     console.log(snapshot.val());
// // });



// database.ref('location')
//     .once('value')
//     .then((snapshot) =>{
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('error', e);
//     });

// database.ref().set({
//     name: 'Matt Frawley',
//     age: 50,
//     isMarried: true,
//     location: {
//         city: 'Princeton',
//         country: 'USA'
//     }
// }).then(() =>{
//     console.log('data is saved');
// }).catch((e) =>{
//     console.log('failed', e);
// });

// database.ref().update({
//     name: 'New Name',
//     age: 29,
//     job: 'software developer',
//     isMarried: null
// });

// database.ref('isMarried').remove()
//     .then(() => {
//         console.log('removed');
//     })
//     .catch(() => {
//         console.log('error');
//     });

