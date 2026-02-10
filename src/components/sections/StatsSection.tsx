import StatCard from "@/components/cards/StatCard";

interface Stat {
  number: string;
  label: string;
  description?: string;
  link?: {
    label: string;
    href: string;
  };
}

interface StatsSectionProps {
  title?: string;
  subtitle?: string;
  stats: Stat[];
  background?: "white" | "off-white" | "dark";
}

export default function StatsSection({
  title,
  subtitle,
  stats,
  background = "white",
}: StatsSectionProps) {
  const bgClasses = {
    white: "bg-white",
    "off-white": "bg-neutral-off-white",
    dark: "bg-gray-900 text-white",
  };

  return (
    <section className={`section-padding ${bgClasses[background]}`}>
      <div className="container-site">
        {(title || subtitle) && (
          <div className="mb-12 text-center sm:mb-16">
            {title && (
              <h2
                className={`mb-4 text-3xl font-bold sm:text-4xl ${
                  background === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className={`mx-auto max-w-2xl text-lg ${
                  background === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div
          className={`mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-12 ${stats.length > 2 ? "max-w-none lg:grid-cols-3" : ""}`}
        >
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              label={stat.label}
              description={stat.description}
              link={stat.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
