const registrationSchema = require('../models/registrationSchema')
const mongoose = require('mongoose')



// Registration Data Post to mongoDB
const registrationPost = async (req, res) => {
    const { name, phone, email, password, confirmpassword } = req.body
    try {
        if (password != confirmpassword) {
            res.status(401).json("Password Not Match")
        } else {
            const user = await new registrationSchema({
                name: (name).toUpperCase(),
                phone: phone,
                email: email,
                password: password,
                confirmpassword: confirmpassword
            })

            await user.save()
            res.status(200).json("Successfully created")
        }

    } catch (error) {
        console.log(error, "Sorry")
    }
}

// Registration Data Get from Mongodb
const registrationGet = async (req, res) => {
    const UserDatas = await registrationSchema.find()
    res.send(UserDatas)
}

const registrationGetId = async (req, res) => {
    const ids = req.params.id
    const UserDataById = await registrationSchema.findById(ids)
    res.send(UserDataById)
}

module.exports = { registrationPost, registrationGet, registrationGetId }