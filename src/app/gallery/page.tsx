"use client";

import Hero from "@/components/sections/Hero";
import { useState, useMemo } from "react";
import Image from "next/image";

const categories = [
  "All",
  "Children",
  "Youth",
  "Churches",
  "Feeding Program",
  "Community",
];

// Image filename prefixes mapped to categories
const categoryMapping: Record<string, string> = {
  "sponsored-child": "Children",
  "child-education": "Children",
  "child-sponsorship": "Children",
  "children-learning": "Children",
  "filipino-children": "Children",
  "youth-camp": "Youth",
  "youth-leadership": "Youth",
  "youth-ministry": "Youth",
  "filipino-youth": "Youth",
  "church-worship": "Churches",
  "church-service": "Churches",
  "pastor-training": "Churches",
  "bible-study": "Churches",
  "feeding-program": "Feeding Program",
  "feeding-ministry": "Feeding Program",
  "children-nutrition": "Feeding Program",
  "meal-program": "Feeding Program",
  "community-outreach": "Community",
  "church-community": "Community",
  "volunteer-ministry": "Community",
  "christian-outreach": "Community",
  "mission-work": "Community",
  "ministry-philippines": "Community",
  "nonprofit-ministry": "Community",
  "child-church-partners": "Community",
};

// Generate human-readable caption from filename
function generateCaption(filename: string): string {
  const name = filename.replace(/\.[^/.]+$/, ""); // Remove extension
  const withoutNumber = name.replace(/-\d+$/, ""); // Remove trailing number
  return withoutNumber
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Generate SEO-friendly alt text from filename
function generateAltText(filename: string): string {
  const caption = generateCaption(filename);
  return `${caption} - Filipino non-profit Child & Church Partners International`;
}

// Get category from filename
function getCategory(filename: string): string {
  for (const [prefix, category] of Object.entries(categoryMapping)) {
    if (filename.startsWith(prefix)) {
      return category;
    }
  }
  return "Community";
}

// All gallery images from the photo-gallery folder
const galleryImages = [
  // Children
  "sponsored-child-philippines-001.jpg",
  "sponsored-child-philippines-002.jpg",
  "sponsored-child-philippines-003.jpg",
  "sponsored-child-philippines-004.jpg",
  "sponsored-child-philippines-005.jpeg",
  "sponsored-child-philippines-006.jpeg",
  "sponsored-child-philippines-007.jpg",
  "sponsored-child-philippines-008.jpeg",
  "sponsored-child-philippines-009.jpg",
  "sponsored-child-philippines-010.jpg",
  "child-education-support-001.jpg",
  "child-education-support-002.jpeg",
  "child-education-support-003.jpg",
  "child-education-support-004.jpeg",
  "child-education-support-005.jpg",
  "child-education-support-006.jpg",
  "child-education-support-007.jpg",
  "child-education-support-008.jpg",
  "child-education-support-009.jpg",
  "child-education-support-010.jpg",
  "child-sponsorship-program-001.jpeg",
  "child-sponsorship-program-002.jpg",
  "child-sponsorship-program-003.jpeg",
  "child-sponsorship-program-004.jpeg",
  "child-sponsorship-program-005.jpg",
  "child-sponsorship-program-006.jpeg",
  "child-sponsorship-program-007.jpeg",
  "child-sponsorship-program-008.jpeg",
  "child-sponsorship-program-009.jpeg",
  "children-learning-philippines-001.jpg",
  "children-learning-philippines-002.jpg",
  "children-learning-philippines-003.jpeg",
  "children-learning-philippines-004.jpg",
  "children-learning-philippines-005.jpeg",
  "children-learning-philippines-006.jpeg",
  "children-learning-philippines-007.jpg",
  "children-learning-philippines-008.jpeg",
  "children-learning-philippines-009.jpeg",
  "filipino-children-ministry-001.jpg",
  "filipino-children-ministry-002.jpeg",
  "filipino-children-ministry-003.jpeg",
  "filipino-children-ministry-004.jpg",
  "filipino-children-ministry-005.jpeg",
  "filipino-children-ministry-006.jpg",
  "filipino-children-ministry-007.jpg",
  "filipino-children-ministry-008.jpeg",
  "filipino-children-ministry-009.jpeg",
  // Youth
  "youth-camp-philippines-001.jpeg",
  "youth-camp-philippines-002.jpg",
  "youth-camp-philippines-003.jpeg",
  "youth-camp-philippines-004.jpg",
  "youth-camp-philippines-005.jpg",
  "youth-camp-philippines-006.jpg",
  "youth-camp-philippines-007.jpeg",
  "youth-camp-philippines-008.jpeg",
  "youth-camp-philippines-009.jpg",
  "youth-leadership-training-001.jpeg",
  "youth-leadership-training-002.jpg",
  "youth-leadership-training-003.jpeg",
  "youth-leadership-training-004.jpeg",
  "youth-leadership-training-005.jpeg",
  "youth-leadership-training-006.jpg",
  "youth-leadership-training-007.jpg",
  "youth-leadership-training-008.jpeg",
  "youth-leadership-training-009.jpg",
  "youth-ministry-worship-001.jpeg",
  "youth-ministry-worship-002.jpg",
  "youth-ministry-worship-003.jpg",
  "youth-ministry-worship-004.jpg",
  "youth-ministry-worship-005.jpeg",
  "youth-ministry-worship-006.jpg",
  "youth-ministry-worship-007.jpg",
  "youth-ministry-worship-008.jpg",
  "youth-ministry-worship-009.jpeg",
  "filipino-youth-gathering-001.jpg",
  "filipino-youth-gathering-002.jpg",
  "filipino-youth-gathering-003.jpeg",
  "filipino-youth-gathering-004.jpg",
  "filipino-youth-gathering-005.jpg",
  "filipino-youth-gathering-006.jpg",
  "filipino-youth-gathering-007.jpg",
  "filipino-youth-gathering-008.jpeg",
  "filipino-youth-gathering-009.jpg",
  // Churches
  "church-worship-philippines-001.jpg",
  "church-worship-philippines-002.jpeg",
  "church-worship-philippines-003.jpeg",
  "church-worship-philippines-004.jpg",
  "church-worship-philippines-005.jpg",
  "church-worship-philippines-006.jpeg",
  "church-worship-philippines-007.jpeg",
  "church-worship-philippines-008.jpeg",
  "church-worship-philippines-009.jpg",
  "church-service-philippines-001.jpeg",
  "church-service-philippines-002.jpg",
  "church-service-philippines-003.jpeg",
  "church-service-philippines-004.jpeg",
  "church-service-philippines-005.jpg",
  "church-service-philippines-006.jpeg",
  "church-service-philippines-007.jpeg",
  "church-service-philippines-008.jpeg",
  "church-service-philippines-009.jpg",
  "pastor-training-philippines-001.jpg",
  "pastor-training-philippines-002.jpg",
  "pastor-training-philippines-003.jpeg",
  "pastor-training-philippines-004.jpg",
  "pastor-training-philippines-005.jpg",
  "pastor-training-philippines-006.jpg",
  "pastor-training-philippines-007.jpg",
  "pastor-training-philippines-008.jpeg",
  "pastor-training-philippines-009.jpeg",
  "bible-study-fellowship-001.jpeg",
  "bible-study-fellowship-002.jpeg",
  "bible-study-fellowship-003.jpeg",
  "bible-study-fellowship-004.jpeg",
  "bible-study-fellowship-005.jpg",
  "bible-study-fellowship-006.jpeg",
  "bible-study-fellowship-007.jpg",
  "bible-study-fellowship-008.jpeg",
  "bible-study-fellowship-009.jpg",
  // Feeding Program
  "feeding-program-philippines-001.jpeg",
  "feeding-program-philippines-002.jpeg",
  "feeding-program-philippines-003.jpg",
  "feeding-program-philippines-004.jpg",
  "feeding-program-philippines-005.png",
  "feeding-program-philippines-006.png",
  "feeding-program-philippines-007.jpg",
  "feeding-program-philippines-008.jpg",
  "feeding-program-philippines-009.jpg",
  "feeding-ministry-children-001.jpg",
  "feeding-ministry-children-002.jpeg",
  "feeding-ministry-children-003.jpeg",
  "feeding-ministry-children-004.jpg",
  "feeding-ministry-children-005.jpg",
  "feeding-ministry-children-006.jpg",
  "feeding-ministry-children-007.jpg",
  "feeding-ministry-children-008.jpeg",
  "feeding-ministry-children-009.jpeg",
  "children-nutrition-outreach-001.jpeg",
  "children-nutrition-outreach-002.jpg",
  "children-nutrition-outreach-003.jpeg",
  "children-nutrition-outreach-004.jpg",
  "children-nutrition-outreach-005.jpeg",
  "children-nutrition-outreach-006.jpg",
  "children-nutrition-outreach-007.jpg",
  "children-nutrition-outreach-008.jpg",
  "children-nutrition-outreach-009.jpeg",
  "meal-program-filipinos-001.jpeg",
  "meal-program-filipinos-002.jpeg",
  "meal-program-filipinos-003.jpeg",
  "meal-program-filipinos-004.jpg",
  "meal-program-filipinos-005.jpg",
  "meal-program-filipinos-006.jpg",
  "meal-program-filipinos-007.jpg",
  "meal-program-filipinos-008.jpeg",
  "meal-program-filipinos-009.jpeg",
  // Community
  "community-outreach-event-001.png",
  "community-outreach-event-002.png",
  "community-outreach-event-003.jpeg",
  "community-outreach-event-004.jpg",
  "community-outreach-event-005.jpeg",
  "community-outreach-event-006.jpeg",
  "community-outreach-event-007.jpg",
  "community-outreach-event-008.jpg",
  "community-outreach-event-009.jpg",
  "church-community-outreach-001.jpeg",
  "church-community-outreach-002.jpg",
  "church-community-outreach-003.jpg",
  "church-community-outreach-004.jpg",
  "church-community-outreach-005.jpeg",
  "church-community-outreach-006.jpeg",
  "church-community-outreach-007.jpeg",
  "church-community-outreach-008.jpeg",
  "church-community-outreach-009.jpeg",
  "church-community-service-001.jpeg",
  "church-community-service-002.jpeg",
  "church-community-service-003.jpg",
  "church-community-service-004.jpeg",
  "church-community-service-005.jpg",
  "church-community-service-006.jpeg",
  "church-community-service-007.jpg",
  "church-community-service-008.jpeg",
  "church-community-service-009.jpg",
  "volunteer-ministry-philippines-001.jpeg",
  "volunteer-ministry-philippines-002.jpeg",
  "volunteer-ministry-philippines-003.jpg",
  "volunteer-ministry-philippines-004.jpeg",
  "volunteer-ministry-philippines-005.jpg",
  "volunteer-ministry-philippines-006.jpg",
  "volunteer-ministry-philippines-007.jpeg",
  "volunteer-ministry-philippines-008.jpg",
  "volunteer-ministry-philippines-009.jpg",
  "christian-outreach-philippines-001.jpg",
  "christian-outreach-philippines-002.jpg",
  "christian-outreach-philippines-003.jpeg",
  "christian-outreach-philippines-004.jpg",
  "christian-outreach-philippines-005.jpeg",
  "christian-outreach-philippines-006.jpeg",
  "christian-outreach-philippines-007.jpeg",
  "christian-outreach-philippines-008.jpg",
  "christian-outreach-philippines-009.jpeg",
  "mission-work-philippines-001.jpeg",
  "mission-work-philippines-002.png",
  "mission-work-philippines-003.jpeg",
  "mission-work-philippines-004.jpg",
  "mission-work-philippines-005.jpg",
  "mission-work-philippines-006.jpeg",
  "mission-work-philippines-007.jpeg",
  "mission-work-philippines-008.jpeg",
  "mission-work-philippines-009.jpeg",
  "ministry-philippines-ccpi-001.jpg",
  "ministry-philippines-ccpi-002.jpg",
  "ministry-philippines-ccpi-003.jpg",
  "ministry-philippines-ccpi-004.jpg",
  "ministry-philippines-ccpi-005.jpeg",
  "ministry-philippines-ccpi-006.jpeg",
  "ministry-philippines-ccpi-007.jpg",
  "ministry-philippines-ccpi-008.jpeg",
  "ministry-philippines-ccpi-009.jpg",
  "nonprofit-ministry-philippines-001.jpg",
  "nonprofit-ministry-philippines-002.jpg",
  "nonprofit-ministry-philippines-003.jpg",
  "nonprofit-ministry-philippines-004.jpeg",
  "nonprofit-ministry-philippines-005.jpg",
  "nonprofit-ministry-philippines-006.jpeg",
  "nonprofit-ministry-philippines-007.jpg",
  "nonprofit-ministry-philippines-008.jpeg",
  "nonprofit-ministry-philippines-009.jpg",
  "child-church-partners-ministry-001.jpg",
  "child-church-partners-ministry-002.jpg",
  "child-church-partners-ministry-003.jpeg",
  "child-church-partners-ministry-004.jpeg",
  "child-church-partners-ministry-005.jpeg",
  "child-church-partners-ministry-006.jpeg",
  "child-church-partners-ministry-007.jpg",
  "child-church-partners-ministry-008.jpeg",
  "child-church-partners-ministry-009.jpg",
].map((filename) => ({
  src: `/images/photo-gallery/${filename}`,
  alt: generateAltText(filename),
  category: getCategory(filename),
  caption: generateCaption(filename),
}));

// Insert the CCPI logo in the middle of the gallery
const logoImage = {
  src: "/images/Child & Church Partners LOGO TRANSPARENT.png",
  alt: "Child & Church Partners International Logo - Filipino non-profit organization helping children and churches in the Philippines",
  category: "All",
  caption: "Child & Church Partners International",
};

// Insert logo in the middle position
const middleIndex = Math.floor(galleryImages.length / 2);
galleryImages.splice(middleIndex, 0, logoImage);

export default function GalleryPage() {
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

  // Get counts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: galleryImages.length };
    galleryImages.forEach((img) => {
      counts[img.category] = (counts[img.category] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <>
      <Hero
        title="Photo Gallery"
        subtitle="See the impact of your generosity through these photos from the field."
        variant="simple"
      />

      {/* Gallery Section */}
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
      </section>

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
              priority
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
    </>
  );
}
