import React from 'react'

const Productcard = ({ item, onAdd }) => {
    const outOFstock = item.stock === 0;

    return <>
        <div className='rounded-2xl'>
            <div className=''>
                <img
                    src={item.image}
                    alt='img'
                    className=''
                    loading='lazy'
                />
            </div>
            <div className='p-4'>
                <div className=''>
                    <div>
                        <h3 className=''>{item.title}</h3>
                        <p className='text-sm text-gray-500'>{item.brand} - {item.category}</p>
                        <p className='text-sm text-gray-500'>{item.price}</p>
                        <p className='text-sm text-gray-500'>{item.rating}</p>
                        <p className='text-sm text-gray-500'>{item.stock}</p>
                        <button
                         onClick={()=>onAdd(item)}
                         className=''
                         >
                            Add
                        </button>
                    </div>
                </div>

            </div>

        </div>

    </>
}

export default Productcard