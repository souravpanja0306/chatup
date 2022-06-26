import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Conversation from '../components/messenger/Conversation'
import Profile from '../components/messenger/Profile'
import Messeges from '../components/messenger/Messeges'
import Online from '../components/messenger/Online'

const Messenger = () => {
    const [messeges, setMesseges] = useState()
    const [users, setUsers] = useState()
    const [conversationId, setConversationId] = useState('')
    const [senderId, setSenderId] = useState("62b20a35ba88f1e411a7a092")
    // const [receiverId, setReceiverId] = useState()

    const navigate = useNavigate()
    const currentUser = "62b20a35ba88f1e411a7a092"
    const chat = conversationId
    const handelChange = (e) => {
        setMesseges(e.target.value)
        console.log(e.target.value)
    }

    const handelSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:4000/messege', {
            cconversationId: "62b73d86f0a8ab032a2d3264",
            senderId: senderId,
            text: messeges
        })
            .then((res) => { console.log(res) })
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        isUser()
        getusers()
        particularUser()
    }, [])

    // This function is called in useEffect
    const isUser = async (req, res) => {
        try {
            const res = await axios.get('http://localhost:4000/messenger')
            console.log(res)
        } catch (error) {
            console.log(error)
            navigate('/login')
        }
    }

    // This function is called in useEffect
    const getusers = async () => {
        await axios.get('http://localhost:4000/registration/data')
            .then((res) => { setUsers(res.data) })
            .catch((error) => { console.log(error) })
    }

    const particularUser = () => {
        console.log("Your are Chutia")
    }
    const toMsg = async (user) => {
        // try {
        //     const res = await axios.get(`http://localhost:4000/registration/data/${user}`)
        //     setReceiverId(res.data)
        // } catch (err) {
        //     console.log(err)
        // }

        try {
            const res = await axios.post(`http://localhost:4000/conversations`, {
                senderId: senderId,
                receiverId: user
            })
        } catch (err) {
            console.log(err)
        }

    }

    return (
        <>
            <div className='p-4 font-mono min-h-screen bg-gray-200'>
                {/* <h1 className='text-3xl font-bold text-orange-600 text-center p-2'>Chatup Messenger</h1> */}
                <div className='flex h-screen bg-white'>
                    {/* <div className='w-1/4 font-bold m-1 p-1 border-solid border-2 border-orange-300 shadow-orange-200 shadow-lg rounded-lg'>
                        <div className='flex justify-center items-center p-2 shadow-lg border-solid border-2 border-gray-400 m-1 rounded-lg font-mono'>
                            <h1 className='px-2'>Conversation</h1>
                        </div>
                        <div className='h-96 overflow-y-scroll'>
                            <Conversation />
                            <Conversation />
                            <Conversation />
                            <Conversation />
                            <Conversation />
                            <Conversation />
                        </div>
                    </div> */}
                    <div className='w-3/4 font-bold p-1 border-solid border-2 m-1 border-orange-100 shadow-orange-200 shadow-lg scroll'>
                        {/* <Profile props={receiverId} /> */}
                        {
                            chat
                                ? <>
                                    <div className='h-4/5 overflow-y-scroll '>
                                        <Messeges me={false} />
                                        <Messeges me={true} />
                                        <Messeges />
                                        <Messeges me={true} />
                                        <Messeges me={true} />
                                        <Messeges me={true} />
                                        <Messeges me={true} />
                                        <Messeges me={true} />
                                        <div className='p-2 sticky bottom-0 bg-white'>
                                            <form className='flex'>
                                                <textarea className='p-4 border-gray-500 border-2 w-full rounded-lg ' rows="1" onChange={(e) => handelChange(e)} />
                                                <div className='flex justify-center items-end p-1'>
                                                    <button className='bg-blue-700 text-white px-4 py-2 rounded-lg' onClick={(e) => handelSubmit(e)}>Send</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </>
                                :
                                <h1 className='text-center text-gray-300 text-7xl'>Please select a conversation</h1>
                        }
                    </div>
                    <div className='w-1/4 font-bold p-1 border-solid border-2 m-1 border-orange-100 shadow-orange-200 shadow-lg'>
                        <div className='h-12 flex justify-center items-center p-2 shadow-lg border-solid border-2 border-gray-200 font-mono'>
                            <h1 className=''>Online</h1>
                        </div>
                        <div className='h-4/5 overflow-y-scroll'>
                            {
                                users && users.map((user, index) => {
                                    return (
                                        <div key={index} className="" onClick={() => toMsg(user._id)}>
                                            <Online props={user.name} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Messenger