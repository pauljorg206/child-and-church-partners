import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-gray-200", className)}
      aria-hidden="true"
    />
  );
}

export function SkeletonText({
  lines = 3,
  className,
}: {
  lines?: number;
  className?: string;
}) {
  return (
    <div className={cn("space-y-2", className)} aria-hidden="true">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn("h-4", i === lines - 1 ? "w-3/4" : "w-full")}
        />
      ))}
    </div>
  );
}

export function SkeletonCard({ className }: { className?: string }) {
  return (
    <div
      className={cn("overflow-hidden rounded-xl bg-white shadow-md", className)}
      aria-hidden="true"
    >
      <Skeleton className="aspect-video w-full rounded-none" />
      <div className="space-y-3 p-6">
        <Skeleton className="h-6 w-3/4" />
        <SkeletonText lines={2} />
      </div>
    </div>
  );
}

export function SkeletonImage({ className }: { className?: string }) {
  return (
    <Skeleton
      className={cn("aspect-square w-full", className)}
      aria-hidden="true"
    />
  );
}

export function SkeletonButton({ className }: { className?: string }) {
  return <Skeleton className={cn("h-12 w-32 rounded-full", className)} />;
}

export function SkeletonAvatar({
  size = "md",
  className,
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-12 w-12",
    lg: "h-16 w-16",
  };

  return (
    <Skeleton
      className={cn("rounded-full", sizeClasses[size], className)}
      aria-hidden="true"
    />
  );
}

export function SkeletonHero() {
  return (
    <div className="relative min-h-[600px] bg-gray-100" aria-hidden="true">
      <div className="container-site flex min-h-[600px] items-center py-20">
        <div className="max-w-2xl space-y-6">
          <Skeleton className="h-14 w-3/4" />
          <Skeleton className="h-14 w-1/2" />
          <SkeletonText lines={3} className="max-w-lg" />
          <div className="flex gap-4 pt-4">
            <SkeletonButton />
            <SkeletonButton className="w-40" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function SkeletonGalleryGrid({ count = 12 }: { count?: number }) {
  return (
    <div
      className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
      aria-hidden="true"
    >
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonImage key={i} className="rounded-lg" />
      ))}
    </div>
  );
}

export function SkeletonFAQ({ count = 5 }: { count?: number }) {
  return (
    <div className="space-y-4" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-5 w-5 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
}
