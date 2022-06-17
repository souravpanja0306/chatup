const mongoose = require('mongoose')


const registrationSchema = new mongoose.Schema({
    name:{},
    phone:{},
    email:{},
    password:{},
    confirmpassword:{}
})


const RegistrationData = mongoose.model("registrations", registrationSchema)
module.exports = RegistrationData