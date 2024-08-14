import React from 'react';
import PropertyCard from './FeaturedPropertyProps';

const properties = [
  {
    imageUrl: 'https://images.pexels.com/photos/26201300/pexels-photo-26201300/free-photo-of-building-with-house-and-store-in-town.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Replace with actual image URL
    amount: '$250,000',
    name: 'Modern Family Home',
    address: '123 Maple Street, Springfield',
  },
];

const FeaturedProperties: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-5">
      {properties.map((property, index) => (
        <PropertyCard
          key={index}
          imageUrl={property.imageUrl}
          amount={property.amount}
          name={property.name}
          address={property.address}
        />
      ))}
    </div>
  );
};

export default FeaturedProperties;
