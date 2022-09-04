import React from 'react'

const Item = ({name, species, image}) => {
  return (
    <>
        <div>
            <h1>{name}</h1>
            <h2>{species}</h2>
            <img src={image}/>
        </div>
    </>
    
  )
}

export default Item