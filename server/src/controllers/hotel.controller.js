import ErrorHandler from "../utils/ErrorHandler.js";
import ResponseHandler from "../utils/ResponseHandler.js"
import AsyncHandler from "../utils/AsyncHandler.js";
import Hotels from "../models/hotels.model.js";
import uploadOnCloudinary from "../utils/cloudinary.js";

const createHotel = AsyncHandler(async (req, res) => {
    if (req?.user?.type === "USER") {
        throw new ErrorHandler(401, "Unauthorised user!")
    }
    const {
        name, location, descriptionAboutHotel, originalPrice, discount, bookWithZero, freeBreakfast, freeParking, freeCancellation, twentyFourHourFrontDesk, ac, bar, wifi, breakfast, laundry, gym, 
    } = req?.body

    if (!name || !location || !descriptionAboutHotel || !originalPrice || !discount) {
        throw new ErrorHandler(400, "All fields are required!")
    }

    if (name?.trim() === "") {
        throw new ErrorHandler(400, "Hotel name should not be empty!")
    }

    if (location?.trim() === "") {
        throw new ErrorHandler(400, "Hotel location is empty!")
    }

    if (descriptionAboutHotel?.trim() === "") {
        throw new ErrorHandler(400, "Hotel description is empty!")
    }

    if (Number(originalPrice) <= 0) {
        throw new ErrorHandler(400, "Price should be more than 0!")
    }

    if (Number(discount) < 0) {
        throw new ErrorHandler(400, "Invalid discount amount!")
    }

    if (Number(discount) > Number(originalPrice)) {
        throw new ErrorHandler(400, "Discount price should not exceed from original price!")
    }

    let images = {
        "image1": req?.files?.image1 ? req?.files?.image1[Number(0)]?.path : "",
        "image2": req?.files?.image2 ? req?.files?.image2[Number(0)]?.path : "",
        "image3": req?.files?.image3 ? req?.files?.image3[Number(0)]?.path : "",
        "image4": req?.files?.image4 ? req?.files?.image4[Number(0)]?.path : "",
        "image5": req?.files?.image5 ? req?.files?.image5[Number(0)]?.path : "",
    }

    let secureImageUrls = {
        "image1": images?.image1 ? await uploadOnCloudinary(images?.image1) : "",
        "image2": images?.image2 ? await uploadOnCloudinary(images?.image2) : "",
        "image3": images?.image3 ? await uploadOnCloudinary(images?.image3) : "",
        "image4": images?.image4 ? await uploadOnCloudinary(images?.image4) : "",
        "image5": images?.image5 ? await uploadOnCloudinary(images?.image5) : "",
    }

    const hotel = await Hotels.create({
        name: name?.trim(),
        location: location?.trim(),
        descriptionAboutHotel: descriptionAboutHotel?.trim(),
        originalPrice: Number(originalPrice),
        priceAfterDiscount: !discount ? 0 : Number(originalPrice) - Number(discount),
        image1: secureImageUrls?.image1 ? secureImageUrls?.image1 : "",
        image2: secureImageUrls?.image2 ? secureImageUrls?.image2 : "",
        image3: secureImageUrls?.image3 ? secureImageUrls?.image3 : "",
        image4: secureImageUrls?.image4 ? secureImageUrls?.image4 : "",
        image5: secureImageUrls?.image5 ? secureImageUrls?.image5 : "",
        createdBy: req?.user?._id
    })

    const isHotelCreated = await Hotels.findById(hotel?._id)

    if (!isHotelCreated) {
        throw new ErrorHandler(500, "Something went wrong while uploading hotel data!")
    }

    return res
    .status(201)
    .json(
        new ResponseHandler(200, isHotelCreated, "Hotel data created successfully!")
    )
})

const toggleTwentyFourHourFrontDesk = AsyncHandler(async (req, res) => {
    if (req?.user?.type === "USER") {
        throw new ErrorHandler(401, "Unauthorised user!")
    }

    const { _id } = req?.params

    const hotelData = await Hotels.findById(_id)

    if (!hotelData) {
        throw new ErrorHandler(400, "Hotel not found! Invalid hotel id!")
    }

    hotelData.amenities.twentyFourHourFrontDesk = !hotelData.amenities.twentyFourHourFrontDesk
    await hotelData.save()

    return res
    .status(200)
    .json(
        new ResponseHandler(200, {}, "Twenty Four Hour Front Desk status toggled!")
    )
})

const toggleACStatus = AsyncHandler(async (req, res) => {
    if (req?.user?.type === "USER") {
        throw new ErrorHandler(401, "Unauthorised user!")
    }

    const { _id } = req?.params

    const hotelData = await Hotels.findById(_id)

    if (!hotelData) {
        throw new ErrorHandler(400, "Hotel not found! Invalid hotel id!")
    }

    hotelData.amenities.ac = !hotelData.amenities.ac
    await hotelData.save()

    return res
    .status(200)
    .json(
        new ResponseHandler(200, {}, "AC status toggled!")
    )
})

