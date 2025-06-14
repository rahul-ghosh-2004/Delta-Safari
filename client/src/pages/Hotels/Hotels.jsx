import React, { useState } from "react";
import Filters from "@/components/Hotels/Filters";
import HotelsList from "@/components/Hotels/HotelsList";
import FAQs from "@/components/Hotels/FAQ's";
import { Button } from "@/components/ui/button"; 

const Hotels = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Show Filters Button (Only Mobile) */}
      <div className="sm:hidden my-4">
        <Button onClick={() => setShowFilters(!showFilters)} variant="outline">
          {showFilters ? "Hide Filters" : "Show Filters"}
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 sm:items-start mt-8">
        {/* Filters Sidebar */}
        
        <div
          className={`${showFilters ? "block" : "hidden"
            } sm:block sm:w-1/3 md:w-1/4 min-w-[250px] shrink-0`}
        >
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




