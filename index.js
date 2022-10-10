import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from 'firebase-admin/firestore';


//import our credentials (serviceAccount)
import serviceAccount from './serviceAccount.js'

//connect to our firebase project using our credentials 
initializeApp({
    credential: cert(serviceAccount)
})
//connect o our firestore database
const db = getFirestore();


//define a new video game 
const newGame = {
    title: 'Frogger',
    rated: 'E',
    genre: 'Arcade',
    released: '1981',
    
}

//create a doc inside a collection 
db.collection('games').add(newGame)
// if ok, console log the doc id 
.then(doc => console.log('Game created: ', doc.id))
// if not, console the error 
.catch(console.error)
//.catch(err => console.error(err)) - same as line above

//get all games 
db.collection('games').get()
//reshape all collection
.then(collection => {
    collection.docs.forEach(doc => {
        console.log(doc.id, doc.data())
    })
})
.catch(console.error)