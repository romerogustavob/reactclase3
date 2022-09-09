import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import SwapiContainer from './components/swapi/SwapiContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Switch, Route, Link, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   {/* <App />*/}
  <BrowserRouter>
  {/* <NavBar></NavBar> */}
  <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/swapi' element={<SwapiContainer/>} />
      <Route path='/' element={<App/>} />
      
  </Routes>
  <SwapiContainer/>
</BrowserRouter>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
