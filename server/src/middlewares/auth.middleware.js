import User from "../models/user.model.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import AsyncHandler from "../utils/AsyncHandler.js";
import JWT from "jsonwebtoken"


const verifyUser = AsyncHandler(async (req, res, next) => {
    try {
        const accessToken = req?.cookies?.accessToken || req?.header("Authorization")?.replace("Bearer ", "")
    
        if (!accessToken) {
            throw new ErrorHandler(401, "Unauthorised user!")
        }
    
        const decodedToken = JWT.verify(accessToken, process.env.TOKEN_SECRET)
        const user = await User.findById(decodedToken?._id).select("-password")
    
        if (!user) {
            throw new ErrorHandler(401, "Unauthorised user!")
        }
    
        req.user = user
        next()
    } catch (error) {
        throw new ErrorHandler(401, error?.message)
    }
})

export default verifyUser

