import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import ItemCount from './components/ItemCount/ItemCount';

function App() {

  return (
    <>
    <div className='container'>
    <NavBar/>
    <ItemListContainer/>
    </div>

      
    </>
  );
}

export default App;
