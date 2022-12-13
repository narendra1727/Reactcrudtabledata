
import './App.css';
import axios from 'axios';
import { Routes ,Route } from "react-router-dom";
import { useState,useEffect } from 'react';
import Read from './components/Read';
import Update from './components/Update';
import React from 'react';
import Create from './components/Create';

function App() {
  const [data,setData]=useState([]);

  React.useEffect(()=>{
    axios.get("https://6321d2e9fd698dfa29000d7d.mockapi.io/users").then((res)=> setData(res.data)).catch((err)=> console.log(err))
  },[]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Read data={data} />}/>
        <Route path="/update/:newid12" exact element={<Update  />} />
        <Route path="/create"  element={<Create />}/>
      </Routes>
      
    </div>
  );
}



export default App;
