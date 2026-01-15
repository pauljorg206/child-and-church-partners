import Image from "next/image";

interface ImageStripProps {
  images: {
    src: string;
    alt: string;
  }[];
  className?: string;
}

export default function ImageStrip({
  images,
  className = "",
}: ImageStripProps) {
  return (
    <section className={`overflow-hidden ${className}`}>
      <div className="grid grid-cols-2 md:grid-cols-4">
        {images.map((image, index) => (
          <div key={index} className="relative aspect-[4/3]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
