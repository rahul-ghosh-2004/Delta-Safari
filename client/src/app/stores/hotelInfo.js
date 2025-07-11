import { configureStore } from "@reduxjs/toolkit"
import hotelInfoReducer from "../features/hotelInfo.js"

const hotelInfoStore = configureStore({
    reducer: {
        hotelInfo: hotelInfoReducer
},
})

export default hotelInfoStore