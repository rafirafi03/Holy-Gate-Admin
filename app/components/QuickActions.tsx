"use client";

import { Video, Church, Sparkles, Hand, Bell } from "lucide-react";

interface QuickAction {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  bgColor: string;
  textColor: string;
  hoverColor: string;
}

const quickActions: QuickAction[] = [
  {
    icon: Video,
    label: "Add videos",
    bgColor: "bg-blue-600",
    textColor: "text-white",
    hoverColor: "hover:bg-blue-700",
  },
  {
    icon: Church,
    label: "Add Church",
    bgColor: "bg-blue-100",
    textColor: "text-blue-700",
    hoverColor: "hover:bg-blue-200",
  },
  {
    icon: Sparkles,
    label: "Add Miracle",
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-700",
    hoverColor: "hover:bg-yellow-200",
  },
  {
    icon: Hand,
    label: "Add Prayer",
    bgColor: "bg-green-100",
    textColor: "text-green-700",
    hoverColor: "hover:bg-green-200",
  },
  {
    icon: Bell,
    label: "Add Notification",
    bgColor: "bg-blue-100",
    textColor: "text-blue-700",
    hoverColor: "hover:bg-blue-200",
  },
];

export default function QuickActions() {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Quick Actions</h2>
          <p className="text-sm text-gray-500">Common administrative tasks</p>
        </div>
      </div>
      <div className="flex gap-4">
        {quickActions.map((action, index) => {
          const Icon = action.icon;
          return (
            <button
              key={index}
              className={`flex items-center gap-3 px-6 py-4 ${action.bgColor} ${action.textColor} rounded-lg ${action.hoverColor} transition-colors`}
            >
              <Icon className="w-5 h-5" />
              <span>{action.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

