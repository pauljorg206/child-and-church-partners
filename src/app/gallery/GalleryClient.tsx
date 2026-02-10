"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import {
  galleryImages,
  categories,
  categoryCounts,
  type GalleryImage,
} from "./gallery-data";

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(24);

  const filteredImages = useMemo(() => {
    return activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  const visibleImages = filteredImages.slice(0, visibleCount);
  const hasMore = visibleCount < filteredImages.length;

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 24, filteredImages.length));
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setVisibleCount(24);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-site">
        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`rounded-full px-4 py-2 font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary-blue text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
              <span className="ml-1 text-sm opacity-75">
                ({categoryCounts[category] || 0})
              </span>
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="mb-8 text-center text-gray-600">
          Showing {visibleImages.length} of {filteredImages.length} photos
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {visibleImages.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/40">
                <div className="p-4 text-center text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {image.caption}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-gray-600">No photos found in this category.</p>
          </div>
        )}

        {/* Load More */}
        {hasMore && (
          <div className="mt-12 text-center">
            <button onClick={loadMore} className="btn-primary">
              Load More Photos
            </button>
            <p className="mt-2 text-sm text-gray-500">
              {filteredImages.length - visibleCount} more photos available
            </p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute right-4 top-4 z-10 text-4xl text-white hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            &times;
          </button>

          {/* Previous Button */}
          <button
            className="absolute left-4 z-10 hidden text-6xl text-white hover:text-gray-300 md:block"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(
                selectedImage > 0 ? selectedImage - 1 : visibleImages.length - 1
              );
            }}
            aria-label="Previous image"
          >
            &lsaquo;
          </button>

          {/* Image */}
          <div
            className="relative h-full max-h-[80vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={visibleImages[selectedImage].src}
              alt={visibleImages[selectedImage].alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          {/* Next Button */}
          <button
            className="absolute right-4 z-10 mr-8 hidden text-6xl text-white hover:text-gray-300 md:block"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(
                selectedImage < visibleImages.length - 1 ? selectedImage + 1 : 0
              );
            }}
            aria-label="Next image"
          >
            &rsaquo;
          </button>

          {/* Caption */}
          <div className="absolute bottom-4 left-0 right-0 text-center text-white">
            <p className="text-lg">{visibleImages[selectedImage].caption}</p>
            <p className="mt-1 text-sm text-gray-400">
              {selectedImage + 1} of {visibleImages.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
