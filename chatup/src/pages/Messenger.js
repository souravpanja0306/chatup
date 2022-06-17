import React from 'react'
import Conversation from '../components/messenger/Conversation'
import Profile from '../components/messenger/Profile'
import Messeges from '../components/messenger/Messeges'
import Online from '../components/messenger/Online'

const Messenger = () => {


    return (
        <>
            <div className='p-4 font-mono min-h-screen'>
                <h1 className='text-3xl font-bold text-orange-500 text-center'>Chatup Messenger</h1>
                <div className='flex'>
                    <div className='w-1/4 font-bold m-1 p-1 border-solid border-2 border-orange-100 shadow-lg rounded-lg'>
                        <div className='flex items-center p-2 shadow-lg border-solid border-2 border-gray-200 m-1 rounded-lg font-mono'>
                            <h1 className='px-2'>Conversation</h1>
                        </div>
                        <Conversation />
                        <Conversation />
                        <Conversation />
                    </div>
                    <div className='w-2/4 h-100 font-bold m-1 p-1 border-solid border-2 border-orange-100 shadow-lg rounded-lg'>
                        <Profile />
                        <div className='scroll'>
                            <Messeges me={false} />
                            <Messeges me={true} />
                            <Messeges />
                            <Messeges me={true} />
                            <Messeges me={true} />


                        </div>
                        <div className=''>
                            <form>
                                <textarea className='border-gray-500 border-2 w-full rounded-lg ' rows="4" />
                                <button className='bg-blue-700 text-white px-4 py-2 rounded-lg'>Send</button>
                            </form>

                        </div>
                    </div>
                    <div className='w-1/4 font-bold m-1 p-1 border-solid border-2 border-orange-100 shadow-lg rounded-lg'>
                        <div className='flex items-center p-2 shadow-lg border-solid border-2 border-gray-200 m-1 rounded-lg font-mono'>
                            <h1 className='px-2'>Online</h1>
                        </div>
                        <Online />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Messenger