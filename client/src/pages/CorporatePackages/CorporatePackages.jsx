import React, { useState } from 'react';
import TripCard from '@/components/CorporatePackages/TripCard';
import RequirementForm from '@/components/CorporatePackages/RequirementForm';
import EnquiryDialog from '@/components/CorporatePackages/EnquiryDialog';

const tripPackages = [
  {
    image: 'https://tse1.mm.bing.net/th/id/OIP.tY88HMitnfBsmMjDSR2ovQHaEM?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    title: 'Manali Team Outing',
    description: '3 Days & 2 Nights with hotel, meals, bonfire, and paragliding.',
  },
  {
    image: 'https://media.easemytrip.com/media/Hotel/SHL-22111681640593/RoomImage/RoomImagecFAG0f.jpg',
    title: 'Corporate Retreat in Goa',
    description: 'Beach resort stay, team activities, and sightseeing for 3 days.',
  },
  {
    image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-480x320/09/91/13/32.jpg',
    title: 'Desert Safari Rajasthan',
    description: 'Camel rides, campfire, folk music and fort visits in Jaisalmer.',
  },
  {
    image: "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=620,height=400,dpr=2/tour_img/a93566f7a7e4e7a334a1e7775d679454c9971ebc7f0e08a7f2d59d3960e1e974.jpg",
    title: "Backwater Bliss in Kerala",
    description: "Houseboat experience, seafood cuisine, and cultural programs."
  },
  {
    image: "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=300,height=195,dpr=2/tour_img/426839f137763f77d0d4f71c52b760dcb71ba8086830351e90f737780adaf5d3.jpg",
    title: "Shimla Snow Retreat",
    description: "Snow activities, hotel stay and mountain sightseeing."
  }
];

export default function CorporatePackages() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <div className="bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-2">Corporate Packages</h1>
      <p className="text-center text-gray-600 mb-10">
        Explore pre-planned trips for your team or drop your custom requirement
      </p>

      {/* Trip Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {tripPackages.map((trip, index) => (
          <TripCard
            key={index}
            {...trip}
            onViewPackage={() => setSelectedPackage(trip.title)}
          />
        ))}
      </div>

      {/* Requirement Form */}
      <RequirementForm />

      {/* Enquiry Modal */}
      {selectedPackage && (
        <EnquiryDialog
          packageName={selectedPackage}
          onClose={() => setSelectedPackage(null)}
        />
      )}
    </div>
  );
}

