export const StepsOfBuying = () => {
    return (
      <div>
        {/* Headings */}
        <div className="hidden mt-12 ml-5 text-left text-[24px] font-bold lg:text-[40px] lg:ml-20 md:hidden">
          <h3
            className="text-2xl font-bold mb-4 md:text-3xl"
            style={{ color: "#023524" }}
          >
            Simple Home Buying Steps
          </h3>
        </div>
        <div className="mt-12 ml-5 text-left text-[24px] font-bold lg:text-[40px] lg:ml-20">
          <h3
            className="text-2xl font-bold mr-3 mb-4 md:text-3xl"
            style={{ color: "#023524" }}
          >
            Easy Steps to Buy Property on Dhalem Real Estate
          </h3>
        </div>
        <div className="mt-6 ml-5 text-left text-[16px] lg:text-[40px] lg:hidden">
          <p
            className="text-[16px]  mb-4 md:text-[16px]"
            style={{ color: "#666666" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        {/* Steps */}
        <div className="container mt-12 lg:mt-16">
          <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-center items-start px-4">
  
            {/* Step 1 */}
            <div className="flex flex-col items-start mb-12 md:w-1/2 lg:w-1/4 md:pl-4 lg:pl-8">
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-green-900 text-white text-2xl mb-4">
                1
              </div>
              <h4 className="text-lg font-semibold mb-2 text-center lg:text-left" style={{ color: "#023524" }}>
                View Listings
              </h4>
              <p className="text-sm text-left lg:text-left" style={{ color: "#666666" }}>
                Browse through our extensive property listings to find your dream home.
              </p>
            </div>
  
            {/* Step 2 */}
            <div className="flex flex-col items-start mb-12 md:w-1/2 lg:w-1/4 md:pl-4 lg:pl-8">
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-green-900 text-white text-2xl mb-4">
                2
              </div>
              <h4 className="text-lg font-semibold mb-2 text-center lg:text-left" style={{ color: "#023524" }}>
                Schedule a Visit
              </h4>
              <p className="text-sm text-left lg:text-left" style={{ color: "#666666" }}>
                Contact our agents to arrange a visit to your selected properties.
              </p>
            </div>
  
            {/* Step 3 */}
            <div className="flex flex-col items-start mb-12 md:w-1/2 lg:w-1/4 md:pl-4 lg:pl-8">
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-green-900 text-white text-2xl mb-4">
                3
              </div>
              <h4 className="text-lg font-semibold mb-2 text-center lg:text-left" style={{ color: "#023524" }}>
                Make an Offer
              </h4>
              <p className="text-sm text-left lg:text-left" style={{ color: "#666666" }}>
                Once you’ve found the perfect home, make an offer to the seller.
              </p>
            </div>
  
            {/* Step 4 */}
            <div className="flex flex-col items-start mb-12 md:w-1/2 lg:w-1/4 md:pl-4 lg:pl-8">
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-green-900 text-white text-2xl mb-4">
                4
              </div>
              <h4 className="text-lg font-semibold mb-2 text-center lg:text-left" style={{ color: "#023524" }}>
                Close the Deal
              </h4>
              <p className="text-sm text-left lg:text-left" style={{ color: "#666666" }}>
                Complete the paperwork and finalize the purchase of your new home.
              </p>
            </div>
  
          </div>
        </div>
      </div>
    );
  };
  