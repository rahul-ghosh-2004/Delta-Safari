import React, { useState } from "react";
import HotelsCard from "./HotelsCard"

const hotels = [
  {
    name: "Mehra Residency At The Airport",
    location: "Dwarka >> Delhi",
    rating: 4.0,
    reviewLabel: "Very Good",
    reviewCount: "98",
    price: 1637,
    originalPrice: 1819,
    tax: 232,
    perk: "Free Breakfast",
    people: 2,
    guests: 2,
    rooms: 1,
    promocode: "EMTHOTELS Promocode Applied",
    images: [
      "https://img.easemytrip.com/emthotel-519654/8/m/l/446930_0.jpg",
      "https://img.easemytrip.com/EMTHotel-519654/8/g/l/446930_18.jpg",
      "https://img.easemytrip.com/EMTHotel-519654/8/g/l/446930_2.jpg",
      "https://img.easemytrip.com/EMTHotel-519654/8/g/l/446930_9.jpg",
      "https://img.easemytrip.com/EMTHotel-519654/8/g/l/446930_15.jpg",
    ],
    day: 2,
    night: 3,
    facilities: ["Free Wi-Fi", "Airport Shuttle", "Daily Housekeeping"],
    amenities: ["Room service–On request", "Doctor on call", "Wake-up service", "Library", "Banquet Hall", "Central AC", "Luggage Storage", "Ironing facilities", "Free WiFi", "Power Backup"],
    description: [
  {
    place: "Map-IconA-45, Sector-19",
    info: ["Located close to IGI Airport, Mehra Residency provides convenience for frequent flyers. Rooms are well-equipped with modern amenities and breakfast is complimentary.",
       "Guests can enjoy high-speed Wi-Fi, air conditioning, and 24/7 room service. The hotel offers easy access to metro stations and nearby shopping areas.",
  "Daily housekeeping ensures a clean and comfortable stay throughout. Friendly staff and prompt check-in/check-out make your stay hassle-free."
    ]
  }
]
  },
  {
    name: "Hotel Signature Grand",
    location: "Hari Nagar, West Delhi",
    rating: 4.5,
    reviewLabel: "Excellent",
    reviewCount: "280",
    price: 2299,
    originalPrice: 2899,
    tax: 200,
    perk: "Free Breakfast",
    people: 3,
    guests: 5,
    rooms: 3,
    promocode: "EMTHOTELS Promocode Applied",
    images: [
      "https://media.easemytrip.com/media/hotel/temp1/roomimage/roomimagecmitll.jpg",
      "https://media.easemytrip.com/media/Hotel/SHL-2502191430652892/Hotel/Hotelobmttb.png",
      "https://media.easemytrip.com/media/Hotel/SHL-2502191430652892/Hotel/Hotel5cKRFD.png",
      "https://media.easemytrip.com/media/Hotel/SHL-2502191430652892/Hotel/HotelgnX9gG.png",
      "https://media.easemytrip.com/media/Hotel/SHL-240930190290437/RoomImage/RoomImage6b4Za4.jpg",
    ],
    day: 2,
    night: 3,
    facilities: ["Free Wi-Fi", "Air Conditioning", "Parking Facility"],
    amenities: ["Room service–On request", "Elevator", "Security [24-hour]", "Travel Desk", "Power Backup", "Central AC", "CCTV", "Free WiFi", "Internet Facility / Cyber Cafe", "Credit/Debit cards", "Elevator", "Restaurant"],
    description: [
      {
        place:"Hari Nagar, West Delhi, New Delhi",
        info: [
      "Hotel Signature Grand in West Delhi is celebrated for its exceptional hospitality, offering unparalleled accommodations and dining experiences.",
      "Indulge in a blend of Indian and international cuisine that promises excellent value for money.",
      "Situated in Hari Nagar, Hotel Signature Grand enjoys a prime location within easy reach of local trading centers and the public sector community.",
      "Conveniently located 15 minutes from IGI Airport and 25 minutes from New Delhi Railway Station."
        ]
      }
    ]
  },
  {
    name: "Hotel Rivasa Regency",
    location: "Chattarpur",
    rating: 4.0,
    reviewLabel: "Very Good",
    reviewCount: "185",
    price: 1355,
    originalPrice: 2200,
    tax: 185,
    perk: "Free Cancellation",
    people: 5,
    guests: 4,
    rooms: 2,
    promocode: "EMTHOTELS Promocode Applied",
    images: [
      "https://media.easemytrip.com/media/Hotel/SHL-2501172106029065/Hotel/HotelCGa3TR.png",
      "https://media.easemytrip.com/media/Hotel/SHL-22022640360127/Common/CommonP3LMFL.jpg",
      "https://media.easemytrip.com/media/Hotel/SHL-22022640360127/Common/CommonS3oVUU.jpg",
      "https://media.easemytrip.com/media/Hotel/SHL-22022640360127/Common/CommonxZUm6l.jpg",
      "https://media.easemytrip.com/media/Hotel/SHL-22022640360127/Common/CommonWvJSYz.jpg",
    ],
    day: 1,
    night: 2,
    facilities: ["Free Parking", "Air Conditioning", "Wi-Fi"],
    amenities: ["Power Backup", "Banquet Hall", "Bar", "Conference Hall", "Laundry", "Photocopying", "Free WiFi"],
    description: [
  {
    place: "B 12 Main Chhatarpur Rd",
    info: [
      "Hotel Rivasa Regency offers stylish and affordable accommodations near Chattarpur Metro.",
       "Ideal for families and business travelers with flexible check-in policies."
    ]
  }
]
  },
  {
    name: "Amigos India - Hostel",
    location: "South Delhi",
    rating: 4.3,
    reviewLabel: "Excellent",
    reviewCount: "81",
    price: 3141,
    originalPrice: 3490,
    tax: 260,
    perk: "Free Cancellation",
    people: 1,
    guests: 2,
    rooms: 2,
    promocode: "EMTHOTELS Promocode Applied",
    images: [
      "https://img.easemytrip.com/EMTHotel-1243113/23/na/s/2818309_0.jpg",
      "https://img.easemytrip.com/EMTHotel-1243113/23/na/s/2818309_0.jpg",
      "https://img.easemytrip.com/EMTHotel-1243113/23/na/s/2818309_0.jpg",
      "https://img.easemytrip.com/EMTHotel-1243113/23/na/s/2818309_0.jpg",
      "https://img.easemytrip.com/EMTHotel-1243113/23/na/s/2818309_0.jpg",
    ],
    day: 2,
    night: 2,
    facilities: ["Shared Lounge", "Laundry", "Wi-Fi"],
    amenities: ["24/7 Front Desk", "Security [24-hour]", "Coffee Shop"],
    description: [
      {
        place: "Chattarpur Enclave",
        info: [
          "Amigos India Hostel is a modern backpacker stay in South Delhi offering social events and clean shared dorms.",
           "Ideal for solo travelers and digital nomads."
        ]
      }
    ]
  },
  {
    name: "Hotel Four Leaf Clover",
    location: "Vikas Puri",
    rating: 4.0,
    reviewLabel: "Very Good",
    reviewCount: "120",
    price: 2200,
    originalPrice: 2600,
    tax: 200,
    perk: "Free Breakfast",
    people: 3,
    guests: 3,
    rooms: 3,
    promocode: "EMTHOTELS Promocode Applied",
    images: [
      "https://img.easemytrip.com/emthotel-399724/8/m/l/1065446_0.jpg",
      "https://img.easemytrip.com/emthotel-399724/8/m/l/1065446_0.jpg",
      "https://img.easemytrip.com/emthotel-399724/8/m/l/1065446_0.jpg",
      "https://img.easemytrip.com/emthotel-399724/8/m/l/1065446_0.jpg",
      "https://img.easemytrip.com/emthotel-399724/8/m/l/1065446_0.jpg",
    ],
    day: 2,
    night: 3,
    facilities: ["Air Conditioning", "TV", "24/7 Front Desk"],
    amenities: ["Credit/Debit cards", "Elevator", "Restaurant"],
    description: [
      {
      place: "G-6, Community Centre, Vikas Puri, New Delhi - 110018.",
      info: ["Hotel Four Leaf Clover is an elegant stay in Vikas Puri with cozy rooms and modern facilities.", 
        "Perfect for couples and family vacations."]
      }
    ]
  },
];

