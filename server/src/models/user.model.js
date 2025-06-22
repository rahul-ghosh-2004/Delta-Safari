import mongoose, { Schema } from "mongoose"
import bcrypt from "bcrypt"
import JWT from "jsonwebtoken"

const userSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        index: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String
    }
}, { timestamps: true })

userSchema.pre("save", async function(next){
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 8)
    } else {
        next()
    }
})

userSchema.methods.validatePassword = async function(password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateToken = function(){
    return JWT.sign(
        {
            _id: this._id,
            email: this.email
        },
        process.env.TOKEN_SECRET,
        {
            expiresIn: process.env.TOKEN_EXPIRY
        }
    )
}

const User = mongoose.model("User", userSchema)

export default User