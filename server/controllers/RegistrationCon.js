const registrationSchema = require('../models/registrationSchema')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')


// Registration Data Post to mongoDB
const registrationPost = async (req, res) => {
    const { name, phone, email, password, confirmpassword } = req.body
    try {
        if(password != confirmpassword ){
            res.status(401).json("Password Not Match")
        }
        const user = new registrationSchema({
            name: (name).toUpperCase(),
            phone: phone,
            email: email,
            password: password,
            confirmpassword: confirmpassword
        })

        user.save()
        res.status(200).json("Successfully created")
    } catch {
        console.log("Sorry")
    }
}

// Registration Data Get from Mongodb
const registrationGet = async (req, res) => {
    const UserDatas = await registrationSchema.find()
    res.send(UserDatas)
}

module.exports = { registrationPost, registrationGet }