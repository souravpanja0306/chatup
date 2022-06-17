const express = require('express')
const router = require('./router/router')
const mongoose = require('mongoose')

const app = express()
const port = 4000
const db = `mongodb://chatup:chatup@cluster0-shard-00-00.9gjyz.mongodb.net:27017,cluster0-shard-00-01.9gjyz.mongodb.net:27017,cluster0-shard-00-02.9gjyz.mongodb.net:27017/?ssl=true&replicaSet=atlas-if5rvi-shard-0&authSource=admin&retryWrites=true&w=majority`

app.use(router)

app.listen(port, () => {
    console.log(`Starting http://localhost:${port}`)
})

mongoose.connect(db, {})
    .then(() => console.log('Connected MongoDB'))
    .catch(() => console.log('Not Connected MongoDB'))