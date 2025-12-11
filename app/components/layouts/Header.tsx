"use client";

import { Search, Bell, User, ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-8 py-2 flex items-center justify-between h-16">
      <div className="flex items-center gap-">
        <img 
          src="/logo1.png" 
          alt="Holy Gate Logo" 
          className="w-16  object-contain"
        />
        <span className="text-lg font-bold text-blue-200 text-gray-800">HOLY GATE</span>
      </div>

      <div className="flex-1 flex justify-end max-w-md ml-auto mr-12">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search here..."
            className="w-full pl-9 pr-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Bell className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-800 transition-colors" />
        <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
          <div className="w-9 h-9 bg-gray-300 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-gray-600" />
          </div>
          <div>
            <div className="text-xs font-semibold text-gray-800">Andrew Smith</div>
            <div className="text-[10px] text-gray-500">PRODUCT MANAGER</div>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-600" />
        </div>
      </div>
    </header>
  );
}

