const registrationSchema = require('../models/registrationSchema')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


// Login Data fatch from MongoDB
const loginPost = async (req, res) => {
    const { email, password } = req.body

    const loginData = await registrationSchema.findOne({ email: email }) //Is email exist? Checked

    if (loginData) {
        const isMatch = await bcrypt.compare(password, loginData.password) //Is password Matched? Checked

        if (isMatch) {
            const newToken = await loginData.generateAuthToken() //Generate Token
            res.cookie("Biscuit", newToken, {
                httpOnly: true,
            })
            res.status(200).json("Successfull")
        } else {
            res.status(401).json("Unsuccessfull")
        }
    } else {
        res.status(401).json("Unsuccessfull")
    }
}

module.exports = { loginPost }