const registrationSchema = require('../models/registrationSchema')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


// Login Data fatch from MongoDB
const loginPost = async (req, res) => {
    const { email, password } = req.body

    const loginData = await registrationSchema.findOne({ email: email }) //Is email exist? Checked
    const isMatch = await bcrypt.compare(password, loginData.password) //Is password Matched? Checked
    const newToken = await loginData.generateAuthToken() //Generate Token

    console.log(newToken)

    res.cookie("Biscuit", newToken, {
        expires: new Date(Date.now() + 50000),
        httpOnly: true,
    })


    if (isMatch) {
        res.status(200).json({ status: "Ok", loginData: true })
    } else {
        res.status(201).json({ status: "Error", loginData: false })
    }
}

module.exports = { loginPost }