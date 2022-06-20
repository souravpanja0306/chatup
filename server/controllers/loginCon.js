const registrationSchema = require('../models/registrationSchema')
const mongoose = require('mongoose')


// Login Data fatch from MongoDB
const loginPost = async (req, res) => {
    const loginData = await registrationSchema.findOne({
        email: req.body.username,
        password: req.body.password
    })

    if (loginData) {
        res.status(200).json({ status: "Ok", loginData: true })
    } else {
        res.status(201).json({ status: "Error", loginData: false })
    }
}

module.exports = { loginPost }