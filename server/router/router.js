const express = require('express')
const router = express.Router()
const cors = require('cors')
const mongoose = require('mongoose')
const registrationSchema = require('../models/registrationModel')

// const registration = require('../controllers/RegistrationCon')

router.use(cors())
router.use(express.json())

router.post('/registration', async (req, res) => {
    const RegData = req.body
    console.log(RegData)
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
})

router.get('/registration/data', async (req, res) => {
    const UserDatas = await registrationSchema.find()
    res.send(UserDatas)
})

router.post('/login', async (req, res) => {
    const logData = req.body
    console.log(logData)
    const loginData = await registrationSchema.findOne({
        email: req.body.username,
        password: req.body.password
    })

    if (loginData) {
        res.status(200).json({ status: "ok", loginData: true })
    } else {
        res.status(201).json({ status: "error", loginData: false })
    }
})

router.post('/conversations', conversationCon)


module.exports = router