const toggleBarStatus = AsyncHandler(async (req, res) => {
    if (req?.user?.type === "USER") {
        throw new ErrorHandler(401, "Unauthorised user!")
    }

    const { _id } = req?.params

    const hotelData = await Hotels.findById(_id)

    if (!hotelData) {
        throw new ErrorHandler(400, "Hotel not found! Invalid hotel id!")
    }

    hotelData.amenities.bar = !hotelData.amenities.bar
    await hotelData.save()

    return res
    .status(200)
    .json(
        new ResponseHandler(200, {}, "Bar status toggled!")
    )
})

const toggleWifiStatus = AsyncHandler(async (req, res) => {
    if (req?.user?.type === "USER") {
        throw new ErrorHandler(401, "Unauthorised user!")
    }

    const { _id } = req?.params

    const hotelData = await Hotels.findById(_id)

    if (!hotelData) {
        throw new ErrorHandler(400, "Hotel not found! Invalid hotel id!")
    }

    hotelData.amenities.wifi = !hotelData.amenities.wifi
    await hotelData.save()

    return res
    .status(200)
    .json(
        new ResponseHandler(200, {}, "wifi status toggled!")
    )
})

const toggleBreakfastStatus = AsyncHandler(async (req, res) => {
    if (req?.user?.type === "USER") {
        throw new ErrorHandler(401, "Unauthorised user!")
    }

    const { _id } = req?.params

    const hotelData = await Hotels.findById(_id)

    if (!hotelData) {
        throw new ErrorHandler(400, "Hotel not found! Invalid hotel id!")
    }

    hotelData.amenities.breakfast = !hotelData.amenities.breakfast
    await hotelData.save()

    return res
    .status(200)
    .json(
        new ResponseHandler(200, {}, "breakfast status toggled!")
    )
})

const toggleLaundryStatus = AsyncHandler(async (req, res) => {
    if (req?.user?.type === "USER") {
        throw new ErrorHandler(401, "Unauthorised user!")
    }

    const { _id } = req?.params

    const hotelData = await Hotels.findById(_id)

    if (!hotelData) {
        throw new ErrorHandler(400, "Hotel not found! Invalid hotel id!")
    }

    hotelData.amenities.laundry = !hotelData.amenities.laundry
    await hotelData.save()

    return res
    .status(200)
    .json(
        new ResponseHandler(200, {}, "laundry status toggled!")
    )
})

const toggleGymStatus = AsyncHandler(async (req, res) => {
    if (req?.user?.type === "USER") {
        throw new ErrorHandler(401, "Unauthorised user!")
    }

    const { _id } = req?.params

    const hotelData = await Hotels.findById(_id)

    if (!hotelData) {
        throw new ErrorHandler(400, "Hotel not found! Invalid hotel id!")
    }

    hotelData.amenities.gym = !hotelData.amenities.gym
    await hotelData.save()

    return res
    .status(200)
    .json(
        new ResponseHandler(200, {}, "gym status toggled!")
    )
})

const toggleRestaurantStatus = AsyncHandler(async (req, res) => {
    if (req?.user?.type === "USER") {
        throw new ErrorHandler(401, "Unauthorised user!")
    }

    const { _id } = req?.params

    const hotelData = await Hotels.findById(_id)

    if (!hotelData) {
        throw new ErrorHandler(400, "Hotel not found! Invalid hotel id!")
    }

    hotelData.amenities.restaurant = !hotelData.amenities.restaurant
    await hotelData.save()

    return res
    .status(200)
    .json(
        new ResponseHandler(200, {}, "restaurant status toggled!")
    )
})

const toggleSpaStatus = AsyncHandler(async (req, res) => {
    if (req?.user?.type === "USER") {
        throw new ErrorHandler(401, "Unauthorised user!")
    }

    const { _id } = req?.params

    const hotelData = await Hotels.findById(_id)

    if (!hotelData) {
        throw new ErrorHandler(400, "Hotel not found! Invalid hotel id!")
    }

    hotelData.amenities.spa = !hotelData.amenities.spa
    await hotelData.save()

    return res
    .status(200)
    .json(
        new ResponseHandler(200, {}, "spa status toggled!")
    )
})

const toggleRoomServiceStatus = AsyncHandler(async (req, res) => {
    if (req?.user?.type === "USER") {
        throw new ErrorHandler(401, "Unauthorised user!")
    }

    const { _id } = req?.params

    const hotelData = await Hotels.findById(_id)

    if (!hotelData) {
        throw new ErrorHandler(400, "Hotel not found! Invalid hotel id!")
    }

    hotelData.amenities.roomService = !hotelData.amenities.roomService
    await hotelData.save()

    return res
    .status(200)
    .json(
        new ResponseHandler(200, {}, "roomService status toggled!")
    )
})

