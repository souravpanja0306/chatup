import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Conversation from '../components/messenger/Conversation'
import Profile from '../components/messenger/Profile'
import Messeges from '../components/messenger/Messeges'
import Online from '../components/messenger/Online'

const Messenger = () => {
    const [messeges, setMesseges] = useState() // Write messeges 
    const [onlineUsers, setOnlineUsers] = useState() // get all users from database
    const [conversation, setConversation] = useState() // get all conversation from data base
    const [conversationId, setConversationId] = useState() //get perticular conversation id 
    const [allMesseges, setAllMesseges] = useState() // Get all Messeges from database

    const navigate = useNavigate()
    const scrollRef = useRef()


    const currentUser = "62b20a35ba88f1e411a7a092"

    //  62b20a35ba88f1e411a7a092 sourav panja


    // This is for messeges
    const handelChange = (e) => {
        setMesseges(e.target.value)
    }

    const handelSubmit = async (e) => {
        e.preventDefault()
        const newMessege = {
            conversationId: conversationId,
            senderId: currentUser,
            text: messeges
        }
        try {
            const res = await axios.post('http://localhost:4000/messege', newMessege)
            setMesseges("")
            console.log(res)
        } catch (err) {
            console.log(err)
        }
    }

    // Get User 
    useEffect(() => {
        const isUser = async () => {
            try {
                const res = await axios.get('http://localhost:4000/authenticate')
                console.log(res)
            } catch (err) {
                console.log(err)
                navigate('/login')
            }
        }
        isUser()
    }, [])


    // Get all users 
    useEffect(() => {
        const getusers = async () => {
            try {
                const res = await axios.get('http://localhost:4000/registration/data')
                setOnlineUsers(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        getusers()
    }, [])

    // Get all conversation from all users(Online)
    useEffect(() => {
        const GetConversations = async () => {
            try {
                const res = await axios.get(`http://localhost:4000/conversations/${currentUser}`)
                setConversation(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        GetConversations()
    }, [conversation])


    // Get All messeges 
    useEffect(() => {
        const getAllMesseges = async () => {
            try {
                const res = await axios.get(`http://localhost:4000/messege/${conversationId._id}`)
                setAllMesseges(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        getAllMesseges()
    }, [conversation])


    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messeges])

    // This is for conversations id 
    const getConversationId = (c) => {
        setConversationId(c)
    }


    // for create conversations
    const createConversation = async (user) => {
        try {
            const resp = await axios.post(`http://localhost:4000/conversations`, {
                senderId: currentUser,
                receiverId: user
            })
            console.log(resp)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <div className='p-4 font-mono h-full bg-sky-700'>
                {/* <h1 className='text-3xl font-bold text-orange-600 text-center p-2'>Chatup Messenger</h1> */}
                <div className='flex'>
                    <div className='w-1/4 font-bold m-1 p-1 border-solid border-2 border-orange-100 shadow-orange-200 shadow-lg bg-white'>
                        <div className='h-12 flex justify-center items-center p-2 shadow-lg border-solid border-2 border-gray-200 font-mono'>
                            <h1 className='px-2'>Conversation</h1>
                        </div>
                        <div className='h-96 overflow-y-scroll'>
                            {
                                conversation && conversation.map((c, i) => {
                                    return (
                                        <div key={i}>
                                            <div onClick={() => getConversationId(c)}>
                                                <Conversation index={i} conversations={c} currentUser={currentUser} />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='w-2/4 font-bold p-1 border-solid border-2 m-1 border-orange-100 shadow-orange-200 shadow-lg scroll bg-white'>
                        <Profile conversationId={conversationId} currentUser={currentUser} />
                        {
                            conversationId
                                ? <>
                                    <div className='h-96 overflow-y-scroll'>
                                        <div className='p-4'>
                                            {
                                                allMesseges && allMesseges.map((m, i) => {
                                                    return (
                                                        <div key={i} ref={scrollRef}>
                                                            <Messeges messeges={m} me={m.senderId === currentUser} />
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </>
                                : <h1 className='text-center text-gray-300 text-8xl'>Please select a Conversation</h1>
                        }
                        {
                            conversationId
                                ? <div className='bg-white bottom-0 sticky inset-x-0'>
                                    <form className='flex'>
                                        <textarea className='p-4 border-gray-500 border-2 w-full rounded-lg' value={messeges} rows="1" onChange={(e) => handelChange(e)} />
                                        <div className='flex justify-center items-end p-1'>
                                            <button className='bg-blue-700 text-white px-4 py-2 rounded-lg' onClick={(e) => handelSubmit(e)}>Send</button>
                                        </div>
                                    </form>
                                </div>
                                : <div></div>
                        }
                    </div>
                    <div className='w-1/4 font-bold p-1 border-solid border-2 m-1 border-orange-100 shadow-orange-200 shadow-lg bg-white'>
                        <div className='h-12 flex justify-center items-center p-2 shadow-lg border-solid border-2 border-gray-200 font-mono'>
                            <h1 className=''>Online</h1>
                        </div>
                        <div className='h-96 overflow-y-scroll'>
                            {
                                onlineUsers && onlineUsers.map((user, index) => {
                                    return (
                                        <div key={index} className="" onClick={() => createConversation(user._id)}>
                                            <Online user={user} />
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