const HotelsList = () => {
  const [visible, setVisible] = useState(3);

  const handleLoadMore = () => {
    setVisible((prev) => prev + 3);
  };

  return (
    <div className="p-4 max-w-screen-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6">
        Find Your Best Stay at Delhi’s Budget Hotels
      </h1>
      <div className="space-y-6">
        {hotels.slice(0, visible).map((hotel, index) => (
          <HotelsCard key={index} hotel={hotel} />
        ))}
      </div>

      {visible < hotels.length && (
        <div className="mt-6 text-center">
          <button
            onClick={handleLoadMore}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium text-sm"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default HotelsList;










// // HotelsList.jsx
// import React, { useState } from "react";
// import HotelCard from "./HotelsCard";

// const hotels = [
//   {
//     name: "Hotel Signature Grand",
//     location: "Hari Nagar, West Delhi",
//     rating: 4.5,
//     reviewLabel: "Excellent",
//     reviewCount: "280",
//     price: 2299,
//     originalPrice: 2899,
//     tax: 200,
//     perk: "Free Breakfast",
//     people: 3,
//     promocode: "EMTHOTELS Promocode Applied",
//     images: [
//       "https://img.easemytrip.com/emthotel-519654/8/m/l/446930_0.jpg",
//       "https://img.easemytrip.com/EMTHotel-519654/8/g/l/446930_18.jpg",
//       "https://img.easemytrip.com/EMTHotel-519654/8/g/l/446930_2.jpg",
//       "https://img.easemytrip.com/EMTHotel-519654/8/g/l/446930_9.jpg",
//       "https://img.easemytrip.com/EMTHotel-519654/8/g/l/446930_15.jpg",
//     ],
//     day: 2,
//     night: 3,
//     facilities: ["Free Wi-Fi", "Air Conditioning", "Parking Facility"],
//     amenities: [
//       "Ironing facilities", "Parking facility", "Luggage Storage", "Front Desk",
//       "Newspaper in lobby", "Wake-up service", "Room service–On request", "Doctor on call",
//       "Travel Desk", "Library", "Banquet Hall", "Power Backup", "Central AC", "CCTV",
//       "Executive Lounge", "Lawns/Gardens", "Business Centre", "Conference Hall", "Bar",
//       "Laundry", "Photocopying", "Free WiFi", "Internet Facility / Cyber Cafe",
//       "Credit/Debit cards", "Elevator", "Restaurant", "Coffee Shop", "Security [24-hour]"
//     ],
//     description: [
//       "Hotel Signature Grand in West Delhi is celebrated for its exceptional hospitality, offering unparalleled accommodations and dining experiences.",
//       "Situated in Hari Nagar, it is conveniently located within easy reach of local trading centers and major business hubs.",
//       "The hotel's Signature Coffee Shop, 'The Cappuccino', invites guests to savor exotic tea and coffee in a relaxing atmosphere.",
//       "Whether for business or leisure, this hotel ensures a perfect blend of comfort, convenience, and elegance."
//     ]
//   },
//   // You can copy the structure above to add more hotels
// ];

// const HotelsList = () => {
//   const [visible, setVisible] = useState(3);

//   const handleLoadMore = () => {
//     setVisible((prev) => prev + 3);
//   };

//   return (
//     <div className="p-4 max-w-screen-lg mx-auto">
//       <h1 className="text-2xl font-bold mb-6">
//         Find Your Best Stay at Delhi’s Budget Hotels
//       </h1>
//       <div className="space-y-6">
//         {hotels.slice(0, visible).map((hotel, index) => (
//           <HotelCard key={index} hotel={hotel} />
//         ))}
//       </div>

//       {visible < hotels.length && (
//         <div className="mt-6 text-center">
//           <button
//             onClick={handleLoadMore}
//             className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium text-sm"
//           >
//             Load More
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HotelsList;






















// import React, { useState } from "react";
// import HotelCard from "./HotelsCard"; 


// const hotels = [
//     {
//       name: "Mehra Residency At The Airport",
//       location: "Dwarka >> Delhi",
//       rating: 4.0,
//       reviewLabel: "Very Good",
//       reviewCount: "98",
//       price: 1637,
//       originalPrice: 1819,
//       tax: 232,
//       perk: "Free Breakfast",
//       people: 2,
//       promocode: "EMTHOTELS Promocode Applied",
//       images: [
//         "https://img.easemytrip.com/emthotel-519654/8/m/l/446930_0.jpg",
//         "https://img.easemytrip.com/EMTHotel-519654/8/g/l/446930_18.jpg",
//         "https://img.easemytrip.com/EMTHotel-519654/8/g/l/446930_2.jpg",
//         "https://img.easemytrip.com/EMTHotel-519654/8/g/l/446930_9.jpg",
//         "https://img.easemytrip.com/EMTHotel-519654/8/g/l/446930_15.jpg",
//       ],
//       facilities: [],
//       day: 2,
//       night: 3
//     },
//     {
//       name: "Hotel Rivasa Regency",
//       location: "Chattarpur",
//       rating: 4.0,
//       reviewLabel: "Very Good",
//       reviewCount: "185",
//       price: 1355,
//       originalPrice: 2200,
//       tax: 185,
//       perk: "Free Cancellation",
//       people: 5,
//       promocode: "EMTHOTELS Promocode Applied",
//       images: [
//         "https://media.easemytrip.com/media/Hotel/SHL-2501172106029065/Hotel/HotelCGa3TR.png",
//         "https://media.easemytrip.com/media/Hotel/SHL-2501172106029065/Hotel/HotelCGa3TR.png",
//         "https://media.easemytrip.com/media/Hotel/SHL-2501172106029065/Hotel/HotelCGa3TR.png",
//         "https://media.easemytrip.com/media/Hotel/SHL-2501172106029065/Hotel/HotelCGa3TR.png",
//         "https://media.easemytrip.com/media/Hotel/SHL-2501172106029065/Hotel/HotelCGa3TR.png",
//       ],
//     },
//     {
//       name: "Amigos India - Hostel",
//       location: "South Delhi",
//       rating: 4.3,
//       reviewLabel: "Excellent",
//       reviewCount: "81",
//       price: 3141,
//       originalPrice: 3490,
//       tax: 260,
//       perk: "Free Cancellation",
//       people: 1,
//       promocode: "EMTHOTELS Promocode Applied",
//       images: [
//         "https://img.easemytrip.com/EMTHotel-1243113/23/na/s/2818309_0.jpg",
//         "https://img.easemytrip.com/EMTHotel-1243113/23/na/s/2818309_0.jpg",
//         "https://img.easemytrip.com/EMTHotel-1243113/23/na/s/2818309_0.jpg",
//         "https://img.easemytrip.com/EMTHotel-1243113/23/na/s/2818309_0.jpg",
//         "https://img.easemytrip.com/EMTHotel-1243113/23/na/s/2818309_0.jpg",
//       ],
//     },
//     {
//       name: "Hotel Four Leaf Clover",
//       location: "Vikas Puri",
//       rating: 4.0,
//       reviewLabel: "Very Good",
//       reviewCount: "120",
//       price: 2200,
//       originalPrice: 2600,
//       tax: 200,
//       perk: "Free Breakfast",
//       people: 3,
//       promocode: "EMTHOTELS Promocode Applied",
//       images: [
//         "https://img.easemytrip.com/emthotel-399724/8/m/l/1065446_0.jpg",
//         "https://img.easemytrip.com/emthotel-399724/8/m/l/1065446_0.jpg",
//         "https://img.easemytrip.com/emthotel-399724/8/m/l/1065446_0.jpg",
//         "https://img.easemytrip.com/emthotel-399724/8/m/l/1065446_0.jpg",
//         "https://img.easemytrip.com/emthotel-399724/8/m/l/1065446_0.jpg",
//       ],
//     },
//   ];

// const HotelsList = () => {
//   const [visible, setVisible] = useState(3);

//   const handleLoadMore = () => {
//     setVisible((prev) => prev + 3);
//   };

  

//   return (
//     <div className="p-4 max-w-screen-lg mx-auto">
//       <h1 className="text-2xl font-bold mb-6">
//         Find Your Best Stay at Delhi’s Budget Hotels
//       </h1>
//       <div className="space-y-6">
//         {hotels.slice(0, visible).map((hotel, index) => (
//           <HotelCard key={index} hotel={hotel} />
//         ))}
//       </div>

//       {visible < hotels.length && (
//         <div className="mt-6 text-center">
//           <button
//             onClick={handleLoadMore}
//             className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium text-sm"
//           >
//             Load More
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HotelsList;









