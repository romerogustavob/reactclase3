import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'

const ItemList = ({chars}) => {

    
  return (
    <>
        <div>
            { chars.map(c=><Item key={c.id} {...c} />) }
        </div>
       
    </>
    
  )
}

export default ItemList