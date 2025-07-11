import { Router } from "express"
import verifyUser from "../middlewares/auth.middleware.js"
import upload from "../middlewares/multer.middleware.js"
import {
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
} from "../controllers/hotel.controller.js"

const router = Router()

router.use(verifyUser)

router.route("/create").post(upload.fields([
    {
        name: "image1",
        maxCount: 1
    },
    {
        name: "image2",
        maxCount: 1
    },
    {
        name: "image3",
        maxCount: 1
    },
    {
        name: "image4",
        maxCount: 1
    },
    {
        name: "image5",
        maxCount: 1
    },
]), createHotel)
router.route("/twenty_four_hour_front_desk/:_id").patch(toggleTwentyFourHourFrontDesk)
router.route("/ac/:_id").patch(toggleACStatus)
router.route("/bar/:_id").patch(toggleBarStatus)
router.route("/wifi/:_id").patch(toggleWifiStatus)
router.route("/breakfast/:_id").patch(toggleBreakfastStatus)
router.route("/laundry/:_id").patch(toggleLaundryStatus)
router.route("/gym/:_id").patch(toggleGymStatus)
router.route("/restaurant/:_id").patch(toggleRestaurantStatus)
router.route("/spa/:_id").patch(toggleSpaStatus)
router.route("/roomService/:_id").patch(toggleRoomServiceStatus)
router.route("/elevator/:_id").patch(toggleElevatorStatus)
router.route("/security/:_id").patch(toggleSecurityStatus)
router.route("/cctv/:_id").patch(toggleCCTVStatus)
router.route("/travelDesk/:_id").patch(toggleTravelDeskStatus)
router.route("/powerBackup/:_id").patch(togglePowerBackupStatus)
router.route("/centralAC/:_id").patch(toggleCentralACStatus)
router.route("/internetFacility/:_id").patch(toggleInternetFacilityStatus)
router.route("/banquetHall/:_id").patch(toggleBanquetHallStatus)
router.route("/conferenceHall/:_id").patch(toggleConferenceHallStatus)
router.route("/photoCopying/:_id").patch(togglePhotoCopyingStatus)
router.route("/bookWithZeroFee/:_id").patch(toggleBookWithZeroStatus)
router.route("/freeBreakFast/:_id").patch(toggleFreeBreakfastStatus)
router.route("/freeParking/:_id").patch(toggleFreeParking)
router.route("/freeCancellation/:_id").patch(toggleFreeCancellation)

export default router