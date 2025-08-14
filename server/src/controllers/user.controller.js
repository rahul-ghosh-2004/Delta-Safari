import AsyncHandler from "../utils/AsyncHandler.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import ResponseHandler from "../utils/ResponseHandler.js";
import User from "../models/user.model.js";

const isValidMobileNumber = (number) => {
    const numStrings = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ]
    let flag = true

    for (let i=0; i<number?.length; i++) {
        if (!numStrings.includes(number[i])) {
            flag = false
            break
        } 
    }

    return flag
}


const signup = AsyncHandler(async (req, res) => {
    const {
        fullname,
        email,
        phone,
        password
    } = req.body

    if (!fullname || !email || !phone || !password) {
        throw new ErrorHandler(400, "All fields are required!")
    }

    if (fullname?.trim() === "") {
        return res
        .status(400)
        .json(
            new ErrorHandler(400, "Fullname shouldn't be empry!")
        )
    }

    if (!/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(email)){
        throw new ErrorHandler(400, "Invalid email! :(")
    }

    if (phone?.trim() == "") {
        throw new ErrorHandler(400, "Incorrect mobile number! :(")
    }

    if (!(password?.trim()?.length > 7)) {
        throw new ErrorHandler(400, "Password must be 8 or more than 8 characters long!")
    }

    const isUserPresent = await User.findOne({
        $or: [
            {
                email: email?.trim()
            },
            {
                phone: phone?.trim()
            }
        ]
    })

    if (isUserPresent) {
        throw new ErrorHandler(400, "Account is already present! Go for login! :(")
    }

    const createdUser = await User.create(
        {
            fullname: fullname?.trim(),
            phone: phone?.trim(),
            email: email?.trim(),
            password: password?.trim()
        }
    )

    const isUserCreated = await User.findById(createdUser?._id)

    if (!isUserCreated) {
        throw new ErrorHandler(400, "Incorrect mobile number! :(")
    }

    return res
    .status(200)
    .json(
        new ResponseHandler(200, isUserCreated, "Account created successfully! :)")
    )
})

const login = AsyncHandler(async (req, res) => {
    const { id, password } = req?.body

    if (!id || !password) {
        throw new ErrorHandler(400, "All fields are required!")
    }

    if (id?.trim() === "") {
        throw new ErrorHandler(400, "Invalid Mobile no or Email!")
    }

    if (!(password?.trim().length > 7)) {
        throw new ErrorHandler(400, "Password must be 8 or more than 8 characters long!")
    }

    const userData = await User.findOne({
        $or: [
            {
                email: id?.trim()
            },
            {
                phone: id?.trim()
            }
        ]
    })

    if (!userData) {
        throw new ErrorHandler(400, "User not found! Go for account creation!")
    }

    const isValidPassword = await userData.validatePassword(password)

    if (!isValidPassword) {
        throw new ErrorHandler(400, "Invalid password!")
    }

    const accessToken = userData.generateToken()

    const options = {
        "httpOnly": true,
        "secure": true
    }

    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .json(
        new ResponseHandler(200, {}, "User logged in successfully!")
    )
})

const logout = AsyncHandler(async (req, res) => {
    const options = {
        "httpOnly": true,
        "secure": true,
        "sameSite": None,
    }

    return res
    .status(200)
    .clearCookie("accessToken", options)
    .json(
        new ResponseHandler(200, {}, "User logged out successfully!")
    )
})


export {
    signup,
    login,
    logout
}