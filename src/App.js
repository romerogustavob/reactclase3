import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { useEffect, useState } from 'react';
import { Diagram2 } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';

function App() {
  const [counter, setCounter]=useState(0);
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const datetime2=current.toString();

  useEffect(() => {      
    setTimeout( ()=>{
      console.log('Efecto al montaje')
    },5000)
  }, []);

  useEffect(() => {  
    console.log('Efecto al montaje y cambio el counter')
    return () => {
      
    }
  }, [counter]);
  
  useEffect(() => {  
    console.log('Efecto en cada render')
    return () => {
      console.log('Efecto al desmontar')
    }
  });

  const handleClick=()=>{
    console.log('You are doing a click');
    setCounter(counter + 1);
  }
  console.log('hubo render');
  return (
    <>
    <div className='container'>
    <NavBar/>
    <div>
      <strong>Contador: {counter} -- {datetime2}</strong>
    </div>
    <Button variant="secondary" size="sm" active onClick={handleClick}>Click</Button>
      <h2>Las ofertas de la semana</h2>
      <ItemListContainer greeting={'Saludos'}/>
    </div>

      
    </>
  );
}

export default App;
