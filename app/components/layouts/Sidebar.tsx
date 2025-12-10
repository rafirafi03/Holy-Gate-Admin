"use client";

import {
  LayoutDashboard,
  User,
  Church,
  MessageCircle,
  Sparkles,
  Users,
  Pill,
  Hand,
  Music,
  Bell,
  Settings,
  LogOut,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useSidebar } from "../SidebarContext";

export default function Sidebar() {
  const { isOpen, toggleSidebar, closeSidebar } = useSidebar();
  
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: User, label: "Dhyanam", active: false },
    { icon: Church, label: "Church", active: false },
    { icon: MessageCircle, label: "Q&A", active: false },
    { icon: Sparkles, label: "Miracle", active: false },
    { icon: Users, label: "Saba", active: false },
    { icon: Pill, label: "Anti-Drug", active: false },
    { icon: Hand, label: "Prayer", active: false },
    { icon: Music, label: "Song", active: false },
    { icon: Users, label: "Users", active: false },
    { icon: Bell, label: "Notifications", active: false },
    { icon: Settings, label: "Settings", active: false },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-white  z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static
          top-0 left-0
          h-full
          bg-gray-100
          flex flex-col
          justify-center
          z-50
          transition-all duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          ${isOpen ? "lg:w-64" : "lg:w-20"}
        `}
      >
        <div className={`p-4 lg:p-6 ${!isOpen ? "lg:p-4" : ""}`}>
          {/* Mobile header with close button */}
          <div className="flex items-center justify-between mb-8 lg:hidden">
            
            <button
              onClick={closeSidebar}
              className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          {/* Desktop logo section */}
          
          <div className="cols ">
            <div className="">
              
            <div className="flex">
  {/* LEFT SECTION — MENU ITEMS */}
  <nav className="flex-1 space-y-1">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href="#"
                  onClick={closeSidebar}
                  className={`  
                    flex items-center 
                    ${isOpen ? "gap-1 px-2" : "lg:justify-center lg:px-2 px-4 gap-1"} 
                    py-3 rounded-lg transition-colors
                    ${item.active
                      ? "bg-blue-900 text-white"
                      : "text-gray-700 hover:bg-gray-200"
                    }
                    group
                    relative
                  `}
                  title={!isOpen ? item.label : undefined}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className={`whitespace-nowrap transition-all ${
                    isOpen ? "opacity-100" : "lg:opacity-0 lg:w-0 overflow-hidden"
                  }`}>
                    {item.label}
                  </span>
                  {/* Tooltip for minimized state */}
                  {!isOpen && (
                    <span className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50 transition-opacity">
                      {item.label}
                    </span>
                  )}
                </a>
              );
            })}
             </nav>

{/* RIGHT SECTION — ARROW BUTTON */}
<div className="w-8 flex items-start pt-3 justify-center">
  <button
    onClick={toggleSidebar}
    className="p-1.5 hover:bg-gray-200 rounded-lg transition-colors"
  >
    {isOpen ? (
      <ChevronLeft className="w-4 h-4 text-gray-700" />
    ) : (
      <ChevronRight className="w-4 h-4 text-gray-700" />
    )}
  </button>
</div>
</div>

        </div>

        <div className={`mt-auto ${isOpen ? "p-6" : "lg:p-4 p-6"}`}>
          <a
            href="#"
            onClick={closeSidebar}
            className={`
              flex items-center 
              ${isOpen ? "gap-0 px-1" : "lg:justify-center lg:px-1 px-1 gap-0"} 
              py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors
              group relative
            `}
            title={!isOpen ? "Logout Account" : undefined}
          >
            <LogOut className="w-5 h-5 flex-shrink-0" />
            <span className={`whitespace-nowrap transition-all ${
              isOpen ? "opacity-100" : "lg:opacity-0 lg:w-0 overflow-hidden"
            }`}>
              Logout Account
            </span>
            {/* Tooltip for minimized state */}
            {!isOpen && (
              <span className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50 transition-opacity">
                Logout Account
              </span>
            )}
          </a>
        </div>

            </div>
            
          </div>
        </aside>
    </>
  );
}

