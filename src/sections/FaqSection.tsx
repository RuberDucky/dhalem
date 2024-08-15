export const FAQSection = () => {
    return (
      <div className="">
        <div className="container mt-12 lg:mt-16 lg:ml-6 lg:text-center">
          <div className="bg-transparent rounded-lg p-4 lg:p-6 flex flex-col lg:items-center">
            
            {/* FAQ Text */}
            <div className="mb-4 lg:mb-6">
              <h4 className="text-2xl md:text-3xl font-bold" style={{ color: "#023524" }}>
                FAQ's
              </h4>
              <p className="mt-2 text-sm md:text-base" style={{ color: "#666666" }}>
                Get answers to the most common questions about our services, policies, and more. If you have any additional questions, feel free to contact us directly.
              </p>
            </div>
            
            <div className="mt-4 lg:mt-6 w-full lg:w-auto">
              <button
                className="w-full py-2 px-4 text-[#023524] border border-[#023524] rounded-[27px] font-semibold"
                style={{ backgroundColor: 'transparent' }}
              >
                See Our FAQ
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  