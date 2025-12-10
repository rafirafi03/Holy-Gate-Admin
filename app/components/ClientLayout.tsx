"use client";

import Sidebar from "./Sidebar";
import Header from "./Header";
import { SidebarProvider } from "./SidebarContext";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          {/* Main Content */}
          <div className="flex-1 flex flex-col overflow-x-hidden">
            {/* Main Content Area */}
            <main className="flex-1 p-4 md:p-6 lg:p-8 bg-blue-50 overflow-y-auto">
              {children}
            </main>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
