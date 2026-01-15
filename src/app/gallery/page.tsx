"use client";

import Hero from "@/components/sections/Hero";
import { useState } from "react";
import Image from "next/image";

const categories = [
  "All",
  "Youth Camp",
  "Children",
  "Churches",
  "Events",
  "Community",
];

// Sample gallery images - these would be populated from the actual gallery
const galleryImages = [
  {
    src: "/images/received_571220392093528.jpeg",
    alt: "Ministry outreach",
    category: "Community",
    caption: "Community outreach event",
  },
  {
    src: "/images/messenger-creation-edited.jpg",
    alt: "Church activities",
    category: "Churches",
    caption: "Church worship service",
  },
  {
    src: "/images/90f9f5_813bf9dcbcde4c47b37574ddb81bd3a7_mv2.jpg",
    alt: "Children's ministry",
    category: "Children",
    caption: "Children's ministry activities",
  },
  {
    src: "/images/90f9f5_58ed83ad40404606bd322cec60bba0da_mv2.jpeg",
    alt: "Youth camp activities",
    category: "Youth Camp",
    caption: "Youth Camp 2025",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

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
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary-blue text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-white text-sm text-center">
                    {image.caption}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">
                No photos found in this category.
              </p>
            </div>
          )}

          {/* Load More */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              More photos coming soon! We&apos;re working on adding hundreds of
              images from our ministry activities.
            </p>
            <button className="btn-outline">Load More Photos</button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>

          {/* Previous Button */}
          <button
            className="absolute left-4 text-white text-4xl hover:text-gray-300 hidden md:block"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(
                selectedImage > 0
                  ? selectedImage - 1
                  : filteredImages.length - 1
              );
            }}
          >
            &lsaquo;
          </button>

          {/* Image */}
          <div
            className="relative max-w-4xl max-h-[80vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].alt}
              fill
              className="object-contain"
            />
          </div>

          {/* Next Button */}
          <button
            className="absolute right-4 text-white text-4xl hover:text-gray-300 hidden md:block"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(
                selectedImage < filteredImages.length - 1
                  ? selectedImage + 1
                  : 0
              );
            }}
          >
            &rsaquo;
          </button>

          {/* Caption */}
          <div className="absolute bottom-4 left-0 right-0 text-center text-white">
            <p className="text-lg">
              {filteredImages[selectedImage].caption}
            </p>
            <p className="text-sm text-gray-400 mt-1">
              {selectedImage + 1} of {filteredImages.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
