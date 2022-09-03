import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  const addOnb = ({valor}) => {
    alert('el valor actual es '+parseInt({valor}))
  }
  return (
    <>
    <div className='container'>
    <NavBar/>
    <ItemCount stock='5' inicio='1' addOn={addOnb}/>
    </div>

      
    </>
  );
}

export default App;
