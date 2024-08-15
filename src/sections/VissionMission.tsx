import React from "react";
import Image from "next/image";

// Sample network images; replace with your actual URLs
const visionImageUrl =
  "https://images.pexels.com/photos/5036667/pexels-photo-5036667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const missionImageUrl =
  "https://images.pexels.com/photos/7666429/pexels-photo-7666429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

export const VisionMissionSection = () => {
  return (
    <section className="py-8 px-4 md:px-8 lg:px-16 bg-[#FAFAFA]">
      {/* Vision Section */}
      <div className="flex flex-col md:flex-row items-center mb-12">
        <div className="md:w-1/2 md:pr-8">
          <h2
            className="text-2xl font-bold mb-4 md:text-3xl"
            style={{ color: "#023524" }}
          >
            Our Vision
          </h2>
          <p className="text-base mb-4 md:text-lg" style={{ color: "#666666" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Discover the perfect place where
            your family can thrive and create lasting memories. Our homes are
            designed with your comfort and happiness in mind, offering spacious
            living areas, modern amenities, and beautiful surroundings. Whether
            you're looking for a cozy starter home or a luxurious estate, we
            have something to suit every lifestyle and budget. Join our
            community and start building your future today.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src={visionImageUrl}
            alt="Vision"
            width={284}
            height={240}
            className="rounded-lg w-full"
          />
        </div>
      </div>

      {/* Mission Section */}
      <div className="flex flex-col md:flex-row-reverse items-center">
        <div className="md:w-1/2 md:pl-8">
          <h2
            className="text-2xl font-bold mb-4 md:text-3xl"
            style={{ color: "#023524" }}
          >
            Our Mission
          </h2>
          <p className="text-base mb-4 md:text-lg" style={{ color: "#666666" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Discover the perfect place where
            your family can thrive and create lasting memories. Our homes are
            designed with your comfort and happiness in mind, offering spacious
            living areas, modern amenities, and beautiful surroundings. Whether
            you're looking for a cozy starter home or a luxurious estate, we
            have something to suit every lifestyle and budget. Join our
            community and start building your future today.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src={missionImageUrl}
            alt="Mission"
            width={284}
            height={240}
            className="rounded-lg w-full"
          />
        </div>
      </div>
    </section>
  );
};
