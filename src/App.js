import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import {Card} from '@mui/material'

import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBGgrNjOwey1pOXWExp489kpX-UN8rkTc0",
    authDomain: "wallofsus.firebaseapp.com",
    projectId: "wallofsus",
    storageBucket: "wallofsus.appspot.com",
    messagingSenderId: "287884497479",
    appId: "1:287884497479:web:89796ea54d85a2b029d762",
    measurementId: "G-5ZEYXSGWG9"
}

firebase.initializeApp(firebaseConfig)

firebase.analytics()

const db = firebase.firestore()

function App() {

  const [quotes, setQuotes] = useState([])

  function generateRandomQuotes(max) {
    const index = Math.floor(Math.random() * (max))
    return index
  }

  useEffect(function sideEffect(){ 
    db.collection('quotes').get().then(docs => {
      docs.docs.map(doc => {
        setQuotes((arr) => [...arr, doc.data()])
      })
    }).then(() => {
      console.log(quotes)
    }
      
    )
  }, [])

  return (
    <div className="App">
      <h1>Wall of Sus</h1>
      <br>
      </br>

      {
        quotes.map(item => 
          <div>
            <Card>
              <h4>{item.quote}</h4>
              <br></br>
              <h6>{item.user}</h6>
            </Card>
            <br>
            </br>
          </div>
        )
      }
    </div>
  );
}

export default App;
