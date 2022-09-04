import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
  const [chars, setChars] = useState([])

    useEffect(() => {
        const URL='https://rickandmortyapi.com/api/character'
    
        fetch(URL)
          .then( res => res.json() )
          .then( data => {
            console.log(data.results)
            setChars(data.results)
          })
      
        return () => {
          
        }
      }, [])

  return (
    <>
      <div>
        Rick and Morty
      </div>
      <ItemList chars={chars}/>
    </>
    
  )
}

export default ItemListContainer