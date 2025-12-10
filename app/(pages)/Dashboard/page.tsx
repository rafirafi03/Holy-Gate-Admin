"use client";

import GreetingSection from "../../components/GreetingSection";
import MetricCard from "../../components/MetricCard";
import QuickActions from "../../components/QuickActions";
import VisitorsInsights from "../../components/VisitorsInsights";
import RecentActivity from "../../components/RecentActivity";
import {
  Users,
  Church,
  Video,
  RefreshCw,
} from "lucide-react";

export default function Dashboard() {
  const metrics = [
    {
      title: "Total users",
      value: "89,935",
      icon: Users,
      iconBgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      trend: {
        value: "10.2",
        percentage: "+1.01%",
        isPositive: true,
      },
      period: "this week",
    },
    {
      title: "Total Churches",
      value: "23,283.5",
      icon: Church,
      iconBgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      trend: {
        value: "3.1",
        percentage: "+0.49%",
        isPositive: true,
      },
      period: "this week",
    },
    {
      title: "Dhayanam Videos",
      value: "46,827",
      icon: Video,
      iconBgColor: "bg-green-100",
      iconColor: "text-green-600",
      trend: {
        value: "2.56",
        percentage: "-0.91%",
        isPositive: false,
      },
      period: "this week",
    },
    {
      title: "Total Prayers",
      value: "124,854",
      icon: RefreshCw,
      iconBgColor: "bg-orange-100",
      iconColor: "text-orange-600",
      trend: {
        value: "7.2",
        percentage: "+1.51%",
        isPositive: true,
      },
      period: "this week",
    },
  ];

  return (
    <>
      <GreetingSection />

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
        {metrics.map((metric, index) => (
          <MetricCard
            key={index}
            title={metric.title}
            value={metric.value}
            icon={metric.icon}
            iconBgColor={metric.iconBgColor}
            iconColor={metric.iconColor}
            trend={metric.trend}
            period={metric.period}
          />
        ))}
      </div>

      <QuickActions />

      {/* Bottom Section - Visitors Insights and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <VisitorsInsights />
        <RecentActivity />
      </div>
    </>
  );
}
