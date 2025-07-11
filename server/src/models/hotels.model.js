import mongoose, {Schema} from "mongoose"

const hotelsSchema = new Schema({
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    name: String,
    location: String,
    descriptionAboutHotel: String,
    ratings: {
        type: Number,
        enum: [1, 2, 3, 4, 5],
        default: 3
    },
    originalPrice: Number,
    discount: Number,
    priceAfterDiscount: Number,
    taxesAndFees: Number,
    image1: {
        type: String,
        default: ""
    },
    image2: {
        type: String,
        default: ""
    },
    image3: {
        type: String,
        default: ""
    },
    image4: {
        type: String,
        default: ""
    },
    image5: {
        type: String,
        default: ""
    },
    reviewCount: {
        type: Number,
        default: 0
    },
    bookWithZero: {
        type: Boolean,
        default: false
    },
    freeBreakfast: {
        type: Boolean,
        default: false
    },
    freeParking: {
        type: Boolean,
        default: false
    },
    freeCancellation: {
        type: Boolean,
        default: false
    },
    userReviewRating: {
        type: Number,
        enum: [3, 4, 5],
        default: 3
    },
    amenities: {
        twentyFourHourFrontDesk: {
            type: Boolean,
            default: false
        },
        ac: {
            type: Boolean,
            default: false
        },
        bar: {
            type: Boolean,
            default: false
        },
        wifi: {
            type: Boolean,
            default: false
        },
        breakfast: {
            type: Boolean,
            default: false
        },
        laundry: {
            type: Boolean,
            default: false
        },
        gym: {
            type: Boolean,
            default: false
        },
        restaurant: {
            type: Boolean,
            default: false
        },
        spa: {
            type: Boolean,
            default: false
        },
        roomService: {
            type: Boolean,
            default: false
        },
        elevator: {
            type: Boolean,
            default: false
        },
        security: {
            type: Boolean,
            default: false
        },
        travelDesk: {
            type: Boolean,
            default: false
        },
        powerBackup: {
            type: Boolean,
            default: false
        },
        centralAc: {
            type: Boolean,
            default: false
        },
        cctv: {
            type: Boolean,
            default: false
        },
        internetFacility: {
            type: Boolean,
            default: false
        },
        banquetHall: {
            type: Boolean,
            default: false
        },
        conferenceHall:{
            type: Boolean,
            default: false
        },
        photoCopying: {
            type: Boolean,
            default: false
        }
    },
    propertyType: {
        type: String,
        enum: [ 
            "HOTEL",
            "HOUSE",
            "INN",
            "MOTEL",
            "PALACE",
            "VILLAS",
            "FARM STAY",
            "HOSTEL"
        ],
        default: "HOTEL"
    }
})

const Hotels = mongoose.model("Hotel", hotelsSchema)

export default Hotels