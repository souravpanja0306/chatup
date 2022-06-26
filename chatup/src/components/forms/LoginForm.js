import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import chatup from '../../assets/images/chatup.jpeg'


const LoginForm = () => {
    const navigate = useNavigate()
    const [userData, setUserData] = useState({ email: "", password: "" })

    const handelChange = (e) => {
        let userDatas = { ...userData }
        userDatas[e.target.name] = e.target.value
        setUserData(userDatas)
    }

    const submit = (e) => {
        e.preventDefault()
        const { email, password } = userData
        
        if (email && password) {
            axios.post("http://localhost:4000/login", userData)
                .then((res) => {
                    console.log(res.status)
                    if (res.status === 200) {
                        navigate('/messenger')
                    } else {
                        alert("Invalid Credentioal")
                    }
                })
                .catch((err) => { console.log(err) })
        } else {
            alert('Sorry')
        }


    }

    return (
        <>
            <div className='flex min-h-screen items-center'>
                <div className='w-1/2 flex items-center'>
                    <img src={chatup} alt="No Images" className='h-full w-full' />
                </div>
                <div className='w-1/2 grid px-24'>
                    <h1 className='text-3xl font-bold text-orange-500 text-center p-2'>Login</h1>
                    <form method="post">
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
                        <button className='bg-blue-500 px-4 py-2 rounded-xl my-2 text-white shadow-blue-200 shadow-lg hover:bg-blue-600' onClick={(e) => submit(e)}>Submit</button>
                    </form>
                    <div className='flex'>
                        <h1>Not Registered?</h1>
                        <h1 className='text-blue-500'><Link to="/registration">Registration</Link></h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginForm