import React, { useState } from "react";
import HotelCard from "./HotelsCard"; // Ensure this path is accurate


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
        "https://img.easemytrip.com/EMTHotel-519654/8/g/l/446930_18.jpg",
        "https://img.easemytrip.com/EMTHotel-519654/8/g/l/446930_2.jpg",
        "https://img.easemytrip.com/EMTHotel-519654/8/g/l/446930_9.jpg",
        "https://img.easemytrip.com/EMTHotel-519654/8/g/l/446930_15.jpg",
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
        "https://img.easemytrip.com/emthotel-399724/8/m/l/1065446_0.jpg",
      ],
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









