"use client";

import ProgressBar from "@/components/ui/ProgressBar";

// Mock data for fundraising goals
// In a real application, this would come from an API or CMS
const fundraisingGoals = [
  {
    id: "school-supplies-2024",
    title: "School Supplies Drive 2024",
    description:
      "Help provide backpacks, notebooks, and supplies for 200 children this school year.",
    current: 3250,
    goal: 5000,
    variant: "blue" as const,
  },
  {
    id: "christmas-gifts",
    title: "Christmas Gift Boxes",
    description:
      "Bring joy to children with gifts, treats, and the message of hope this Christmas.",
    current: 8500,
    goal: 10000,
    variant: "gold" as const,
  },
  {
    id: "church-roof-repair",
    title: "Church Roof Repair Fund",
    description:
      "Help repair the leaking roof at one of our partner churches in Mindanao.",
    current: 2100,
    goal: 3500,
    variant: "default" as const,
  },
];

interface FundraisingGoalsProps {
  className?: string;
}

export default function FundraisingGoals({ className }: FundraisingGoalsProps) {
  return (
    <section className={className}>
      <div className="container-site">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Current Fundraising Goals
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            See how close we are to reaching our goals. Every donation brings us
            one step closer to making a difference.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {fundraisingGoals.map((goal) => (
            <div
              key={goal.id}
              className="rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {goal.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{goal.description}</p>
              <div className="mt-4">
                <ProgressBar
                  current={goal.current}
                  goal={goal.goal}
                  variant={goal.variant}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/donate"
            className="btn-primary inline-flex items-center gap-2"
          >
            Contribute Now
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
