import React from 'react'
import Navbar from './components/Navbar'
import Productlist from './components/Productlist'
import products from './data/products'

const App = () => {

  return <>
  <Navbar />
  <Productlist products={products} />
  </>
}

export default App