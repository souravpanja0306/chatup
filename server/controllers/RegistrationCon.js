const registrationSchema = require('../models/registrationSchema')
const mongoose = require('mongoose')


// Registration Data Post to mongoDB
const registrationPost = async (req, res) => {
    try {
        const user = new registrationSchema({
            name: (req.body.name).toUpperCase(),
            phone: req.body.phone,
            email: req.body.email,
            password: req.body.password,
            confirmpassword: req.body.confirmpassword
        })
        res.status(200).json("Successfully created")
        user.save()
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