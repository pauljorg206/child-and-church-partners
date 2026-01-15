import { Skeleton, SkeletonGalleryGrid } from "@/components/ui/Skeleton";

export default function GalleryLoading() {
  return (
    <div aria-label="Loading gallery" role="status">
      {/* Hero Section Skeleton */}
      <section className="bg-primary-blue py-16 text-white">
        <div className="container-site">
          <Skeleton className="mx-auto h-12 w-64 bg-white/20" />
          <Skeleton className="mx-auto mt-4 h-6 w-96 bg-white/20" />
        </div>
      </section>

      {/* Filter Section Skeleton */}
      <section className="border-b py-6">
        <div className="container-site">
          <div className="flex flex-wrap justify-center gap-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-10 w-24 rounded-full" />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid Skeleton */}
      <section className="py-12">
        <div className="container-site">
          <SkeletonGalleryGrid count={12} />
        </div>
      </section>

      <span className="sr-only">Loading gallery images...</span>
    </div>
  );
}
