import React, { useEffect, useState } from 'react'
import Avater from '../../assets/images/avater.png'
import axios from "axios"

const Conversation = ({ conversations, currentUser }) => {
    const [chatPerson, setChatPerson] = useState()
    const image = false

    useEffect(() => {
        const friends = conversations.members.find((m) => m !== currentUser)

        const getUser = async (req, res) => {
            try {
                const res = await axios.get(`http://localhost:4000/registration/data/${friends}`)
                setChatPerson(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        getUser()

    }, [conversations, currentUser])

    return (
        <>
            <div className='flex justify-between items-center p-3 border-solid border-2 border-gray-100 hover:bg-gray-200 cursor-pointer'>
                <div className='flex items-center'>
                    <img src={image ? image : Avater} className="h-8 w-8" alt="None" />
                    <div>
                        {
                            chatPerson
                                ? <h1 className='font-bold px-2 text-gray-700'>{chatPerson.name}</h1>
                                : <h1 className='font-bold px-2'>Sorry</h1>
                        }
                        <h1 className='text-sm px-2 text-gray-400'>Hello I am {chatPerson.name}</h1>
                    </div>

                </div>
                <div>
                    <span className='text-sm text-gray-400'>1m ago</span>
                </div>
            </div>
        </>
    )
}

export default Conversation