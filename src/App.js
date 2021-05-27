import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import Body from './components/Body';
import Navigation from "./components/Navigation";

function App() {

  const [data, setData] = useState([])

  useEffect(()=>{
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=poreNeG8L1D9W3B3OwSxwIfQHjtUBr6qBFuA1WIY')
    .then(res =>{
      console.log(res)
      setData(res.data)
    })
    .catch(err =>{
      console.log(err)
    })
  },[])

  return (
    <div className="App">
      <Navigation data = {data}/>
      <Body data = {data}/>
    </div>
  );
}

export default App;
