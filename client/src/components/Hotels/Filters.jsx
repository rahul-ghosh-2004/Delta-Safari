import React, { useState } from "react";

const Filters = () => {
  const [sectionToggles, setSectionToggles] = useState({});
  const [filtersState, setFiltersState] = useState({});

  const toggleSection = (key) => {
    setSectionToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const filtersData = [
    {
      type: "section",
      title: "Show Properties with",
      key: "showPropertiesWith",
      options: ["Book with ₹0", "Free Breakfast", "Free Parking", "Free Cancellation"],
    },
    {
      type: "range",
      title: "Price Range",
      key: "price",
      min: 500,
      max: 5000,
    },
    {
      type: "select",
      title: "Star Rating",
      key: "starRating",
      options: ["Any", "5 Star", "4 Star", "3 Star", "Budget", "Unrated"],
    },
    {
      type: "select",
      title: "User Review Rating",
      key: "userReviewRating",
      options: [
        "Any",
        "4.5 & above (Excellent)",
        "4 & above (Very Good)",
        "3 & above (Good)",
      ],
    },
    {
      type: "section",
      title: "Area Attraction",
      key: "areaAttraction",
      options: [
        "Humayuns Tomb", "saftarjungs Tomb", "Red Fort", "India gate",
        "National Museum", "Delhi National Railway Museum", "jantar Mantar",
        "Qutub Minar", "Raj Ghat", "Lotus temple", "Pitampura TV Tower"
      ],
    },
    {
      type: "section",
      title: "Amenities",
      key: "amenities",
      options: [
        "Free Cancellation", "24 Hour Front Desk", "AC", "Bar", "Wi-Fi",
        "Breakfast", "Laundry", "Gym", "Restaurant", "Spa", "Room Service"
      ],
    },
    {
      type: "sectionWithCount",
      title: "Property Type",
      key: "propertyType",
      options: [
        ["Hotel", 3451], ["House", 42], ["Inn", 148], ["Motel", 2],
        ["Palace", 63], ["Villas", 47], ["Farm Stay", 15], ["Hostel", 89]
      ],
    },
    {
      type: "select",
      title: "Sort By",
      key: "sortBy",
      options: ["Relevance", "Price: Low to High", "Price: High to Low"],
    },
  ];

  return (
    <aside className="w-full sm:w-64 p-4 bg-white rounded-xl shadow-md mb-6 sm:mb-0 sticky top-4 h-fit">
      <h2 className="text-lg font-bold mb-4">Filters</h2>

      {filtersData.map((filter) => {
        const { type, title, key, options, min, max } = filter;
        const show = sectionToggles[key] ?? true;

        if (type === "range") {
          return (
            
            <div key={key} className="mb-4">
              <label className="block font-medium mb-1">{title}</label>
              <input
                type="range"
                min={min}
                max={max}
                value={filtersState[key] ?? max}
                className="w-full"
                onChange={(e) =>
                  setFiltersState((prev) => ({ ...prev, [key]: e.target.value }))
                }
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>₹{min}</span>
                <span>₹{filtersState[key] ?? max}</span>
              </div>
            </div>


          );
        }

        if (type === "select") {
          return (
            <div key={key} className="mb-4">
              <label className="block font-medium mb-1">{title}</label>
              <select
                className="w-full border rounded-md p-2 text-sm"
                value={filtersState[key] || ""}
                onChange={(e) =>
                  setFiltersState((prev) => ({ ...prev, [key]: e.target.value }))
                }
              >
                {options.map((opt, i) => (
                  <option key={i} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          );
        }

        if (type === "section" || type === "sectionWithCount") {
          return (
            <div key={key} className="mb-4">
              <div
                className="flex justify-between items-center cursor-pointer border-b pb-1 mb-2"
                onClick={() => toggleSection(key)}
              >
                <h3 className="block font-medium">{title}</h3>
                <span className="text-lg font-semibold">{show ? "−" : "+"}</span>
              </div>

              {show && (
                <div className="max-h-36 overflow-y-auto pr-1">
                  <ul className="space-y-2 text-sm">
                    {options.map((item, i) => {
                      const label = type === "sectionWithCount" ? item[0] : item;
                      const count = type === "sectionWithCount" ? item[1] : null;
                      const checked = filtersState[key]?.includes(label) || false;

                      return (
                        <li key={i} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              id={`${key}-${i}`}
                              className="accent-orange-500 w-4 h-4 rounded"
                              checked={checked}
                              onChange={(e) => {
                                setFiltersState((prev) => {
                                  const prevArr = prev[key] || [];
                                  return {
                                    ...prev,
                                    [key]: e.target.checked
                                      ? [...prevArr, label]
                                      : prevArr.filter((val) => val !== label),
                                  };
                                });
                              }}
                            />
                            <label htmlFor={`${key}-${i}`} className="cursor-pointer">
                              {label}
                            </label>
                          </div>
                          {count !== null && (
                            <span className="text-gray-400 font-medium">[{count}]</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          );
        }

        return null;
      })}

      <button
        className="bg-orange-500 text-white w-full py-2 rounded-md text-sm font-semibold"
        onClick={() => {
          console.log("Applied Filters:", filtersState);
          // TODO: trigger filtering logic or pass state to parent
        }}
      >
        Apply Filters
      </button>
    </aside>
  );
};

export default Filters;


// import React, { useState } from "react";

// const Filters = () => {
//   const [showAmenities, setShowAmenities] = useState(true);
//   const [showPropertyTypes, setShowPropertyTypes] = useState(true);
//   const [showAreaAttraction, setShowAreaAttraction] = useState(true);
//   const [showPropertiesWith, setShowPropertiesWith] = useState(true);

//   return (
//     <aside className="w-full sm:w-64 p-4 bg-white rounded-xl shadow-md mb-6 sm:mb-0 sticky top-4 h-fit">
//       <h2 className="text-lg font-bold mb-4">Filters</h2>

//       {/* show Properties with*/}
//       <div className="mb-4">
//         <div className="flex justify-between items-center cursor-pointer border-b pb-1 mb-2"
//           onClick={() => setShowPropertiesWith(!showPropertiesWith)}
//         >
//           <h3 className="block font-medium">Show Properties with</h3>
//           <span className="text-lg font-semibold">{showPropertiesWith ? "−" : "+"}</span>
//         </div>

//         {showPropertiesWith && (
//           <div className="max-h-36 overflow-y-auto pr-1">
//             <ul className="space-y-2 text-sm">
//               {[
//                 "Book with ₹0 ", "Free Breakfast", "Free Parking", "Free Cancellation",
//               ].map((label, idx) => (
//                 <li key={idx} className="flex items-center gap-2">
//                   <input
//                     type="checkbox"
//                     id={`showPropertiesWith-${idx}`}
//                     className="accent-orange-500 w-4 h-4 rounded"
//                   />
//                   <label htmlFor={`showPropertiesWith-${idx}`} className="cursor-pointer">
//                     {label}
//                   </label>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}

//       </div>

//       {/* Price */}
//       <div className="mb-4">
//         <label className="block font-medium mb-1">Price Range</label>
//         <input type="range" min="500" max="5000" className="w-full" />
//         <div className="flex justify-between text-xs text-gray-500">
//           <span>₹500</span>
//           <span>₹5000</span>
//         </div>
//       </div>

//       {/* Star Rating */}
//       <div className="mb-4">
//         <label className="block font-medium mb-1">Star Rating</label>

//         <select className="w-full border rounded-md p-2 text-sm">
//           <option value="">Any</option>
//           <option value="4">5 Star </option>
//           <option value="3">4 Star </option>
//           <option value="3">3 Star </option>
//           <option value="3">Budget </option>
//           <option value="3">Unrated </option>

//         </select>
//       </div>

//       {/* User Review Rating */}
//       <div className="mb-4">
//         <label className="block font-medium mb-1">User Review Rating</label>
//         <select className="w-full border rounded-md p-2 text-sm">
//           <option value="">Any</option>
//           <option value="4">4.5 & above (Excellent)</option>
//           <option value="3">4 & above (Very Good)</option>
//           <option value="3">3 & above (Good)</option>
//         </select>
//       </div>

//       <div className="mb-4">
//         <div className="flex justify-between items-center cursor-pointer border-b pb-1 mb-2"
//           onClick={() => setShowAreaAttraction(!showAreaAttraction)}
//         >
//           <h3 className="block font-medium">Area Attraction</h3>
//           <span className="text-lg font-semibold">{showAreaAttraction ? "−" : "+"}</span>
//         </div>

//         {
//           showAreaAttraction && (
//             <div className="max-h-36 overflow-y-auto pr-1 custom-scrollbar">
//               <ul className="space-y-2 text-sm">
//                 {[
//                   "Humayuns Tomb",
//                   "saftarjungs Tomb",
//                   "Red Fort",
//                   "India gate",
//                   "National Museum",
//                   "Delhi National Railway Museum",
//                   "jantar Mantar",
//                   "Qutub Minar",
//                   "Raj Ghat",
//                   "Lotus temple",
//                   "Pitampura TV Tower",
//                 ].map((label, idx) => (
//                   <li key={idx} className="flex items-center gap-2">
//                     <input
//                       type="checkbox"
//                       id={`areaAttraction-${idx}`}
//                       className="accent-orange-500 w-4 h-4 rounded"
//                     />
//                     <label htmlFor={`areaAttraction-${idx}`} className="cursor-pointer">
//                       {label}
//                     </label>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )
//         }
//       </div>


//       {/* Amenities Section with toggle and scroll */}
//       <div className="mb-4">
//         <div
//           className="flex justify-between items-center cursor-pointer border-b pb-1 mb-2"
//           onClick={() => setShowAmenities(!showAmenities)}
//         >
//           <h3 className="block font-medium">Amenities</h3>
//           <span className="text-lg font-semibold">{showAmenities ? "−" : "+"}</span>
//         </div>

//         {showAmenities && (
//           <div className="max-h-36 overflow-y-auto pr-1 custom-scrollbar">
//             <ul className="space-y-2 text-sm">
//               {[
//                 "Free Cancellation",
//                 "24 Hour Front Desk",
//                 "AC",
//                 "Bar",
//                 "Wi-Fi",
//                 "Breakfast",
//                 "Laundry",
//                 "Gym",
//                 "Restaurant",
//                 "Spa",
//                 "Room Service",
//               ].map((label, idx) => (
//                 <li key={idx} className="flex items-center gap-2">
//                   <input
//                     type="checkbox"
//                     id={`amenity-${idx}`}
//                     className="accent-orange-500 w-4 h-4 rounded"
//                   />
//                   <label htmlFor={`amenity-${idx}`} className="cursor-pointer">
//                     {label}
//                   </label>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>

//       {/* Property Type Section with toggle and scroll */}
//       <div className="mb-4">
//         <div
//           className="flex justify-between items-center cursor-pointer border-b pb-1 mb-2"
//           onClick={() => setShowPropertyTypes(!showPropertyTypes)}
//         >
//           <h3 className="block font-medium">Property Type</h3>
//           <span className="text-lg font-semibold">{showPropertyTypes ? "−" : "+"}</span>
//         </div>

//         {showPropertyTypes && (
//           <div className="max-h-36 overflow-y-auto pr-1 custom-scrollbar">
//             <ul className="space-y-2 text-sm">
//               {[
//                 ["Hotel", 3451],
//                 ["House", 42],
//                 ["Inn", 148],
//                 ["Motel", 2],
//                 ["Palace", 63],
//                 ["Villas", 47],
//                 ["Farm Stay", 15],
//                 ["Hostel", 89],
//               ].map(([label, count], i) => (
//                 <li key={i} className="flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <input
//                       type="checkbox"
//                       id={`type-${i}`}
//                       className="accent-blue-600 w-4 h-4 rounded"
//                     />
//                     <label htmlFor={`type-${i}`} className="cursor-pointer">
//                       {label}
//                     </label>
//                   </div>
//                   <span className="text-gray-400 font-medium">[{count}]</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>

//       {/* Sort By */}
//       <div className="mb-4">
//         <label className="block font-medium mb-1">Sort By</label>
//         <select className="w-full border rounded-md p-2 text-sm">
//           <option value="relevance">Relevance</option>
//           <option value="lowToHigh">Price: Low to High</option>
//           <option value="highToLow">Price: High to Low</option>
//         </select>
//       </div>

//       <button className="bg-orange-500 text-white w-full py-2 rounded-md text-sm font-semibold">
//         Apply Filters
//       </button>
//     </aside>
//   );
// };

// export default Filters;



