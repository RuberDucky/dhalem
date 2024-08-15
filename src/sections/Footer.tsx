import logo from "@/assets/logo.svg";
import Image from "next/image";

export const Footer = () => {
    return (
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          {/* Mobile View */}
          <div className="lg:hidden">
            <div className="mb-6">
              <h3 className="text-xl font-bold" style={{ color: "#023524" }}>dhalem</h3>
              <p className="text-sm mt-2 text-gray-600">
                Your company’s description goes here. This can be a short and concise description of what your business offers.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {/* Useful Links */}
              <div>
                <h4 className="text-lg font-semibold" style={{ color: "#023524" }}>Useful Links</h4>
                <ul className="mt-2">
                  <li><a href="#" className="text-gray-600">Home</a></li>
                  <li><a href="#" className="text-gray-600">About</a></li>
                  <li><a href="#" className="text-gray-600">Services</a></li>
                  <li><a href="#" className="text-gray-600">Contact</a></li>
                </ul>
              </div>
              {/* Get in Touch */}
              <div>
                <h4 className="text-lg font-semibold" style={{ color: "#023524" }}>Get in Touch</h4>
                <ul className="mt-2">
                  <li><a href="#" className="text-gray-600">Email: info@example.com</a></li>
                  <li><a href="#" className="text-gray-600">Phone: (123) 456-7890</a></li>
                </ul>
              </div>
            </div>
            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold" style={{ color: "#023524" }}>Newsletter</h4>
              <div className="mt-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full py-2 px-3 border border-gray-300 rounded-[27px]"
                />
                <button
                  className="w-full py-2 px-4 mt-4 text-white font-semibold rounded-[27px]"
                  style={{ backgroundColor: "#023524" }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
  
          {/* Medium and Large View */}
          <div className="hidden lg:flex justify-between items-start">
            {/* Logo */}
            <div className="lg:flex-1 lg:mr-8">
              <Image src={logo} alt="Logo" className="w-32 mb-4" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold" style={{ color: "#023524" }}>dhalem</h3>
              <p className="text-sm mt-2 text-gray-600">
                Your company’s description goes here. This can be a short and concise description of what your business offers.
              </p>
            </div>
            <div className="flex-1">
              {/* Useful Links */}
              <h4 className="text-lg font-semibold" style={{ color: "#023524" }}>Useful Links</h4>
              <ul className="mt-2">
                <li><a href="#" className="text-gray-600">Home</a></li>
                <li><a href="#" className="text-gray-600">About</a></li>
                <li><a href="#" className="text-gray-600">Services</a></li>
                <li><a href="#" className="text-gray-600">Contact</a></li>
              </ul>
            </div>
            <div className="flex-1">
              {/* Get in Touch */}
              <h4 className="text-lg font-semibold" style={{ color: "#023524" }}>Get in Touch</h4>
              <ul className="mt-2">
                <li><a href="#" className="text-gray-600">Email: info@example.com</a></li>
                <li><a href="#" className="text-gray-600">Phone: (123) 456-7890</a></li>
              </ul>
            </div>
            <div className="flex-1">
              {/* Newsletter */}
              <h4 className="text-lg font-semibold" style={{ color: "#023524" }}>Newsletter</h4>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full py-2 px-3 border border-gray-300 rounded-[27px] mb-4"
              />
              <button
                className="w-full py-2 px-4 text-white font-semibold rounded-[27px]"
                style={{ backgroundColor: "#023524" }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  