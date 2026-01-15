import Link from "next/link";
import Image from "next/image";

interface ProgramCardProps {
  title: string;
  description?: string;
  amount?: string;
  bulletPoints?: string[];
  image?: string;
  ctaLabel: string;
  ctaHref: string;
  variant?: "default" | "featured";
}

export default function ProgramCard({
  title,
  description,
  amount,
  bulletPoints,
  image,
  ctaLabel,
  ctaHref,
  variant = "default",
}: ProgramCardProps) {
  return (
    <div
      className={`rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl ${
        variant === "featured"
          ? "bg-primary-blue text-white"
          : "bg-white border border-gray-200"
      }`}
    >
      {image && (
        <div className="relative h-48 sm:h-56">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      )}

      <div className="p-6 sm:p-8">
        <h3
          className={`text-xl sm:text-2xl font-bold mb-2 ${
            variant === "featured" ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </h3>

        {amount && (
          <div
            className={`text-3xl font-bold mb-4 ${
              variant === "featured" ? "text-accent-gold" : "text-accent-gold"
            }`}
          >
            {amount}
          </div>
        )}

        {description && (
          <p
            className={`mb-4 ${
              variant === "featured" ? "text-gray-200" : "text-gray-600"
            }`}
          >
            {description}
          </p>
        )}

        {bulletPoints && bulletPoints.length > 0 && (
          <ul className="space-y-2 mb-6">
            {bulletPoints.map((point, index) => (
              <li
                key={index}
                className={`flex items-start gap-2 ${
                  variant === "featured" ? "text-gray-200" : "text-gray-600"
                }`}
              >
                <svg
                  className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                    variant === "featured"
                      ? "text-accent-gold"
                      : "text-accent-gold"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}

        <Link
          href={ctaHref}
          className={`inline-block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all ${
            variant === "featured"
              ? "bg-accent-gold text-gray-900 hover:bg-accent-gold-light"
              : "bg-primary-blue text-white hover:bg-blue-700"
          }`}
        >
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}
