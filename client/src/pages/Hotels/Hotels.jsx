import React from "react";
import Filters from "@/components/Hotels/Filters";
import HotelsList from "@/components/Hotels/HotelsList";
import FAQs from "@/components/Hotels/FAQ's";

const Hotels = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col sm:flex-row gap-6 sm:items-start overflow-x-auto sm:overflow-visible">
        {/* Filters Sidebar */}
        <div className="sm:w-1/3 md:w-1/4 min-w-[250px] shrink-0">
          <Filters />
        </div>

        {/* Hotel List */}
        <div className="flex-1 space-y-12">
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



