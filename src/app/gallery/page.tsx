import Hero from "@/components/sections/Hero";
import GalleryClient from "./GalleryClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description:
    "See the impact of your generosity through photos from the field in the Philippines.",
};

export default function GalleryPage() {
  return (
    <>
      <Hero
        title="Photo Gallery"
        subtitle="See the impact of your generosity through these photos from the field."
        variant="simple"
      />
      <GalleryClient />
    </>
  );
}
