import {
  SkeletonHero,
  SkeletonCard,
  SkeletonText,
} from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <div aria-label="Loading page content" role="status">
      <SkeletonHero />

      {/* Stats Section Skeleton */}
      <section className="bg-primary-blue py-16">
        <div className="container-site">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="text-center" aria-hidden="true">
                <div className="mx-auto h-16 w-24 animate-pulse rounded bg-white/20" />
                <div className="mx-auto mt-4 h-4 w-20 animate-pulse rounded bg-white/20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section Skeleton */}
      <section className="py-20">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto h-10 w-64 animate-pulse rounded bg-gray-200" />
            <div className="mx-auto mt-4 space-y-2">
              <SkeletonText lines={2} />
            </div>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </div>
      </section>

      <span className="sr-only">Loading...</span>
    </div>
  );
}
