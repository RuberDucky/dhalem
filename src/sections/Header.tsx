import logo from "@/assets/logo.svg";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import ArrowDropDown from "@/assets/arrow_drop_down.png";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-md bg-white bg-opacity-70 z-50">
      <div className="py-5 px-5 md:px-6 lg:px-0">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            {/* Mobile Header */}
            <div className="flex items-center lg:hidden">
              <Image src={logo} alt="logo" height={24} width={24} />
              <h5 className="ml-2 font-bold text-[24px]" style={{ color: "#023524" }}>
                dhalem
              </h5>
            </div>

            {/* Mobile Menu & Button */}
            <div className="flex items-center lg:hidden">
              <Image src={MenuIcon} alt="Menu icon" className="h-6 w-6" />
              <button
                className="ml-4 text-[12px] md:ml-6 px-4 py-1 text-white rounded-full"
                style={{ backgroundColor: "#023524" }}
              >
                Get Quote
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 ml-auto">
              <a href="#" className="text-[#666666] text-[14px] hover:text-black">Home</a>
              <a href="#" className="text-[#666666] text-[14px] hover:text-black">Listing</a>
              <a href="#" className="text-[#666666] text-[14px] hover:text-black">Services</a>
              <div className="relative group">
                <a href="#" className="text-[#666666] text-[14px] flex items-center hover:text-black">
                  Blog
                  <Image src={ArrowDropDown} alt="Dropdown icon" className="ml-1 h-5 w-5" />
                </a>
                <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 w-48">
                  <a href="#" className="block px-4 py-2 text-[#666666] text-[14px] hover:bg-gray-100">Blog Item 1</a>
                  <a href="#" className="block px-4 py-2 text-[#666666] text-[14px] hover:bg-gray-100">Blog Item 2</a>
                </div>
              </div>
              <a href="#" className="text-[#666666] text-[14px] hover:text-black">About</a>
              <a href="#" className="text-[#666666] text-[14px] hover:text-black">Contact Us</a>
              <div className="relative group">
                <a href="#" className="text-[#666666] text-[14px] flex items-center hover:text-black">
                  Pages
                  <Image src={ArrowDropDown} alt="Dropdown icon" className="ml-1 h-5 w-5" />
                </a>
                <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 w-48">
                  <a href="#" className="block px-4 py-2 text-[#666666] text-[14px] hover:bg-gray-100">Page Item 1</a>
                  <a href="#" className="block px-4 py-2 text-[#666666] text-[14px] hover:bg-gray-100">Page Item 2</a>
                </div>
              </div>
              <button className="ml-4 px-4 py-2 text-white rounded-full" style={{ backgroundColor: "#023524" }}>
                My Free Consult
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
