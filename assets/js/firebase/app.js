// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC4vKpLQPVwqCl8yTeguBJIS_7vNeCrDvI',
  authDomain: 'projeto-stranger-things.firebaseapp.com',
  projectId: 'projeto-stranger-things',
  storageBucket: 'projeto-stranger-things.appspot.com',
  messagingSenderId: '6712000287',
  appId: '1:6712000287:web:6d9165ab42e832f0ff7a2a'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export default app
