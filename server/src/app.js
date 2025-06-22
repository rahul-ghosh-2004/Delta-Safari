import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    methods: [
        "GET",
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
    ],
    credentials: true
}))

app.use(cookieParser())

app.use(express.static("public"))

app.use(express.json({
    limit: "1mb",
}))

app.use(express.urlencoded({
    limit: "500kb",
    extended: true
}))



import userRouter from "./routes/user.routes.js"

app.use("/api/v1/user", userRouter)

export default app