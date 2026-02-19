import React from 'react'
import products from '../data/products'

const Cards = () => {

  return <>
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6'>
    {
        products.map(x=>(
            <div className='bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition' key={x.id}>
            <img
             src={x.image}
             alt='img'
             className='rounded-md mb-4'
            />
            <h2 className='text-xl font-semibold'>
               {x.title}
            </h2>
            <p className='text-gray-600'>{x.brand}</p>
            <p className='text-gray-600'>{x.category}</p>
            <p className='text-gray-600'>{x.price}</p>
            <p className='text-gray-600'><b>Stock: </b>{x.stock}</p>
            <button className='mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700'>
                Buy Now
            </button>
            </div>    
        ))
    }


  </div>
  
  
  </>
}

export default Cards