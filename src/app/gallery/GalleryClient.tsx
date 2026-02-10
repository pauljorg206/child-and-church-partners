"use client";

import { useState, useMemo, useEffect, useRef, useCallback } from "react";
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
  const lightboxRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

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

  const goNext = useCallback(() => {
    setSelectedImage((prev) =>
      prev !== null ? (prev < visibleImages.length - 1 ? prev + 1 : 0) : null
    );
  }, []);

  const goPrev = useCallback(() => {
    setSelectedImage((prev) =>
      prev !== null ? (prev > 0 ? prev - 1 : visibleImages.length - 1) : null
    );
  }, []);

  // Focus management for lightbox
  useEffect(() => {
    if (selectedImage !== null) {
      triggerRef.current = document.activeElement as HTMLElement;
      lightboxRef.current?.focus();
    } else {
      triggerRef.current?.focus();
    }
  }, [selectedImage !== null]);

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
            <button
              type="button"
              key={`${image.src}-${index}`}
              className="group relative aspect-square overflow-hidden rounded-xl focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2"
              onClick={() => setSelectedImage(index)}
              aria-label={`View ${image.caption || image.alt}`}
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
            </button>
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
          ref={lightboxRef}
          role="dialog"
          aria-modal="true"
          aria-label={`Image ${selectedImage + 1} of ${visibleImages.length}: ${visibleImages[selectedImage].caption}`}
          tabIndex={-1}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 outline-none"
          onClick={() => setSelectedImage(null)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setSelectedImage(null);
            if (e.key === "ArrowRight") goNext();
            if (e.key === "ArrowLeft") goPrev();
          }}
        >
          <button
            className="absolute right-4 top-4 z-10 text-4xl text-white hover:text-gray-300 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            &times;
          </button>

          {/* Previous Button */}
          <button
            className="absolute left-4 z-10 rounded-full p-2 text-6xl text-white hover:text-gray-300 focus-visible:ring-2 focus-visible:ring-white"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
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
            className="absolute right-4 z-10 mr-8 rounded-full p-2 text-6xl text-white hover:text-gray-300 focus-visible:ring-2 focus-visible:ring-white"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
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
