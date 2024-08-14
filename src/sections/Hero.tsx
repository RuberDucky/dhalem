import { FaSearch } from "react-icons/fa"; // Importing search icon
import houseImage from "@/assets/house.jpg";
import womenImage from "@/assets/woman.png";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="hero-section py-10">
      <div className="container lg:hidden">
        <h4
          className="text-2xl sm:text-3xl md:text-4xl mt-0 ml-4 font-extrabold text-left md:mr-2"
          style={{ color: "#023524", lineHeight: "1.3" }}
        >
          <div className="text-left">
            <p className="block sm:hidden">
              Bring Your Family's Happiness to Your Dream House
            </p>
            <p className="hidden sm:block md:hidden">
              Bring Your Family's Happiness to Your Dream House
            </p>
            <p className="hidden md:block lg:hidden">
              Bring Your Family's Happiness to Your Dream House
            </p>
            <p className="hidden lg:block">
              Bring Your Family's Happiness to Your Dream House
            </p>
          </div>
        </h4>
        <p
          className="text-[10px] sm:text-[11px] md:text-[12px] mt-4 ml-4 mr-6 text-left"
          style={{ color: "#666666", lineHeight: "1.5" }}
        >
          Discover the perfect place where your family can thrive and create
          lasting memories. Our homes are designed with your comfort and
          happiness in mind, offering spacious living areas, modern amenities,
          and beautiful surroundings. Whether you're looking for a cozy starter
          home or a luxurious estate, we have something to suit every lifestyle
          and budget. Join our community and start building your future today.
        </p>
        <div className="relative mt-6 ml-4 mr-6">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search Here"
            className="pl-10 pr-20 py-3 w-full border border-gray-300 rounded-full text-[12px]"
            style={{
              color: "#00000",
              backgroundColor: "#FAFAFA",
              borderRadius: "50px",
            }}
          />
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white py-1.5 px-4 rounded-full"
            style={{ backgroundColor: "#023524", borderRadius: "50px" }}
          >
            Search
          </button>
        </div>
        <div className="mt-6 ml-4 mr-7 flex flex-wrap md:flex-nowrap justify-between md:justify-around">
          <div className="text-center mb-4">
            <h4 className="text-2xl font-bold" style={{ color: "#023524" }}>
              300+
            </h4>
            <p className="text-[16px]" style={{ color: "#666666" }}>
              Award Winning
            </p>
          </div>
          <div className="text-center mb-4">
            <h4 className="text-2xl font-bold" style={{ color: "#023524" }}>
              80+
            </h4>
            <p className="text-[16px]" style={{ color: "#666666" }}>
              Property Ready
            </p>
          </div>
          <div className="text-center mb-4">
            <h4 className="text-2xl font-bold" style={{ color: "#023524" }}>
              450+
            </h4>
            <p className="text-[16px]" style={{ color: "#666666" }}>
              Happy Customers
            </p>
          </div>
        </div>
        <div className="mt-6 ml-4 mr-4 flex justify-center">
          <Image
            src={houseImage}
            alt="House"
            className="rounded-[16px] w-full h-auto md:w-[664px] md:h-[480px] lg:w-[328px] lg:h-[240px]"
          />
        </div>
      </div>
      <div className="container lg:flex lg:items-start lg:justify-between lg:mt-20">
        <div className="lg:w-1/2 lg:mt-0 lg:flex lg:flex-col lg:justify-start">
          <h4
            className="hidden lg:block text-[56px] font-extrabold text-left ml-20"
            style={{ color: "#023524", lineHeight: "1.3" }}
          >
            TRANSFORMATION
            <br />
            BEGINS WITH “T’’
          </h4>
          <p
            className="hidden lg:block text-[16px] mt-4 ml-20"
            style={{ color: "#666666", lineHeight: "1.5" }}
          >
            Just think, you're not here by mere coincidence, but by a higher
            power, to fulfill a purpose.
          </p>
        </div>
        <div className="hidden md:hidden lg:block justify-center lg:justify-end lg:ml-10">
  <Image
    src={womenImage}
    alt="Women"
    width={448}
    height={520}
    className="rounded-[16px]"
  />
</div>
      </div>
    </section>
  );
};
