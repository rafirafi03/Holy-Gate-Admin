"use client";

import { Calendar, ChevronDown } from "lucide-react";

export default function VisitorsInsights() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Visitors Insights</h2>
        <div className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
          <Calendar className="w-4 h-4 text-gray-600" />
          <span className="text-sm text-gray-700">October</span>
          <ChevronDown className="w-4 h-4 text-gray-600" />
        </div>
      </div>
      <div className="relative h-64">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 pr-2">
          <span>1000</span>
          <span>500</span>
          <span>200</span>
          <span>100</span>
          <span>0</span>
        </div>

        {/* Chart area */}
        <div className="ml-8 h-full relative">
          <svg
            className="w-full h-full"
            viewBox="0 0 400 200"
            preserveAspectRatio="none"
          >
            {/* Gradient for area fill */}
            <defs>
              <linearGradient
                id="areaGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
              </linearGradient>
            </defs>

            {/* Area fill */}
            <path
              d="M 0,180 L 50,170 L 100,150 L 150,100 L 200,120 L 250,140 L 300,50 L 350,30 Z"
              fill="url(#areaGradient)"
            />

            {/* Line */}
            <path
              d="M 0,180 L 50,170 L 100,150 L 150,100 L 200,120 L 250,140 L 300,50 L 350,30"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Data points */}
            <circle cx="0" cy="180" r="3" fill="#3b82f6" />
            <circle cx="50" cy="170" r="3" fill="#3b82f6" />
            <circle cx="100" cy="150" r="3" fill="#3b82f6" />
            <circle cx="150" cy="100" r="3" fill="#3b82f6" />
            <circle cx="200" cy="120" r="3" fill="#3b82f6" />
            <circle cx="250" cy="140" r="3" fill="#3b82f6" />
            <circle cx="300" cy="50" r="3" fill="#3b82f6" />
            <circle cx="350" cy="30" r="3" fill="#3b82f6" />
          </svg>

          {/* X-axis labels */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 mt-2">
            <span>10 Days</span>
            <span>11 Days</span>
            <span>12 Days</span>
            <span>13 Days</span>
            <span>14 Days</span>
            <span>15 Days</span>
            <span>16 Days</span>
            <span>17 Days</span>
          </div>
        </div>
      </div>
    </div>
  );
}

