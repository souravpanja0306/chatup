const express = require('express')
const router = express.Router()

// Import Controllers
const { registrationPost, registrationGet, registrationGetId } = require('../controllers/registrationCon')
const { loginPost } = require('../controllers/loginCon')
const { conversationPost, conversationGet } = require('../controllers/conversationCon')
const { messegeGet, messegePost } = require('../controllers/messegeCon')

const authenticate = require('../middleware/authenticate')

// Registration Data Post , Get 
router.post('/registration', registrationPost) //Post Data
router.get('/registration/data', registrationGet) //Get Data
router.get('/registration/data/:id', registrationGetId) //Get Data

// Login
router.post('/login', loginPost) //Post data for find

// Conversations
router.post('/conversations', conversationPost) //Post Conversations
router.get('/conversations/:userId', conversationGet) //Get Sender and receiver detail from conversation by id.

//Messeges
router.post('/messege', messegePost)
router.get('/messege/:conversationId', messegeGet)

// Pages Router 
router.get("/messenger", authenticate, (req, res, next) => {
    res.status(200).json(req.userData)
})


module.exports = router