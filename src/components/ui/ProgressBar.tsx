"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  current: number;
  goal: number;
  label?: string;
  showAmount?: boolean;
  variant?: "default" | "gold" | "blue";
  animate?: boolean;
  className?: string;
}

export default function ProgressBar({
  current,
  goal,
  label,
  showAmount = true,
  variant = "default",
  animate = true,
  className,
}: ProgressBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const percentage = Math.min((current / goal) * 100, 100);

  // Intersection Observer for animation
  useEffect(() => {
    if (!animate) {
      setAnimatedProgress(percentage);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [animate, percentage]);

  // Animate progress on visibility
  useEffect(() => {
    if (!isVisible) return;

    const duration = 1500; // ms
    const startTime = Date.now();
    const startValue = 0;
    const endValue = percentage;

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out-cubic)
      const eased = 1 - Math.pow(1 - progress, 3);

      setAnimatedProgress(startValue + (endValue - startValue) * eased);

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [isVisible, percentage]);

  const variantClasses = {
    default: "bg-green-500",
    gold: "bg-accent-gold",
    blue: "bg-primary-blue",
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div ref={ref} className={cn("w-full", className)}>
      {(label || showAmount) && (
        <div className="mb-2 flex items-end justify-between">
          {label && (
            <span className="text-sm font-medium text-gray-700">{label}</span>
          )}
          {showAmount && (
            <span className="text-sm text-gray-500">
              {formatCurrency(current)} / {formatCurrency(goal)}
            </span>
          )}
        </div>
      )}

      <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">
        <div
          className={cn(
            "h-full rounded-full transition-all duration-1000 ease-out",
            variantClasses[variant]
          )}
          style={{ width: `${animatedProgress}%` }}
          role="progressbar"
          aria-valuenow={current}
          aria-valuemin={0}
          aria-valuemax={goal}
          aria-label={label || "Progress"}
        />
      </div>

      <div className="mt-1 flex justify-end">
        <span className="text-xs font-medium text-gray-500">
          {animatedProgress.toFixed(0)}%
        </span>
      </div>
    </div>
  );
}
