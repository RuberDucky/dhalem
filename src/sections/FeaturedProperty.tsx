import PropertyCard from "@/components/FeaturedPropertyProps";

    export const FeaturedProperty = () => {

        const properties = [
            {
              imageUrl: 'https://images.pexels.com/photos/26201300/pexels-photo-26201300/free-photo-of-building-with-house-and-store-in-town.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Replace with actual image URL
              amount: '$250,000',
              name: 'Modern Family Home',
              address: '123 Maple Street, Springfield',
            },
            {
              imageUrl: 'https://images.pexels.com/photos/26223577/pexels-photo-26223577/free-photo-of-building-in-the-historic-st-marys-city-in-maryland-usa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Replace with actual image URL
              amount: '$420,000',
              name: 'Luxury Villa',
              address: '456 Oak Avenue, Metropolis',
            },
            {
              imageUrl: 'https://images.pexels.com/photos/17162698/pexels-photo-17162698/free-photo-of-street-in-town-by-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Replace with actual image URL
              amount: '$620,000',
              name: 'Beachside Bungalow',
              address: '789 Pine Road, Seaside',
            },
            {
              imageUrl: 'https://images.pexels.com/photos/26436574/pexels-photo-26436574/free-photo-of-house-with-windows-with-red-and-white-stripe-awnings.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Replace with actual image URL
              amount: '$620,000',
              name: 'Pafaje',
              address: '504 Hegji Turnpike',
            },
            {
                imageUrl: 'https://images.pexels.com/photos/26076270/pexels-photo-26076270/free-photo-of-flowers-and-plants-around-house-walls-and-door.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Replace with actual image URL
                amount: '$620,000',
                name: 'Akiilofab',
                address: '172 Wulib Avenue',
              },
              {
                imageUrl: 'https://images.pexels.com/photos/25884924/pexels-photo-25884924/free-photo-of-stairs-to-house-in-town.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Replace with actual image URL
                amount: '$750,000',
                name: 'Modern Villa',
                address: '123 Green Street',
              },
              {
                imageUrl: 'https://images.pexels.com/photos/25913263/pexels-photo-25913263/free-photo-of-trees-near-house-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Replace with actual image URL
                amount: '$540,000',
                name: 'Cozy Cabin',
                address: '456 Forest Road',
              },
              {
                imageUrl: 'https://images.pexels.com/photos/25906540/pexels-photo-25906540/free-photo-of-house-building-by-the-river.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Replace with actual image URL
                amount: '$1,200,000',
                name: 'Luxury Estate',
                address: '789 Ocean Drive',
              }
            // Add more properties as needed
          ];


    return (
        <div>
        <div className="mt-12 ml-5 text-left text-[24px] font-bold lg:text-[40px] lg:ml-20 ">
            <h5 style={{ color: "#023524", lineHeight: "1.3" }}>
            Featured Listing
            </h5>
        </div>
        <div className="mt-2 ml-5 text-left text-[14px] lg:ml-20 lg:hidden">
            <p style={{ color: "#666666", lineHeight: "1.3" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-5 lg:mx-20 mt-8">
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
        </div>
    );
    };
