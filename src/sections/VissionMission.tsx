import React from 'react';
import Image from 'next/image';

// Sample network images; replace with your actual URLs
const visionImageUrl = 'https://images.pexels.com/photos/5036667/pexels-photo-5036667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
const missionImageUrl = 'https://images.pexels.com/photos/7666429/pexels-photo-7666429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

export const VisionMissionSection = () => {
  return (
    <section className="py-8 px-4 md:px-8 lg:px-16">
      {/* Vision Section */}
      <div className="flex md:flex-row items-center mb-12">
        <div className="md:w-1/2 md:pr-8">
          <h2 className="text-2xl font-bold mb-4 md:text-3xl" style={{ color: '#023524' }}>
            Our Vision
          </h2>
          <p className="text-base mb-4 md:text-lg" style={{ color: '#666666' }}>
            Our vision is to create a world where every home is a place of happiness and comfort, designed with purpose and excellence.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src={visionImageUrl}
            alt="Vision"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Mission Section */}
      <div className="flex md:flex-row items-center">
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-2xl font-bold mb-4 md:text-3xl" style={{ color: '#023524' }}>
            Our Mission
          </h2>
          <p className="text-base mb-4 md:text-lg" style={{ color: '#666666' }}>
            Our mission is to deliver outstanding real estate experiences through dedication, innovation, and a commitment to client satisfaction.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src={missionImageUrl}
            alt="Mission"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};
