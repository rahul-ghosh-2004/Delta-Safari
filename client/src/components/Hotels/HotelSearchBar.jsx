// import { CalendarIcon, ChevronDownIcon } from 'lucide-react';

// const HotelSearchBar = () => {
//   return (
//     <div className="bg-gradient-to-r from-blue-400 to-blue-500 p-6 rounded-md text-white shadow-md">
//       <h2 className="text-xl font-semibold mb-4 text-center">Hotels in Delhi</h2>
//       <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
//         {/* Location Input */}
//         <input
//           type="text"
//           placeholder="City name, Location or Specific hotel"
//           defaultValue="Delhi,India"
//           className="px-4 py-2 rounded-md text-black w-full md:w-60"
//         />

//         {/* Check-In */}
//         <div className="relative w-full md:w-44">
//           <input
//             type="text"
//             defaultValue="17/06/2025"
//             className="px-4 py-2 rounded-md text-black w-full"
//             readOnly
//           />
//           <CalendarIcon className="absolute right-3 top-2.5 h-5 w-5 text-gray-500" />
//         </div>

//         {/* Check-Out */}
//         <div className="relative w-full md:w-44">
//           <input
//             type="text"
//             defaultValue="18/06/2025"
//             className="px-4 py-2 rounded-md text-black w-full"
//             readOnly
//           />
//           <CalendarIcon className="absolute right-3 top-2.5 h-5 w-5 text-gray-500" />
//         </div>

//         {/* Room/Guest Dropdown */}
//         <div className="relative w-full md:w-56">
//           <input
//             type="text"
//             value="2 Person in 1 Room"
//             readOnly
//             className="px-4 py-2 rounded-md text-black w-full"
//           />
//           <ChevronDownIcon className="absolute right-3 top-2.5 h-5 w-5 text-gray-500" />
//         </div>

//         {/* Modify Search Button */}
//         <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition">
//           Modify Search
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HotelSearchBar;

import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, ChevronDown } from "lucide-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar"; // Shadcn calendar

export default function HotelSearchBar() {
  const [date, setDate] = useState({
    from: new Date(),
    to: new Date(new Date().setDate(new Date().getDate() + 1))
  });

  return (
    <div className="bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl px-6 py-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
        {/* Location */}
        <div className="flex flex-col w-full md:w-60">
          <label className="text-white text-xs mb-1">
            City name, Location or Specific hotel
          </label>
          <input
            type="text"
            defaultValue="Delhi,India"
            className="px-4 py-2 rounded-md text-black bg-white focus:outline-none"
          />
        </div>

        {/* Calendar */}
        <div className="flex flex-col w-full md:w-[290px]">
          <label className="text-white text-xs mb-1">Check-In / Check-Out</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal bg-white text-black"
              >
                <CalendarIcon className="mr-2 h-4 w-4 text-gray-500" />
                {date?.from ? (
                  date.to ? (
                    <>
                      {format(date.from, "dd/MM/yyyy")} -{" "}
                      {format(date.to, "dd/MM/yyyy")}
                    </>
                  ) : (
                    format(date.from, "dd/MM/yyyy")
                  )
                ) : (
                  <span>Select dates</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-white">
              <Calendar
                mode="range"
                defaultMonth={date?.from}
                selected={date}
                onSelect={setDate}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Rooms/Guests */}
        <div className="flex flex-col w-full md:w-56 relative">
          <label className="text-white text-xs mb-1">Rooms/Guests</label>
          <input
            type="text"
            value="2 Person in 1 Room"
            readOnly
            className="px-4 py-2 rounded-md text-black bg-white pr-8 focus:outline-none"
          />
          <ChevronDown className="absolute right-3 bottom-2.5 h-5 w-5 text-gray-400" />
        </div>

        {/* Modify Button */}
        <div className="flex items-end">
          <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-full border border-white hover:bg-gray-100 transition whitespace-nowrap mt-5 md:mt-0">
            Modify Search
          </button>
        </div>
      </div>
    </div>
  );
}


