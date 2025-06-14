import React from "react";
import HotelDetails from "@/components/HotelReview/HotelDetails";
import HotelPrices from "@/components/HotelReview/HotelPrices";
import HotelOffers from "@/components/HotelReview/HotelOffers";

const HotelReview = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8">
      <div className="text-sm text-blue-600 mb-6">
        <span className="font-medium">1. Review and Travellers</span>
        <span className="text-gray-400 mx-1">&gt;</span>
        <span className="font-medium text-gray-800">2. Payment</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[68%_32%] gap-6">
        <HotelDetails />
        <div className="space-y-6 w-full max-w-md mx-auto">
          <HotelPrices />
          <HotelOffers />
        </div>
      </div>
    </div>
  );
};

export default HotelReview;




