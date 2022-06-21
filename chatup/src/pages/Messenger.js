import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Conversation from '../components/messenger/Conversation'
import Profile from '../components/messenger/Profile'
import Messeges from '../components/messenger/Messeges'
import Online from '../components/messenger/Online'

const Messenger = () => {
    const [messeges, setMesseges] = useState()
    const navigate = useNavigate()

    const handelChange = (e) => {
        setMesseges(e.target.value)
        console.log(e.target.value)
    }

    const handelSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:4000/messege', {
            cconversationId: "62b0d21cab0ec12cecd3b4b0",
            senderId: "62ac9248abe172ea39d4b6c0",
            text: messeges
        })
            .then((res) => { console.log(res) })
            .catch((error) => console.log(error))

    }

    useEffect(() => {
        isUser()
    }, [])

    const isUser = async (req, res) => {
        try {
            const res = await axios.get('http://localhost:4000/messenger')
            console.log(res)
        } catch (error) {
            console.log(error)
            navigate('/login')
        }
    }


    return (
        <>
            <div className='p-4 font-mono min-h-screen'>
                <h1 className='text-3xl font-bold text-orange-500 text-center'>Chatup Messenger</h1>
                <div className='flex'>
                    <div className='w-1/4 font-bold m-1 p-1 border-solid border-2 border-orange-100 shadow-lg rounded-lg'>
                        <div className='flex items-center p-2 shadow-lg border-solid border-2 border-gray-200 m-1 rounded-lg font-mono'>
                            <h1 className='px-2'>Conversation</h1>
                        </div>
                        <div className='h-96 overflow-y-scroll'>
                            <Conversation />
                            <Conversation />
                            <Conversation />
                            <Conversation />
                            <Conversation />
                            <Conversation />
                            <Conversation />
                            <Conversation />
                            <Conversation />
                            <Conversation />
                            <Conversation />
                            <Conversation />
                            <Conversation />
                            <Conversation />
                            <Conversation />
                        </div>
                    </div>
                    <div className='w-2/4 h-100 font-bold m-1 p-1 border-solid border-2 border-orange-100 shadow-lg rounded-lg scroll'>
                        <Profile />
                        <div className='h-96 overflow-y-scroll '>
                            <Messeges me={false} />
                            <Messeges me={true} />
                            <Messeges />
                            <Messeges me={true} />
                            <Messeges me={true} />
                            <Messeges me={true} />
                            <Messeges me={true} />
                            <Messeges me={true} />
                        </div>
                        <div className=''>
                            <form className='flex'>
                                <textarea className='p-4 border-gray-500 border-2 w-full rounded-lg ' rows="2" onChange={(e) => handelChange(e)} />
                                <div className='flex justify-center items-end p-1'>
                                    <button className='bg-blue-700 text-white px-4 py-2 rounded-lg' onClick={(e) => handelSubmit(e)}>Send</button>
                                </div>
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