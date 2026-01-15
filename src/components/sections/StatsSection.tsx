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
          <div className="text-center mb-12 sm:mb-16">
            {title && (
              <h2
                className={`text-3xl sm:text-4xl font-bold mb-4 ${
                  background === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className={`text-lg max-w-2xl mx-auto ${
                  background === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
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
