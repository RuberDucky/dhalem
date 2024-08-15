import { FaCheck } from "react-icons/fa"; // Ensure you have react-icons installed

export const WhyChooseSection = () => {
  return (
    <div>
      {/* Headings */}
      <div className="hidden mt-12 ml-5 text-left text-[24px] font-bold lg:text-[40px] lg:ml-20 md:hidden">
        <h3
          className="text-2xl font-bold mb-4 md:text-3xl"
          style={{ color: "#023524" }}
        >
          Why Choose Us for Your House Needs?
        </h3>
      </div>
      <div className="mt-12 ml-5 text-left text-[24px] font-bold lg:text-[40px] lg:ml-0 lg:text-center">
        <h3
          className="text-2xl font-bold mb-4 md:text-3xl"
          style={{ color: "#023524" }}
        >
          Why Choose Us for Your House Needs?
        </h3>
      </div>

      <div className="mt-6 ml-5 text-left text-[16px] lg:text-[16px] lg:hidden">
        <p
          className="text-[16px] mb-4 md:text-[16px]"
          style={{ color: "#666666" }}
        >
          Discover why we are the best choice for your housing needs. Our
          expertise, comprehensive services, and commitment to excellence set us
          apart from the competition.
        </p>
      </div>

      {/* Steps */}
      <div className="container mx-auto mt-12 lg:mt-16 px-4 lg:px-0">
        <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-center items-start lg:justify-center gap-8">
          {/* Step 1 */}
          <div className="flex flex-col items-start mb-12 md:w-1/2 lg:w-1/4 md:pl-4 lg:pl-8">
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-green-900 text-white text-2xl mb-4">
              <FaCheck />
            </div>
            <h4
              className="text-lg font-semibold mb-2 text-center lg:text-left"
              style={{ color: "#023524" }}
            >
              Expert Guidance
            </h4>
            <p
              className="text-sm text-left lg:text-left"
              style={{ color: "#666666" }}
            >
              Our team of experts provides you with personalized guidance
              throughout the buying process.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-start mb-12 md:w-1/2 lg:w-1/4 md:pl-4 lg:pl-8">
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-green-900 text-white text-2xl mb-4">
              <FaCheck />
            </div>
            <h4
              className="text-lg font-semibold mb-2 text-center lg:text-left"
              style={{ color: "#023524" }}
            >
              Comprehensive Listings
            </h4>
            <p
              className="text-sm text-left lg:text-left"
              style={{ color: "#666666" }}
            >
              We offer an extensive range of property listings to find the
              perfect match for your needs.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-start mb-12 md:w-1/2 lg:w-1/4 md:pl-4 lg:pl-8">
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-green-900 text-white text-2xl mb-4">
              <FaCheck />
            </div>
            <h4
              className="text-lg font-semibold mb-2 text-center lg:text-left"
              style={{ color: "#023524" }}
            >
              Transparent Process
            </h4>
            <p
              className="text-sm text-left lg:text-left"
              style={{ color: "#666666" }}
            >
              Enjoy a transparent and straightforward buying process with clear
              communication at every step.
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-start mb-12 md:w-1/2 lg:w-1/4 md:pl-4 lg:pl-8">
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-green-900 text-white text-2xl mb-4">
              <FaCheck />
            </div>
            <h4
              className="text-lg font-semibold mb-2 text-center lg:text-left"
              style={{ color: "#023524" }}
            >
              Client Satisfaction
            </h4>
            <p
              className="text-sm text-left lg:text-left"
              style={{ color: "#666666" }}
            >
              Our ultimate goal is your satisfaction. We strive to exceed your
              expectations with every transaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
