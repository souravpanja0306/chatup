import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import chatup from '../../Assets/Images/chatup.jpeg'

const RegForm = () => {
    const navigate = useNavigate()
    const [regData, setRegData] = useState({
        name: "", phone: "", email: "", password: "", confirmpassword: ""
    })

    const handelChange = (e) => {
        let UserData = { ...regData }
        UserData[e.target.name] = e.target.value
        setRegData(UserData)
        console.log(UserData)
    }
    const handelSubmit = (e) => {
        const { name, phone, email, password, confirmpassword } = regData
        e.preventDefault()
        if (name && phone && email && password && confirmpassword) {
            axios.post("http://localhost:4000/registration", regData)
                .then((res) => { console.log(res) })
                .catch((err) => { console.log(err) })
            alert("Thank You for conneting with us")
            navigate('/login')
        } else {
            alert("Sorry")
        }
    }

    return (
        <>
            <div className='min-h-screen'>
                <div className='flex'>
                    <div className='w-1/2 grid px-24'>
                        <h1 className='text-3xl font-bold text-orange-500 text-center p-2'>Registration</h1>
                        <form method="post">
                            <div className='grid '>
                                <label className='p-2'>Name</label>
                                <input
                                    name="name"
                                    onChange={(e) => handelChange(e)}
                                    className='p-2 rounded-lg border-solid border-gray-600 border-2' />
                            </div>
                            <div className='grid'>
                                <label className='p-2'>Phone</label>
                                <input
                                    name="phone"
                                    onChange={(e) => handelChange(e)}
                                    className='p-2 rounded-lg border-solid border-gray-600 border-2' />
                            </div>
                            <div className='grid'>
                                <label className='p-2'>Email</label>
                                <input
                                    name="email"
                                    onChange={(e) => handelChange(e)}
                                    className='p-2 rounded-lg border-solid border-gray-600 border-2' />
                            </div>
                            <div className='grid'>
                                <label className='p-2'>Password</label>
                                <input
                                    name="password"
                                    type="password"
                                    onChange={(e) => handelChange(e)}
                                    className='p-2 rounded-lg border-solid border-gray-600 border-2' />
                            </div>
                            <div className='grid'>
                                <label className='p-2'>Confirm Password</label>
                                <input
                                    name="confirmpassword"
                                    type="password"
                                    onChange={(e) => handelChange(e)}
                                    className='p-2 rounded-lg border-solid border-gray-600 border-2' />
                            </div>
                            <button className='bg-blue-500 px-4 py-2 rounded-xl my-2 text-white' onClick={(e) => handelSubmit(e)}>Submit</button>
                        </form>
                        <div className='flex'>
                            <h1>Already Registered? </h1>
                            <h1 className='text-blue-500'><Link to="/login"> Login</Link></h1>
                        </div>
                    </div>
                    <div className='w-1/2 flex items-center'>
                        <img src={chatup} alt="No Images" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegForm