import React from 'react'
import chatup from '../Assets/images/chat2.png'


const Home = () => {
    return (
        <>
            <div className='p-4 font-mono'>
                <div className='m-4'>
                    <h1 className='flex justify-center text-9xl font-bold text-orange-500'>
                        <span className='text-4xl text-blue-600 italic'>Let's</span>Chatup
                    </h1>
                    <p className='text-blue-600 font-bold text-4xl text-center'>The World Most Famous and Most Useable Chat Application</p>
                    <p className='text-blue-600 font-bold text-4xl text-center'>More Than 700 Billion+ Users in all Over<span className='text-5xl text-green-500'>The Univers</span></p>
                </div>

                <div className='flex justify-center h-72'>
                    <img src={chatup} alt="None" />
                </div>
                <div className='flex'>
                    <div className='w-1/2 border-solid border-2 border-orange-200 shadow-lg rounded-lg p-4 m-4'>
                        <p className='text-justify indent-8'>
                            Hi, this is Sourav here. I am Mern Stack Developer. You can Visit at "www.souravpanja.com"
                            this is my one of test application build with Socket.io.
                        </p>
                    </div>
                    <div className='w-1/2 border-solid border-2 border-orange-200 shadow-lg rounded-lg p-4 m-4'>
                        <p className='text-justify indent-8'>
                            Chatup is very fast chat application created with ReactJs, ExpressJs, NodeJs, MongoDB as called Mern Stack.
                            Also this chat app use Socket.Io
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home