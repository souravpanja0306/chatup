import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const login = false

  return (
    <>
      <div className='p-2 flex justify-between items-center bg-gray-100 shadow-xl px-12 font-mono sticky top-0'>
        <div>
          <h1 className='text-4xl text-orange-600 font-bold cursor-pointer italic'><Link to="/">Chatup</Link></h1>
        </div>
        <div className='flex justify-center items-center'>
          <h1 className='font-bold text-lg hover:text-orange-500 px-4 py-2'><Link to="/">Home</Link></h1>
          <Link to="/messenger"><h1 className='font-bold text-white hover:bg-green-600 shadow-green-200 shadow-lg px-4 py-2 rounded-xl bg-green-500 cursor-pointer'>Messenger</h1></Link>

          {
            login ?
              <h1 className='font-bold text-lg hover:text-orange-500 px-4 py-2'><Link to="/">Logout</Link></h1>
              :
              <div className='flex'>
                <h1 className='font-bold text-lg hover:text-orange-500 px-4 py-2'><Link to="/login">Login</Link></h1>
                <h1 className='font-bold text-lg hover:text-orange-500 px-4 py-2'><Link to="/registration">Ragistration</Link></h1>
              </div>
          }
        </div>
      </div>
    </>
  )
}

export default Navbar