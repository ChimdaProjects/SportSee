import Dashboard from '../../pages/Dashboard';
import './App.css';

import {Routes, Route} from "react-router-dom"
import Home from '../../pages/Home';
import React, {useState, useEffect} from "react";
// router
//import { useParams } from "react-router-dom";

// datas
//import {getUserInfos } from "../../services/callsDatasMocked";


function App() {
   
    return (
        <div className="App">
    
            <Routes>
            
                <Route path="/" element={<Home/>} />
                <Route
                    path="/user/:userId" 
                    element = { <Dashboard /> } />
                    
                 
      
            </Routes>
     
        </div>
  );
}

export default App;
