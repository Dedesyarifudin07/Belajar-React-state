// import { useState} from 'react';
// import { useEffect } from 'react';
import './App.css';
// import Navbar from './Components/Navbar.js';
import { AppProvider } from './Context/AppContext';
// import Setting from './Components/Setting';
import DisplayTheme from './Components/DisplayTheme';
import ToggleTheme from './Components/ToggleTheme';
import { Reducer } from './Components/Reducer';
import Setting from './Components/Setting';
import Navbar from './Components/Navbar';
import {  ThemeProvider } from './Context/ThemeContext';


function App() {
  return (
    <>
    <div className="App">
       <AppProvider>
          <ThemeProvider>
              <Navbar/>
              <hr/>  
              <hr/>
              <Setting/>
              <hr/>
              <ToggleTheme/>          
              <DisplayTheme/>
          </ThemeProvider>
       </AppProvider>
    </div>
    </>
  );
}

export default App;
