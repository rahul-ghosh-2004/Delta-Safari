import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    hotel: {}
}

const hotelInfoSlice = createSlice({
    name: "hotel",
    initialState: initialState,
    reducers: {
        addHotelInfo: (state, action) => {
            state.hotel = action
        }
    }
})

export const { addHotelInfo } = hotelInfoSlice.actions
export default hotelInfoSlice.reducer