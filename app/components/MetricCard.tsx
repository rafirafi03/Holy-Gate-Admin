"use client";

import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  iconBgColor: string;
  iconColor: string;
  trend: {
    value: string;
    percentage: string;
    isPositive: boolean;
  };
  period: string;
}

export default function MetricCard({
  title,
  value,
  icon: Icon,
  iconBgColor,
  iconColor,
  trend,
  period,
}: MetricCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 ${iconBgColor} rounded-lg flex items-center justify-center`}>
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
        <div
          className={`flex items-center gap-1 ${
            trend.isPositive ? "text-green-600" : "text-red-600"
          }`}
        >
          {trend.isPositive ? (
            <TrendingUp className="w-4 h-4" />
          ) : (
            <TrendingDown className="w-4 h-4" />
          )}
          <span className="text-sm font-semibold">
            {trend.value} {trend.percentage}
          </span>
        </div>
      </div>
      <div className="text-3xl font-bold text-gray-900 mb-1">{value}</div>
      <div className="text-sm text-gray-500">{title}</div>
      <div
        className={`text-xs mt-2 ${
          trend.isPositive ? "text-green-600" : "text-red-600"
        }`}
      >
        {period}
      </div>
    </div>
  );
}

