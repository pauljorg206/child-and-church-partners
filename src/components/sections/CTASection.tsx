import Link from "next/link";

interface CTASectionProps {
  title: string;
  description?: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  background?: "blue" | "gold" | "dark";
}

export default function CTASection({
  title,
  description,
  primaryCta,
  secondaryCta,
  background = "blue",
}: CTASectionProps) {
  const bgClasses = {
    blue: "bg-primary-blue",
    gold: "bg-accent-gold",
    dark: "bg-gray-900",
  };

  const textColor = background === "gold" ? "text-gray-900" : "text-white";
  const subtextColor =
    background === "gold" ? "text-gray-700" : "text-gray-200";

  return (
    <section className={`section-padding ${bgClasses[background]}`}>
      <div className="container-site text-center">
        <h2 className={`mb-4 text-3xl font-bold sm:text-4xl ${textColor}`}>
          {title}
        </h2>

        {description && (
          <p className={`mx-auto mb-8 max-w-2xl text-lg ${subtextColor}`}>
            {description}
          </p>
        )}

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href={primaryCta.href}
            className={`btn text-lg ${
              background === "gold"
                ? "bg-gray-900 text-white hover:bg-gray-800"
                : "bg-accent-gold text-gray-900 hover:bg-accent-gold-light"
            }`}
          >
            {primaryCta.label}
          </Link>

          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className={`btn border-2 text-lg ${
                background === "gold"
                  ? "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                  : "border-white text-white hover:bg-white hover:text-gray-900"
              }`}
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
