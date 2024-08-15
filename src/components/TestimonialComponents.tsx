import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa'; // Ensure you have react-icons installed
interface testimonials {
    imageSrc: string;
    testimonial: string;
    name: string;
    location: string;
  }
  
  const TestimonialCard: React.FC<testimonials> = ({ name, location, testimonial, imageSrc }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 flex flex-col items-start">
      <div className="flex items-center mb-4">
        <Image
          src={imageSrc}
          alt={`${name}'s profile picture`}
          className="w-16 h-16 rounded-full object-cover"
          width={64}
          height={64}
        />
        <div className="ml-4">
          <h4 className="text-lg font-semibold text-[#023524]">{name}</h4>
          <p className="text-sm text-gray-600">{location}</p>
        </div>
      </div>
      <div className="flex items-center text-[#023524] text-2xl mb-4">
        <FaQuoteLeft />
      </div>
      <p className="text-sm text-gray-600">
        {testimonial}
      </p>
    </div>
  );
};

export default  TestimonialCard;
