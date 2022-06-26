import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <div className='bg-gray-700 flex justify-between text-white items-center bottom-0 fixed inset-x-0 px-12 font-mono'>
            <h1 className='p-2 text-orange-500 font-bold text-3xl'><Link to="/">Chatup</Link></h1>
            <h1 className='p-2'>All rights reserve</h1>
            <h1 className='p-2'>Since - 1995</h1>
        </div>
    </>
  )
}

export default Footer