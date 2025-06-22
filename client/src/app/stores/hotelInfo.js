import { configureStore } from "@reduxjs/toolkit"
import hotelInfoReducer from "../features/hotelInfo.js"

const hotelInfoStore = configureStore({
    reducer: hotelInfoReducer
})

export default hotelInfoStore