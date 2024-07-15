import React from "react";
import { Menu } from "lucide-react";

function Header() {
  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">YourLogo</h1>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-blue-200">
            Home
          </a>
          <a href="#" className="hover:text-blue-200">
            Features
          </a>
          <a href="#" className="hover:text-blue-200">
            Pricing
          </a>
          <a href="#" className="hover:text-blue-200">
            Contact
          </a>
        </nav>
        <button className="md:hidden">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}

export default Header;
