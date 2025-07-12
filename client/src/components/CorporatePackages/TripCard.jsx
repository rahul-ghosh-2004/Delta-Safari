import React from 'react';

export default function TripCard({ image, title, description, onViewPackage }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-full max-w-sm">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-blue-700 mb-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-3">{description}</p>
        <button
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          onClick={onViewPackage}
        >
          View Package
        </button>
      </div>
    </div>
  );
}
