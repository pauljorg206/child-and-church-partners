import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  variant?: "default" | "simple" | "centered";
  overlayOpacity?: number;
}

export default function Hero({
  title,
  subtitle,
  backgroundImage,
  primaryCta,
  secondaryCta,
  variant = "default",
  overlayOpacity = 0.5,
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        variant === "simple" ? "py-16 sm:py-20" : "py-24 sm:py-32 lg:py-40"
      )}
    >
      {/* Background Image */}
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0 bg-gray-900"
            style={{ opacity: overlayOpacity }}
          />
        </>
      )}

      {/* Fallback gradient background */}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-blue to-blue-900" />
      )}

      {/* Content */}
      <div className="container-site relative z-10">
        <div
          className={cn(
            "max-w-4xl",
            variant === "centered" && "mx-auto text-center"
          )}
        >
          <h1
            className={cn(
              "text-balance font-bold text-white",
              variant === "simple"
                ? "text-3xl sm:text-4xl lg:text-5xl"
                : "text-4xl sm:text-5xl lg:text-6xl"
            )}
          >
            {title}
          </h1>

          {subtitle && (
            <p
              className={cn(
                "mt-6 max-w-2xl text-lg text-gray-200 sm:text-xl",
                variant === "centered" && "mx-auto"
              )}
            >
              {subtitle}
            </p>
          )}

          {(primaryCta || secondaryCta) && (
            <div
              className={cn(
                "mt-10 flex flex-wrap gap-4",
                variant === "centered" && "justify-center"
              )}
            >
              {primaryCta && (
                <Link href={primaryCta.href} className="btn-primary text-lg">
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="btn border-2 border-white text-lg text-white hover:bg-white hover:text-gray-900"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
