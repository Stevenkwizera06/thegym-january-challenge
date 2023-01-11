import React, { useState } from "react";
import Link from "next/link";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="relative z-10">
      <button
        className="text-gray-700 focus:outline-none focus:text-gray-900"
        aria-label="Menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      <div
        className={` absolute top-0 right-0 py-2 mt-2 text-gray-700 bg-white rounded-md ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <Link href="" className="hover:border-b-4">
          News 
        </Link>
        <Link href="" className="hover:border-b-4">
          News 
        </Link>
        <Link href="" className="hover:border-b-4">
          News 
        </Link>
        <Link href="" className="hover:border-b-4">
          News 
        </Link>
      </div>
    </nav>
  );
};

export default Menu;
