import React, { useEffect, useState } from 'react'
import Avater from '../../assets/images/avater.png'
import axios from "axios"


const Profile = ({ conversationId, currentUser }) => {
    const image = false
    const [chatPerson, setChatPerson] = useState()
  
    useEffect(() => {
        if(conversationId){
            const friends = conversationId.members.find((m) => m !== currentUser)
            const getUser = async (req, res) => {
                try {
                    const res = await axios.get(`http://localhost:4000/registration/data/${friends}`)
                    setChatPerson(res.data)
                } catch (err) {
                    console.log(err)
                }
            }
            getUser()
        }else{
            console.log("Not")
        }
        
    }, [conversationId, currentUser])

    return (
        <>
            <div className='h-12 flex p-2 items-center shadow-lg border-solid border-2 border-gray-200 font-mono'>
                <img src={image ? image : Avater} className="h-8 w-8" alt="None" />
                <div>
                    <h1 className='px-2 text-lg font-bold'>{chatPerson ? chatPerson.name : "Please Select"}</h1>
                    <h1 className='px-2 text-green-500 text-xs'>{chatPerson ? "Online" : ""}</h1>
                </div>
            </div>
        </>
    )
}

export default Profile