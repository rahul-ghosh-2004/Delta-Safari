import React from 'react';
import { useNavigate } from 'react-router-dom';

const destinations = [
  {
    name: 'Europe',
    image: '/europe-tpt.webp', 
  },
  {
    name: 'Andaman',
    image: 'https://images.emtcontent.com/holiday-img/home-img/andaman-handpckd.webp',
  },
  {
    name: 'Bali',
    image: 'https://images.emtcontent.com/holiday-img/home-img/bali-qckv.webp',
    slug: '/corporatepackages/tales-of-love-in-bali',
  },
  {
    name: 'Kerala',
    image: 'https://images.emtcontent.com/holiday-img/home-img/kerala-handpckd.webp',
  },
  {
    name: 'Thailand',
    image: 'https://images.emtcontent.com/holiday-img/home-img/thailand.png',
  },
];

const TrendingDestinations = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-2">Top Trending Destinations</h2>
      <p className="text-sm text-gray-600 mb-8">
        Explore the hottest travel spots around the globe.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        {destinations.map((dest, index) => (
          <div key={index} className="w-48 cursor-pointer group"
            onClick={() => (navigate(dest.slug))}>
              <div className="overflow-hidden rounded-2xl shadow-md">
            <img
              src={dest.image}
              alt={dest.name}
              className="rounded-2xl w-full h-48 object-cover shadow-md transition-transform duration-300 transform group-hover:scale-105"
            />
            </div>
            <p className="mt-2 text-lg text-center font-semibold group-hover:text-blue-600 transition-colors duration-300 ">{dest.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingDestinations;





