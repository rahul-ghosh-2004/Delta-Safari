import React from "react";
import Filters from "@/components/Hotels/Filters";
import HotelsList from "@/components/Hotels/HotelsList";
import FAQs from "@/components/Hotels/FAQ's";

const Hotels = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Filters Sidebar */}
        <div className="w-full lg:w-1/4">
          <Filters />
        </div>

        {/* Hotel List */}
        <div className="w-full lg:w-3/4 space-y-12">
          <HotelsList />
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-12 max-w-4xl mx-auto">
        <FAQs />
      </div>
    </div>
  );
};

export default Hotels;



