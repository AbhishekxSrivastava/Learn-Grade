import React from "react";
import logo from "../assets/logo.png";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 py-3 px-2 backdrop-blur-lg border-b shadow-lg bg-white rounded-4xl overflow-hidden">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo & Site Name */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Learn-Grad Logo" className="h-10 w-10" />
          <span className="text-xl font-bold font-serif">Learn-Grade</span>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6 text-lg font-medium">
            {["Dashboard", "About", "Help", "Settings"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-blue-500 transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
