import React, { useState } from "react";

const Filters = () => {
  const [showAmenities, setShowAmenities] = useState(true);
  const [showPropertyTypes, setShowPropertyTypes] = useState(true);
  const [showAreaAttraction, setShowAreaAttraction] = useState(true);
  const [showPropertiesWith, setShowPropertiesWith] = useState(true);

  return (
    <aside className="w-full sm:w-64 p-4 bg-white rounded-xl shadow-md mb-6 sm:mb-0 sticky top-4 h-fit">
      <h2 className="text-lg font-bold mb-4">Filters</h2>

      {/* show Properties with*/}
      <div className="mb-4">
        <div className="flex justify-between items-center cursor-pointer border-b pb-1 mb-2"
          onClick={() => setShowPropertiesWith(!showPropertiesWith)}
        >
          <h3 className="block font-medium">Show Properties with</h3>
          <span className="text-lg font-semibold">{showPropertiesWith ? "−" : "+"}</span>
        </div>

        {showPropertiesWith && (
          <div className="max-h-36 overflow-y-auto pr-1">
            <ul className="space-y-2 text-sm">
              {[
                "Book with ₹0 ", "Free Breakfast", "Free Parking", "Free Cancellation",
              ].map((label, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={`showPropertiesWith-${idx}`}
                    className="accent-orange-500 w-4 h-4 rounded"
                  />
                  <label htmlFor={`showPropertiesWith-${idx}`} className="cursor-pointer">
                    {label}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>

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
          <option value="4">5 Star </option>
          <option value="3">4 Star </option>
          <option value="3">3 Star </option>
          <option value="3">Budget </option>
          <option value="3">Unrated </option>

        </select>
      </div>

      {/* User Review Rating */}
      <div className="mb-4">
        <label className="block font-medium mb-1">User Review Rating</label>
        <select className="w-full border rounded-md p-2 text-sm">
          <option value="">Any</option>
          <option value="4">4.5 & above (Excellent)</option>
          <option value="3">4 & above (Very Good)</option>
          <option value="3">3 & above (Good)</option>
        </select>
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-center cursor-pointer border-b pb-1 mb-2"
          onClick={() => setShowAreaAttraction(!showAreaAttraction)}
        >
          <h3 className="block font-medium">Area Attraction</h3>
          <span className="text-lg font-semibold">{showAreaAttraction ? "−" : "+"}</span>
        </div>

        {
          showAreaAttraction && (
            <div className="max-h-36 overflow-y-auto pr-1 custom-scrollbar">
              <ul className="space-y-2 text-sm">
                {[
                  "Humayuns Tomb",
                  "saftarjungs Tomb",
                  "Red Fort",
                  "India gate",
                  "National Museum",
                  "Delhi National Railway Museum",
                  "jantar Mantar",
                  "Qutub Minar",
                  "Raj Ghat",
                  "Lotus temple",
                  "Pitampura TV Tower",
                ].map((label, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id={`areaAttraction-${idx}`}
                      className="accent-orange-500 w-4 h-4 rounded"
                    />
                    <label htmlFor={`areaAttraction-${idx}`} className="cursor-pointer">
                      {label}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          )
        }
      </div>


      {/* Amenities Section with toggle and scroll */}
      <div className="mb-4">
        <div
          className="flex justify-between items-center cursor-pointer border-b pb-1 mb-2"
          onClick={() => setShowAmenities(!showAmenities)}
        >
          <h3 className="block font-medium">Amenities</h3>
          <span className="text-lg font-semibold">{showAmenities ? "−" : "+"}</span>
        </div>

        {showAmenities && (
          <div className="max-h-36 overflow-y-auto pr-1 custom-scrollbar">
            <ul className="space-y-2 text-sm">
              {[
                "Free Cancellation",
                "24 Hour Front Desk",
                "AC",
                "Bar",
                "Wi-Fi",
                "Breakfast",
                "Laundry",
                "Gym",
                "Restaurant",
                "Spa",
                "Room Service",
              ].map((label, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={`amenity-${idx}`}
                    className="accent-orange-500 w-4 h-4 rounded"
                  />
                  <label htmlFor={`amenity-${idx}`} className="cursor-pointer">
                    {label}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Property Type Section with toggle and scroll */}
      <div className="mb-4">
        <div
          className="flex justify-between items-center cursor-pointer border-b pb-1 mb-2"
          onClick={() => setShowPropertyTypes(!showPropertyTypes)}
        >
          <h3 className="block font-medium">Property Type</h3>
          <span className="text-lg font-semibold">{showPropertyTypes ? "−" : "+"}</span>
        </div>

        {showPropertyTypes && (
          <div className="max-h-36 overflow-y-auto pr-1 custom-scrollbar">
            <ul className="space-y-2 text-sm">
              {[
                ["Hotel", 3451],
                ["House", 42],
                ["Inn", 148],
                ["Motel", 2],
                ["Palace", 63],
                ["Villas", 47],
                ["Farm Stay", 15],
                ["Hostel", 89],
              ].map(([label, count], i) => (
                <li key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id={`type-${i}`}
                      className="accent-blue-600 w-4 h-4 rounded"
                    />
                    <label htmlFor={`type-${i}`} className="cursor-pointer">
                      {label}
                    </label>
                  </div>
                  <span className="text-gray-400 font-medium">[{count}]</span>
                </li>
              ))}
            </ul>
          </div>
        )}
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



