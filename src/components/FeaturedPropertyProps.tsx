import React from 'react';
import Image from 'next/image';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Import the marker icon

interface PropertyCardProps {
  imageUrl: string;
  amount: string;
  name: string;
  address: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ imageUrl, amount, name, address }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <Image src={imageUrl} alt={name} width={400} height={300} className="w-full h-48 object-cover" />
        <button
          className="absolute top-2 left-2 bg-green-700 text-white px-3 py-1 text-sm rounded-full"
          style={{ backgroundColor: '#023524' }}
        >
          {amount}
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold" style={{ color: '#023524' }}>{name}</h3>
        <div className="flex items-center mt-2">
          <FaMapMarkerAlt className="text-green-900 mr-2" />  {/* Marker icon */}
          <p className="text-gray-600">{address}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
