import { Skeleton, SkeletonFAQ } from "@/components/ui/Skeleton";

export default function FAQLoading() {
  return (
    <div aria-label="Loading FAQ" role="status">
      {/* Hero Section Skeleton */}
      <section className="bg-primary-blue py-16 text-white">
        <div className="container-site">
          <Skeleton className="mx-auto h-12 w-80 bg-white/20" />
          <Skeleton className="mx-auto mt-4 h-6 w-96 bg-white/20" />
        </div>
      </section>

      {/* FAQ Content Skeleton */}
      <section className="py-16">
        <div className="container-site max-w-3xl">
          <SkeletonFAQ count={8} />
        </div>
      </section>

      <span className="sr-only">Loading frequently asked questions...</span>
    </div>
  );
}