const toggleElevatorStatus = AsyncHandler(async (req, res) => {
    if (req?.user?.type === "USER") {
        throw new ErrorHandler(401, "Unauthorised user!")
    }

    const { _id } = req?.params

    const hotelData = await Hotels.findById(_id)

    if (!hotelData) {
        throw new ErrorHandler(400, "Hotel not found! Invalid hotel id!")
    }

    hotelData.amenities.elevator = !hotelData.amenities.elevator
    await hotelData.save()

    return res
    .status(200)
    .json(
        new ResponseHandler(200, {}, "elevator status toggled!")
    )
})

const toggleSecurityStatus = AsyncHandler(async (req, res) => {
    if (req?.user?.type === "USER") {
        throw new ErrorHandler(401, "Unauthorised user!")
    }

    const { _id } = req?.params

    const hotelData = await Hotels.findById(_id)

    if (!hotelData) {
        throw new ErrorHandler(400, "Hotel not found! Invalid hotel id!")
    }

    hotelData.amenities.security = !hotelData.amenities.security
    await hotelData.save()

    return res
    .status(200)
    .json(
        new ResponseHandler(200, {}, "security status toggled!")
    )
})

const toggleTravelDeskStatus = AsyncHandler(async (req, res) => {
    if (req?.user?.type === "USER") {
        throw new ErrorHandler(401, "Unauthorised user!")
    }

    const { _id } = req?.params

    const hotelData = await Hotels.findById(_id)

    if (!hotelData) {
        throw new ErrorHandler(400, "Hotel not found! Invalid hotel id!")
    }

    hotelData.amenities.travelDesk = !hotelData.amenities.travelDesk
    await hotelData.save()

    return res
    .status(200)
    .json(
        new ResponseHandler(200, {}, "travelDesk status toggled!")
    )
})

const togglePowerBackupStatus = AsyncHandler(async (req, res) => {
    if (req?.user?.type === "USER") {
        throw new ErrorHandler(401, "Unauthorised user!")
    }

    const { _id } = req?.params

    const hotelData = await Hotels.findById(_id)

    if (!hotelData) {
        throw new ErrorHandler(400, "Hotel not found! Invalid hotel id!")
    }

    hotelData.amenities.powerBackup = !hotelData.amenities.powerBackup
    await hotelData.save()

    return res
    .status(200)
    .json(
        new ResponseHandler(200, {}, "powerBackup status toggled!")
    )
})

const toggleCentralACStatus = AsyncHandler(async (req, res) => {
    if (req?.user?.type === "USER") {
        throw new ErrorHandler(401, "Unauthorised user!")
    }

    const { _id } = req?.params

    const hotelData = await Hotels.findById(_id)

    if (!hotelData) {
        throw new ErrorHandler(400, "Hotel not found! Invalid hotel id!")
    }

    hotelData.amenities.centralAc = !hotelData.amenities.centralAc
    await hotelData.save()

    return res
    .status(200)
    .json(
        new ResponseHandler(200, {}, "centralAc status toggled!")
    )
})

const toggleCCTVStatus = AsyncHandler(async (req, res) => {
    if (req?.user?.type === "USER") {
        throw new ErrorHandler(401, "Unauthorised user!")
    }

    const { _id } = req?.params

    const hotelData = await Hotels.findById(_id)

    if (!hotelData) {
        throw new ErrorHandler(400, "Hotel not found! Invalid hotel id!")
    }

    hotelData.amenities.cctv = !hotelData.amenities.cctv
    await hotelData.save()

    return res
    .status(200)
    .json(
        new ResponseHandler(200, {}, "cctv status toggled!")
    )
})

const toggleInternetFacilityStatus = AsyncHandler(async (req, res) => {
    if (req?.user?.type === "USER") {
        throw new ErrorHandler(401, "Unauthorised user!")
    }

    const { _id } = req?.params

    const hotelData = await Hotels.findById(_id)

    if (!hotelData) {
        throw new ErrorHandler(400, "Hotel not found! Invalid hotel id!")
    }

    hotelData.amenities.internetFacility = !hotelData.amenities.internetFacility
    await hotelData.save()

    return res
    .status(200)
    .json(
        new ResponseHandler(200, {}, "internetFacility status toggled!")
    )
})

const toggleBanquetHallStatus = AsyncHandler(async (req, res) => {
    if (req?.user?.type === "USER") {
        throw new ErrorHandler(401, "Unauthorised user!")
    }

    const { _id } = req?.params

    const hotelData = await Hotels.findById(_id)

    if (!hotelData) {
        throw new ErrorHandler(400, "Hotel not found! Invalid hotel id!")
    }

    hotelData.amenities.banquetHall = !hotelData.amenities.banquetHall
    await hotelData.save()

    return res
    .status(200)
    .json(
        new ResponseHandler(200, {}, "banquetHall status toggled!")
    )
})

