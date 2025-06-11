import React from "react";
import {
  MapPin,
  Eye,
  CheckCircle,
} from "lucide-react";

const HotelCard = ({ hotel }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row p-4 gap-4">
      {/* Image section */}
      <div className="md:w-1/3">
        <img
          src={hotel.images[0]}
          alt="Main"
          className="rounded-xl w-full h-40 object-cover mb-2"
        />
        <div className="flex gap-1">
          {hotel.images.slice(1, 4).map((img, i) => (
            <img
              key={i}
              src={img}
              className="w-1/4 h-16 object-cover rounded-md"
              alt={`thumb-${i}`}
            />
          ))}
          <div className="w-1/4 h-16 bg-black bg-opacity-60 text-white text-xs flex items-center justify-center rounded-md">
            View All
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-base md:text-lg font-bold">{hotel.name}</h2>
          <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
            <MapPin className="w-4 h-4 text-gray-400" />
            {hotel.location}
          </p>
          <div className="flex items-center text-yellow-400 text-sm mt-1">
            {"★".repeat(Math.floor(hotel.rating))}
            {hotel.rating % 1 >= 0.5 && <span className="text-gray-400">☆</span>}
          </div>
          <div className="mt-2 text-green-600 text-sm font-semibold flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            {hotel.perk}
          </div>
          <div className="text-orange-500 text-sm mt-1 flex items-center gap-2">
            <Eye className="w-4 h-4" />
            {hotel.people} People viewing
          </div>
          <div className="mt-2">
            <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">
              {hotel.promocode}
            </span>
          </div>
        </div>
      </div>

      {/* Pricing section */}
      <div className="md:w-1/4 flex flex-col items-end justify-between text-right">
        <div className="mb-2">
          <div className="bg-green-100 text-green-800 font-semibold px-2 py-1 rounded text-xs inline-block mb-1">
            {hotel.reviewLabel}
          </div>
          <p className="text-sm text-gray-500">{hotel.reviewCount} reviews</p>
          <p className="text-green-600 font-bold text-lg">{hotel.rating}</p>
        </div>
        <div>
          {hotel.originalPrice && (
            <p className="line-through text-sm text-red-400 mb-1">₹{hotel.originalPrice}</p>
          )}
          <p className="text-2xl font-bold text-gray-800">₹{hotel.price}</p>
          <p className="text-xs text-gray-500">+ ₹{hotel.tax} Taxes & fees</p>
          <p className="text-xs text-gray-400">Per Night</p>
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-5 rounded-full mt-3 text-sm font-semibold">
          View Room
        </button>
        <p className="text-xs text-gray-600 mt-2">
          <span className="text-blue-600 cursor-pointer">Login</span> &{" "}
          <span className="text-blue-700 font-semibold cursor-pointer">Save More</span>
        </p>
      </div>
    </div>
  );
};

export default HotelCard;







// import React from "react";

// const HotelCard = ({ hotel }) => {
//   return (
//     <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col sm:flex-row">
//       {/* IMAGES */}
//       <div className="sm:w-1/3">
//         <div className="relative h-48 sm:h-full">
//           <img
//             src={hotel.images[0]}
//             alt={hotel.name}
//             className="w-full h-full object-cover"
//           />
//           <span className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">View All</span>
//         </div>
//         <div className="flex h-20">
//           {hotel.images.slice(1, 4).map((src, i) => (
//             <img
//               key={i}
//               src={src}
//               alt={`${hotel.name} ${i + 2}`}
//               className="w-1/3 object-cover"
//             />
//           ))}
//         </div>
//       </div>

//       {/* DETAILS */}
//       <div className="flex-1 p-4 flex flex-col justify-between">
//         <div>
//           <h2 className="text-lg font-semibold mb-1">{hotel.name}</h2>
//           <p className="text-sm text-gray-500 mb-2">{hotel.location}</p>
//           <div className="flex items-center text-sm mb-2">
//             <span className="font-medium mr-1">{hotel.rating}⭐</span>
//             <span className="text-gray-400">({hotel.reviews})</span>
//             {hotel.badge && (
//               <span className="ml-3 px-2 py-0.5 text-xs rounded bg-green-100 text-green-800">
//                 {hotel.badge}
//               </span>
//             )}
//           </div>
//           <ul className="text-xs text-green-600 flex flex-wrap gap-x-2">
//             {hotel.perks.map((perk, i) => (
//               <li key={i} className="flex items-center">
//                 <span className="inline-block w-1 h-1 bg-green-600 rounded-full mr-1"></span>
//                 {perk}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* PRICE & CTA */}
//       <div className="p-4 flex flex-col justify-between text-right">
//         <div>
//           {hotel.originalPrice && (
//             <p className="text-xs line-through text-gray-400">
//               ₹{hotel.originalPrice}
//             </p>
//           )}
//           <p className="text-2xl font-bold text-orange-600">
//             ₹{hotel.price}
//           </p>
//           <p className="text-xs text-gray-500">+ taxes & fees</p>
//         </div>
//         <button className="mt-4 bg-orange-500 text-white text-sm font-medium py-2 rounded-lg">
//           View Room
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HotelCard;
