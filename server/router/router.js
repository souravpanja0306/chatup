const express = require('express')
const router = express.Router()
const cors = require('cors')

// Import Controllers
const { registrationPost, registrationGet } = require('../controllers/registrationCon')
const { loginPost } = require('../controllers/loginCon')
const { conversationPost , conversationGet} = require('../controllers/conversationCon')
const { messegeGet, messegePost } = require('../controllers/messegeCon')

router.use(cors())
router.use(express.json())


// Registration Data Post , Get 
router.post('/registration', registrationPost) //Post Data
router.get('/registration/data', registrationGet) //Get Data

// Login
router.post('/login', loginPost) //Post data for find

// Conversations
router.post('/conversations', conversationPost) //Post Conversations
router.get('/conversations/:userid', conversationGet) //Get Sender and receiver detail from conversation by id.

//Messeges
router.post('/messege', messegePost)
router.get('/messege/:conversationId', messegeGet)


module.exports = router