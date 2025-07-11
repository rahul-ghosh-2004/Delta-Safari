import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CityActivities from "@/components/ActivityData/CityActivities";
import TourHeader from "@/components/ActivityReview/TourHeader";
import ActivityDetails from "@/components/ActivityReview/ActivityDetails";
import BookingCard from "@/components/ActivityReview/BookingCard";
import CancellationPolicy from "@/components/ActivityReview/CancellationPolicy";
import ImportantInfoCard from "@/components/ActivityReview/ImportantInfoCard";

export default function ActivityReview() {
  const { city, slug } = useParams();
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    // Load from localStorage first
    const stored = localStorage.getItem("selectedActivity");
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed.slug === slug && parsed.city.toLowerCase().replace(/\s+/g, "-") === city) {
        setActivity(parsed);
        return;
      }
    }

    // Fallback: lookup from CityActivities
    const activityData = CityActivities[city];
    const found = activityData?.results?.find((a) => a.slug === slug);
    if (found) {
      setActivity(found);
    }
  }, [city, slug]);

  if (!activity) {
    return <p className="text-center py-10">Loading activity details...</p>;
  }

  return (
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 p-4">
      <div className="md:col-span-2">
        <TourHeader activity={activity} />
        <ActivityDetails activity={activity} />
      </div>

      <div className="flex flex-col gap-3 sm:items-start mt-20"> 
        <BookingCard activity={activity} />
        <CancellationPolicy activity={activity} />
        <ImportantInfoCard activity={activity} />
      </div>
    </div>
  );
}

