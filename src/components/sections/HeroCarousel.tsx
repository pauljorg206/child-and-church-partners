"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

interface HeroCarouselProps {
  title: string;
  subtitle?: string;
  backgroundImages: string[];
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  variant?: "default" | "centered";
  overlayOpacity?: number;
  carouselInterval?: number;
}

export default function HeroCarousel({
  title,
  subtitle,
  backgroundImages,
  primaryCta,
  secondaryCta,
  variant = "default",
  overlayOpacity = 0.5,
  carouselInterval = 5000,
}: HeroCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (backgroundImages.length <= 1) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, carouselInterval);

    return () => clearInterval(interval);
  }, [backgroundImages.length, carouselInterval]);

  return (
    <section
      className={cn("relative overflow-hidden", "py-24 sm:py-32 lg:py-40")}
    >
      {backgroundImages.map((img, index) => (
        <Image
          key={img}
          src={img}
          alt=""
          fill
          className={cn(
            "object-cover transition-opacity duration-1000",
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          )}
          priority={index === 0}
        />
      ))}
      <div
        className="absolute inset-0 bg-gray-900"
        style={{ opacity: overlayOpacity }}
      />

      <div className="container-site relative z-10">
        <div
          className={cn(
            "max-w-4xl",
            variant === "centered" && "mx-auto text-center"
          )}
        >
          <h1 className="text-balance text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
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
