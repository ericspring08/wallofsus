import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card'
import { CardActionArea, CardContent, Grid } from '@mui/material';

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

var first = "";
var second = "";


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
      <div style = {{marginLeft: "20px", marginRight: "20px"}}>
        <Grid container spacing = {2}>
          <Grid item xs = {6} md = {6}>
            <Card style = {{height: "200px"}}>
              <CardActionArea style = {{height: "100%"}}>
                <CardContent>
                  
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        <Grid item xs = {6} md = {6}>
          <Card style = {{height: "200px"}}>
            <CardActionArea style = {{height: "100%"}}>
              <CardContent>
                
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        </Grid>
      </div>

      <div style = {{margin: "20px"}}>

        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell>User</TableCell>
              <TableCell>Quote</TableCell>
              <TableCell>Votes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {quotes.map((row, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index+1}
                </TableCell>
                <TableCell>{row.user}</TableCell>
                <TableCell>{row.quote}</TableCell>
                <TableCell>{row.rank}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>

    </div>
  );
}

export default App;
