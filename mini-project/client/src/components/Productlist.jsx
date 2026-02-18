import React from 'react'
import Productcard from './Productcard'

const Productlist = ({products,onAdd}) => {
  return <>
  <div>
    {products.map(x=>(
        <Productcard item={item} onAdd={onAdd}/>
    ))}
  </div>
  
  </>
}

export default Productlist