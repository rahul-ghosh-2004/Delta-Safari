import React from 'react'
import { useState } from "react";
import { Menu, X, House, MapPinHouse, Package, Hotel, Activity, Images, RefreshCw, Contact } from "lucide-react";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", icon: <House /> },
    { label: "Destinations", icon: <MapPinHouse /> },
    { label: "Packages", icon: <Package /> },
    { label: "Hotels", icon: <Hotel /> },
    { label: "Activities", icon: <Activity /> },
    { label: "Gallery", icon: <Images /> },
    { label: "Referals", icon: <RefreshCw /> },
    { label: "Contact", icon: <Contact /> },
  ];

  return (
    <header className="bg-white shadow-sm w-full">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center flex-col space-x-2">
          <img
            src="https://www.easemytrip.com/images/emt_logo.png"
            alt="Delta Safari Logo"
            className="h-6 md:h-8"
          />
          <span className="text-sm text-gray-600 italic hidden md:inline">
            Delta Safari
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-sm font-medium ${
                item.active
                  ? "bg-blue-100 rounded-md px-2 py-1 text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              <div className="text-xl">{item.icon}</div>
              <span>{item.label}</span>
            </div>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden lg:flex items-center space-x-4">
          <span className="text-sm text-gray-600">Contact Support</span>
          {/* <span className="text-sm text-gray-600 flex items-center gap-1">
            🇮🇳 India ▼
          </span> */}
          <button className="bg-blue-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold cursor-pointer">
            Login or Signup
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md px-4 py-3 space-y-3">
          <div className="grid grid-cols-3 gap-3">
            {navItems.map((item, i) => (
              <div
                key={i}
                className={`flex flex-col items-center text-xs ${
                  item.active
                    ? "bg-blue-100 text-blue-600 rounded-md p-2"
                    : "text-gray-700"
                }`}
              >
                <div className="text-lg">{item.icon}</div>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center pt-4 border-t">
            <span className="text-sm text-gray-600">Contact Support ▼</span>
            <span className="text-sm text-gray-600">🇮🇳 India ▼</span>
          </div>
          <button className="w-full mt-3 bg-blue-500 text-white py-2 rounded-full text-sm font-semibold cursor-pointer">
            Login or Signup
          </button>
        </div>
      )}
    </header>
  )
}

export default Header