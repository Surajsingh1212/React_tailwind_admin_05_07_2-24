import React from 'react';
import { Menu, Search, Bell } from 'lucide-react';

const Topbaar = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <button className="p-2 rounded-md bg-gray-50 hover:bg-gray-100 md:hidden">
            <Menu size={20} />
          </button>
          <img
            src="https://img.logoipsum.com/243.svg"
            className="w-32 ml-4 md:ml-0"
            alt="Logo"
          />
        </div>
        <div className="flex-1 mx-4 hidden md:block">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full bg-gray-50 hover:bg-gray-100">
            <Bell size={20} />
          </button>
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
          <div className="hidden md:block">
            <h4 className="font-semibold">Suraj Singh</h4>
            <span className="text-xs text-gray-600">suraj@gmail.com</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbaar;
