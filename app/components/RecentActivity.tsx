"use client";

import { User, Video, Church, Clock } from "lucide-react";

interface ActivityItem {
  icon: React.ComponentType<{ className?: string }>;
  iconBgColor: string;
  iconColor: string;
  title: string;
  time: string;
}

const activities: ActivityItem[] = [
  {
    icon: User,
    iconBgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    title: "John Doe created an account",
    time: "2 minutes ago",
  },
  {
    icon: Video,
    iconBgColor: "bg-green-100",
    iconColor: "text-green-600",
    title: "Morning Prayer Session uploaded",
    time: "15 minutes ago",
  },
  {
    icon: Church,
    iconBgColor: "bg-yellow-100",
    iconColor: "text-yellow-600",
    title: "St. Mary&apos;s Church added a new program",
    time: "1 hour ago",
  },
];

export default function RecentActivity() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-1">Recent Activity</h2>
        <p className="text-sm text-gray-500">Latest updates across the platform</p>
      </div>
      <div className="space-y-4">
        {activities.map((activity, index) => {
          const Icon = activity.icon;
          return (
            <div key={index} className="flex items-start gap-4">
              <div
                className={`w-10 h-10 ${activity.iconBgColor} rounded-lg flex items-center justify-center flex-shrink-0`}
              >
                <Icon className={`w-5 h-5 ${activity.iconColor}`} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {activity.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

