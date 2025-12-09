"use client";

interface GreetingSectionProps {
  name?: string;
  greeting?: string;
}

export default function GreetingSection({
  name = "Andrew",
  greeting = "Good Morning",
}: GreetingSectionProps) {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">
        {greeting}, {name}
      </h1>
      <p className="text-gray-600">Welcome back! Here&apos;s what&apos;s happening today.</p>
    </div>
  );
}

