import React from 'react';
import './App.css'
//Screens Import
import MainScreen from './screens/MainScreen/MainScreen';

import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

const App = ()=>{
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<MainScreen/>}/>
     </Routes>
    </Router>
   
  )
}

export default App;
