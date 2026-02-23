import React from 'react'
import { imageUrl } from '../api/api'
const Jobcard = ({ job, onEdit, onDelete }) => {

  return <>
    <div className='bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition' key={job.id}>
      {job.logo ? (
        <img
          src={imageUrl(job.logo)}
          alt='img'
          className='h-full w-full object-cover'
        />
      ) : (
        <span className='text-xs text-gray-400'>No logo</span>
      )
      }
    </div>
    <h2 className='text-xl font-semibold'>{job.title}</h2>
    <p className='text-gray-600'>{job.company}</p>
    <p className='text-gray-600'>{job.location}</p>
    <p className='text-gray-600'>{job.salary}</p>
    <p className='text-gray-600'>{job.description}</p>
     <button 
     className='mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700'
     onClick={onEdit(job)}
     >
        Edit
       </button>
     <button 
     className='mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700'
     onClick={onDelete(job._id)}
     >
        Delete
       </button>  
    

  </>
}

export default Jobcard