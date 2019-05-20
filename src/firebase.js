import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'

const firebaseConfig = {


};


  firebase.initializeApp(firebaseConfig);

  const firebaseDb=firebase.database();

  const firebaseMatches=firebaseDb.ref('matches')

 export{
     firebase,
     firebaseMatches
 }