const toggleConferenceHallStatus = AsyncHandler(async (req, res) => {
    if (req?.user?.type === "USER") {
        throw new ErrorHandler(401, "Unauthorised user!")
    }

    const { _id } = req?.params

    const hotelData = await Hotels.findById(_id)

    if (!hotelData) {
        throw new ErrorHandler(400, "Hotel not found! Invalid hotel id!")
    }

    hotelData.amenities.conferenceHall = !hotelData.amenities.conferenceHall
    await hotelData.save()

    return res
    .status(200)
    .json(
        new ResponseHandler(200, {}, "conferenceHall status toggled!")
    )
})

const togglePhotoCopyingStatus = AsyncHandler(async (req, res) => {
    if (req?.user?.type === "USER") {
        throw new ErrorHandler(401, "Unauthorised user!")
    }

    const { _id } = req?.params

    const hotelData = await Hotels.findById(_id)

    if (!hotelData) {
        throw new ErrorHandler(400, "Hotel not found! Invalid hotel id!")
    }

    hotelData.amenities.photoCopying = !hotelData.amenities.photoCopying
    await hotelData.save()

    return res
    .status(200)
    .json(
        new ResponseHandler(200, {}, "photoCopying status toggled!")
    )
})

const toggleBookWithZeroStatus = AsyncHandler(async (req, res) => {
    if (req?.user?.type === "USER") {
        throw new ErrorHandler(401, "Unauthorised user!")
    }

    const { _id } = req?.params

    const hotelData = await Hotels.findById(_id)

    if (!hotelData) {
        throw new ErrorHandler(400, "Hotel not found! Invalid hotel id!")
    }

    hotelData.bookWithZero = !hotelData.bookWithZero
    await hotelData.save()

    return res
    .status(200)
    .json(
        new ResponseHandler(200, {}, "bookWithZero status toggled!")
    )
})

const toggleFreeBreakfastStatus = AsyncHandler(async (req, res) => {
    if (req?.user?.type === "USER") {
        throw new ErrorHandler(401, "Unauthorised user!")
    }

    const { _id } = req?.params

    const hotelData = await Hotels.findById(_id)

    if (!hotelData) {
        throw new ErrorHandler(400, "Hotel not found! Invalid hotel id!")
    }

    hotelData.freeBreakfast = !hotelData.freeBreakfast
    await hotelData.save()

    return res
    .status(200)
    .json(
        new ResponseHandler(200, {}, "freeBreakfast status toggled!")
    )
})

const toggleFreeParking = AsyncHandler(async (req, res) => {
    if (req?.user?.type === "USER") {
        throw new ErrorHandler(401, "Unauthorised user!")
    }

    const { _id } = req?.params

    const hotelData = await Hotels.findById(_id)

    if (!hotelData) {
        throw new ErrorHandler(400, "Hotel not found! Invalid hotel id!")
    }

    hotelData.freeParking = !hotelData.freeParking
    await hotelData.save()

    return res
    .status(200)
    .json(
        new ResponseHandler(200, {}, "freeParking status toggled!")
    )
})

const toggleFreeCancellation = AsyncHandler(async (req, res) => {
    if (req?.user?.type === "USER") {
        throw new ErrorHandler(401, "Unauthorised user!")
    }

    const { _id } = req?.params

    const hotelData = await Hotels.findById(_id)

    if (!hotelData) {
        throw new ErrorHandler(400, "Hotel not found! Invalid hotel id!")
    }

    hotelData.freeCancellation = !hotelData.freeCancellation
    await hotelData.save()

    return res
    .status(200)
    .json(
        new ResponseHandler(200, {}, "freeCancellation status toggled!")
    )
})

export {
    createHotel,
    toggleTwentyFourHourFrontDesk,
    toggleACStatus,
    toggleBarStatus,
    toggleWifiStatus,
    toggleBreakfastStatus,
    toggleLaundryStatus,
    toggleGymStatus,
    toggleRestaurantStatus,
    toggleSpaStatus,
    toggleRoomServiceStatus,
    toggleElevatorStatus,
    toggleSecurityStatus,
    toggleCCTVStatus,
    toggleTravelDeskStatus,
    togglePowerBackupStatus,
    toggleCentralACStatus,
    toggleInternetFacilityStatus,
    toggleBanquetHallStatus,
    toggleConferenceHallStatus,
    togglePhotoCopyingStatus,
    toggleBookWithZeroStatus,
    toggleFreeBreakfastStatus,
    toggleFreeParking,
    toggleFreeCancellation
}