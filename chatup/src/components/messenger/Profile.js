import React from 'react'
import Avater from '../../Assets/Images/avater.png'


const Profile = () => {
    const image = false

    return (
        <>
            <div className='flex p-2 items-center shadow-lg border-solid border-2 border-gray-200 m-1 rounded-lg font-mono'>
                <img src={image ? image : Avater} className="h-8 w-8" alt="None"/>
                <div>
                    <h1 className='px-2 text-lg font-bold'>Sourav Panja</h1>
                    <h1 className='px-2 text-green-500 text-xs'>Online</h1>
                </div>
            </div>
        </>
    )
}

export default Profile