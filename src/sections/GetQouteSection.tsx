import Image from 'next/image';

export const GetQuoteSection = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold"
          style={{ color: "#023524" }}
        >
          Lets Move to Your Dream Family Home
        </h2>
        <p
          className="mt-4 text-sm md:text-base lg:text-lg"
          style={{ color: "#666666" }}
        >
          Discover the perfect home for your family with our expert assistance. We offer personalized support to help you find the ideal property that meets all your needs and exceeds your expectations.
        </p>
      </div>

      <div className="flex justify-center">
        {/* Mobile view: Single image */}
        <div className="block md:hidden">
          <Image
            src="https://images.pexels.com/photos/26201301/pexels-photo-26201301/free-photo-of-wooden-house-in-town.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Dream Home"
            className="w-full h-auto rounded-lg"
            width={500}
            height={300}
          />
        </div>
        
        {/* Medium and large screens: Image grid */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-4 lg:gap-6">
          <Image
            src="https://images.pexels.com/photos/26159403/pexels-photo-26159403/free-photo-of-stone-house-of-the-estate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Dream Home 1"
            className="w-full h-auto rounded-lg"
            width={500}
            height={300}
          />
          <Image
            src="https://images.pexels.com/photos/26201300/pexels-photo-26201300/free-photo-of-building-with-house-and-store-in-town.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Dream Home 2"
            className="w-full h-auto rounded-lg"
            width={500}
            height={300}
          />
          <Image
            src="https://images.pexels.com/photos/26370547/pexels-photo-26370547/free-photo-of-wooden-house-on-a-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Dream Home 3"
            className="w-full h-auto rounded-lg"
            width={500}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};
