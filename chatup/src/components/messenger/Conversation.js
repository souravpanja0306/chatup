import React from 'react'
import Avater from '../../Assets/images/avater.png'

const Conversation = () => {
    const image = false
    return (
        <>
            <div className='flex justify-between items-center p-3 hover:bg-gray-200 rounded-lg cursor-pointer'>
                <div className='flex items-center'>
                    <img src={image ? image : Avater} className="h-8 w-8" alt="None" />
                    <h1 className='font-bold px-2'>Sourav Panja</h1>
                </div>
                <div>
                    <span className='text-sm text-gray-400'>1m ago</span>
                </div>
            </div>
        </>
    )
}

export default Conversation