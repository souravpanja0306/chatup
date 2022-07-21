import React from 'react'
import { AiFillAndroid, AiFillWindows, AiFillApple } from "react-icons/ai";


const Home = () => {
    return (
        <>
            <h1 className='p-8 flex justify-center text-9xl font-bold text-orange-500 italic font-mono'>
                <span className='text-2xl md:lg:xl:text-4xl text-blue-600 italic'>Let's</span>Chatup
            </h1>
            <div className='md:lg:xl:flex p-6 font-mono'>
                <div className='md:lg:xl:w-1/2 m-4'>
                    <p className='text-gray-600 font-bold text-5xl'>Introduce, The World Most Famous and Most Download Online Chat Application</p>
                    <p className='text-gray-400 py-2 font-bold text-xl'>700 Billions Downloads in The Univers</p>
                </div>
                <div className='justify-center items-center md:lg:xl:w-1/2'>
                    <div className='border-solid border-2 border-orange-200 shadow-lg rounded-lg p-4 m-4'>
                        <p className='text-justify indent-8'>
                            Hi, this is Sourav here. I am Mern Stack Developer. You can visit at "www.souravpanja.com"
                            this is my one of test application build with || Socket.io / MongoDB / ReactJs ||.
                        </p>
                    </div>
                    <div className='border-solid border-2 border-orange-200 shadow-lg rounded-lg p-4 m-4'>
                        <p className='text-justify indent-8'>
                            Chatup is very fast chat application created with ReactJs, ExpressJs, NodeJs, MongoDB as called Mern Stack,
                            also this chat app use Socket.Io
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <p className='flex items-center text-blue-400 font-bold text-xl hover:border-2  hover:border-gray-400 cursor-pointer m-1 hover:rounded-lg p-2 border-2 border-white rounded-lg'><AiFillAndroid/>Android</p>
                <p className='flex items-center text-blue-400 font-bold text-xl hover:border-2  hover:border-gray-400 cursor-pointer m-1 hover:rounded-lg p-2 border-2 border-white rounded-lg'><AiFillWindows/>Windows</p>
                <p className='flex items-center text-blue-400 font-bold text-xl hover:border-2 hover:border-gray-400 cursor-pointer m-1  hover:rounded-lg p-2 border-2 border-white rounded-lg'><AiFillApple/>IPhone</p>
            </div>
        </>
    )
}

export default Home