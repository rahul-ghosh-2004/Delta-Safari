import React, { useState } from "react";
import HotelCard from "./HotelsCard"; // Ensure this path is accurate

const HotelsList = () => {
  const [visible, setVisible] = useState(3);

  const handleLoadMore = () => {
    setVisible((prev) => prev + 3);
  };

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
      promocode: "EMTHOTELS Promocode Applied",
      images: [
        "https://img.easemytrip.com/emthotel-519654/8/m/l/446930_0.jpg",
        "https://img.easemytrip.com/emthotel-519654/8/m/l/446930_0.jpg",
        "https://img.easemytrip.com/emthotel-519654/8/m/l/446930_0.jpg",
        "https://img.easemytrip.com/emthotel-519654/8/m/l/446930_0.jpg",
      ],
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
      promocode: "EMTHOTELS Promocode Applied",
      images: [
        "https://media.easemytrip.com/media/Hotel/SHL-2501172106029065/Hotel/HotelCGa3TR.png",
        "https://media.easemytrip.com/media/Hotel/SHL-2501172106029065/Hotel/HotelCGa3TR.png",
        "https://media.easemytrip.com/media/Hotel/SHL-2501172106029065/Hotel/HotelCGa3TR.png",
        "https://media.easemytrip.com/media/Hotel/SHL-2501172106029065/Hotel/HotelCGa3TR.png",
      ],
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
      promocode: "EMTHOTELS Promocode Applied",
      images: [
        "https://img.easemytrip.com/EMTHotel-1243113/23/na/s/2818309_0.jpg",
        "https://img.easemytrip.com/EMTHotel-1243113/23/na/s/2818309_0.jpg",
        "https://img.easemytrip.com/EMTHotel-1243113/23/na/s/2818309_0.jpg",
        "https://img.easemytrip.com/EMTHotel-1243113/23/na/s/2818309_0.jpg",
      ],
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
      promocode: "EMTHOTELS Promocode Applied",
      images: [
        "https://img.easemytrip.com/emthotel-399724/8/m/l/1065446_0.jpg",
        "https://img.easemytrip.com/emthotel-399724/8/m/l/1065446_0.jpg",
        "https://img.easemytrip.com/emthotel-399724/8/m/l/1065446_0.jpg",
        "https://img.easemytrip.com/emthotel-399724/8/m/l/1065446_0.jpg",
      ],
    },
  ];

  return (
    <div className="p-4 max-w-screen-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6">
        Find Your Best Stay at Delhi’s Budget Hotels
      </h1>
      <div className="space-y-6">
        {hotels.slice(0, visible).map((hotel, index) => (
          <HotelCard key={index} hotel={hotel} />
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









// import React from "react";

// const hotels = [
//   {
//     name: "Mehra Residency At The Airport",
//     location: "Dwarka > Delhi",
//     rating: 4.0,
//     reviews: "191 reviews",
//     price: 1637,
//     originalPrice: null,
//     perks: ["Free Breakfast", "Free Cancellation"],
//     badge: "Very Good",
//     image: "https://img.easemytrip.com/emthotel-519654/8/m/l/446930_0.jpg",
//   },
//   {
//     name: "Hotel Rivasa Regency",
//     location: "Chattarpur",
//     rating: 4.0,
//     reviews: "185 reviews",
//     price: 1355,
//     originalPrice: 2200,
//     perks: ["Free Cancellation"],
//     badge: "Deal of the Day",
//     image: "https://media.easemytrip.com/media/Hotel/SHL-22022640360127/Common/Commonfu0VUf.jpg",
//   },
//   {
//     name: "Amigos India - Hostel",
//     location: "Chattarpur",
//     rating: 4.5,
//     reviews: "81 reviews",
//     price: 3141,
//     originalPrice: 3490,
//     perks: ["Free Cancellation"],
//     badge: "Excellent",
//     image: "https://img.easemytrip.com/emthotel-1243113/23/na/s/2818309_1.jpg",
//   },
//   // Add more hotels as needed
// ];

// const HotelsList = () => {
//   return (
//     <div className="p-4 max-w-screen-lg mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Find Your Best Stay at Delhi’s Hotels</h1>

//       {/* Hotel Cards */}
//       <div className="flex flex-col gap-4">
//         {hotels.map((hotel, idx) => (
//           <div
//             key={idx}
//             className="bg-white rounded-xl shadow-md p-4 flex flex-col sm:flex-row gap-4"
//           >
//             <img
//               src={hotel.image}
//               alt={hotel.name}
//               className="w-full sm:w-48 h-32 object-cover rounded-lg"
//             />
//             <div className="flex flex-col justify-between">
//               <div>
//                 <h2 className="text-lg font-semibold">{hotel.name}</h2>
//                 <p className="text-sm text-gray-600">{hotel.location}</p>
//                 <div className="text-xs text-green-600 mt-1">
//                   {hotel.perks.join(" • ")}
//                 </div>
//               </div>
//               <div className="flex items-center justify-between mt-2">
//                 <div>
//                   <span className="text-sm font-medium text-gray-700">
//                     {hotel.badge} • {hotel.rating} ⭐
//                   </span>
//                   <p className="text-xs text-gray-500">{hotel.reviews}</p>
//                 </div>
//                 <div className="text-right">
//                   {hotel.originalPrice && (
//                     <p className="line-through text-xs text-gray-400">
//                       ₹{hotel.originalPrice}
//                     </p>
//                   )}
//                   <p className="text-lg font-bold text-orange-600">₹{hotel.price}</p>
//                   <button className="mt-1 bg-orange-500 text-white text-sm px-3 py-1 rounded-lg">
//                     View Room
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       </div>
//   );
// };

// export default HotelsList;
