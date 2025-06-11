import React from "react";

const Filters = () => {
  return (
    <aside className="w-full sm:w-64 p-4 bg-white rounded-xl shadow-md mb-6 sm:mb-0">
      <h2 className="text-lg font-bold mb-4">Filters</h2>

      {/* Price */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Price Range</label>
        <input type="range" min="500" max="5000" className="w-full" />
        <div className="flex justify-between text-xs text-gray-500">
          <span>₹500</span>
          <span>₹5000</span>
        </div>
      </div>

      {/* Star Rating */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Star Rating</label>
        <select className="w-full border rounded-md p-2 text-sm">
          <option value="">Any</option>
          <option value="4">4 Stars & above</option>
          <option value="3">3 Stars & above</option>
        </select>
      </div>

      {/* Amenities */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Amenities</label>
        <div className="space-y-1 text-sm">
          {["Wi-Fi", "Breakfast", "Parking", "Pet Friendly", "Pool"].map((label) => (
            <label className="flex items-center gap-2" key={label}>
              <input type="checkbox" className="accent-orange-500" />
              Free {label}
            </label>
          ))}
        </div>
      </div>

      {/* Sort By */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Sort By</label>
        <select className="w-full border rounded-md p-2 text-sm">
          <option value="relevance">Relevance</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>

      <button className="bg-orange-500 text-white w-full py-2 rounded-md text-sm font-semibold">
        Apply Filters
      </button>
    </aside>
  );
};

export default Filters;




// import React from "react";

// const Filters = () => {
//   return (
//     <aside className="w-full sm:w-64 p-4 bg-white rounded-xl shadow-md mb-6 sm:mb-0">
//       <h2 className="text-lg font-bold mb-4">Filters</h2>

//       {/* Price Range */}
//       <div className="mb-4">
//         <label className="block font-medium mb-1">Price Range</label>
//         <input
//           type="range"
//           min="500"
//           max="5000"
//           className="w-full"
//         />
//         <div className="flex justify-between text-sm text-gray-500">
//           <span>₹500</span>
//           <span>₹5000</span>
//         </div>
//       </div>

//       {/* Rating */}
//       <div className="mb-4">
//         <label className="block font-medium mb-1">Minimum Rating</label>
//         <select className="w-full border rounded-md p-2 text-sm">
//           <option value="">All Ratings</option>
//           <option value="4">4.0 & above</option>
//           <option value="3">3.0 & above</option>
//           <option value="2">2.0 & above</option>
//         </select>
//       </div>

//       {/* Amenities */}
//       <div className="mb-4">
//         <label className="block font-medium mb-1">Amenities</label>
//         <div className="space-y-1 text-sm text-gray-700">
//           <label className="flex items-center gap-2">
//             <input type="checkbox" className="accent-orange-500" />
//             Free Wi-Fi
//           </label>
//           <label className="flex items-center gap-2">
//             <input type="checkbox" className="accent-orange-500" />
//             Free Breakfast
//           </label>
//           <label className="flex items-center gap-2">
//             <input type="checkbox" className="accent-orange-500" />
//             Free Cancellation
//           </label>
//           <label className="flex items-center gap-2">
//             <input type="checkbox" className="accent-orange-500" />
//             Pet Friendly
//           </label>
//         </div>
//       </div>

//       <button className="bg-orange-500 text-white w-full py-2 rounded-md text-sm font-semibold">
//         Apply Filters
//       </button>
//     </aside>
//   );
// };

// export default Filters;
