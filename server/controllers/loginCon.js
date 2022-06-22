const registrationSchema = require('../models/registrationSchema')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


// Login Data fatch from MongoDB
const loginPost = async (req, res) => {
    const { email, password } = req.body

    const loginData = await registrationSchema.findOne({ email: email }) //Is email exist? Checked
    const isMatch = await bcrypt.compare(password, loginData.password) //Is password Match? Checked

    const newToken = await loginData.generateAuthToken()

    res.cookie("Biscuit", newToken, {
        expires: new Date(Date.now() + 9999999),
        httpOnly: true
    })


    if (isMatch) {
        res.status(200).json({ status: "Ok", loginData: true })
    } else {
        res.status(201).json({ status: "Error", loginData: false })
    }
}

module.exports = { loginPost }