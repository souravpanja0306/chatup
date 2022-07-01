import React from 'react'
import Avater from '../../assets/images/avater.png'


const Online = ({ user }) => {
  const image = false
  const online = true


  return (
    <>
      <div className='flex justify-between items-center p-3 hover:bg-gray-200 cursor-pointer border-solid border-2 border-gray-100'>
        <div className='flex items-center justify-center '>

          <div className='flex justify-end items-end rounded-full'>
            <img src={image ? image : Avater} className="h-12 w-12 border-gray-300 border-solid border-4 rounded-full" alt="None" />
            {
              online
                ? <span className='rounded-full bg-green-500 border-2 border-solid border-green-500 h-2 w-2' />
                : <span className='rounded-full bg-white border-2 border-solid border-white h-2 w-2' />
            }
          </div>
          <div className=''>
            <h1 className='font-bold px-3 text-gray-700' >{user.name}</h1>
          </div>
        </div>
        <div>
          <span className='text-sm text-gray-400'>1m ago</span>
        </div>
      </div>
    </>
  )
}

export default Online