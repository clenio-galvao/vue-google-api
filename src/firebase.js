import firebase from '@firebase/app'
import '@firebase/auth'
import '@firebase/firestore'

firebase.initializeApp({
  apiKey: 'AIzaSyBmDYldi1QZqj8mtx8gAcBx9jSdmqNeduk',
  authDomain: 'desafio-conectanuvem.firebaseapp.com',
  databaseURL: 'https://desafio-conectanuvem-default-rtdb.firebaseio.com',
  projectId: 'desafio-conectanuvem',
  storageBucket: 'desafio-conectanuvem.appspot.com',
  messagingSenderId: '355107773529',
  appId: '1:355107773529:web:26015d826399359d93e548',
  measurementId: 'G-FTLRLTCJTK'
})

export default firebase

// https://firebase.google.com/docs/firestore/security/get-started#auth-required
