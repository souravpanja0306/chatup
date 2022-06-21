const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const registrationSchema = new mongoose.Schema({
    name: {},
    phone: {},
    email: {},
    password: {},
    confirmpassword: {},
    tokens: [{
        token: {}
    }]
})

registrationSchema.pre("save", async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12)
        this.confirmpassword = await bcrypt.hash(this.confirmpassword, 12)
    }
    next()
})

registrationSchema.methods.generateAuthToken = async function () {
    try {
        let newToken = jwt.sign({ _id: this._id }, "iamsouravpanjailovemymotherfather")
        this.tokens = this.tokens.concat({ token: newToken })
        await this.save()
        return newToken

    } catch (error) {
        console.log(error)
    }
}

const RegistrationData = mongoose.model("registrations", registrationSchema)
module.exports = RegistrationData