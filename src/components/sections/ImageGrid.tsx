import Image from "next/image";

interface ImageGridProps {
  images: {
    src: string;
    alt: string;
  }[];
  columns?: 2 | 3 | 4;
  className?: string;
  rounded?: boolean;
}

export default function ImageGrid({
  images,
  columns = 3,
  className = "",
  rounded = true,
}: ImageGridProps) {
  const gridCols = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid gap-4 ${gridCols[columns]} ${className}`}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`relative aspect-[4/3] overflow-hidden ${rounded ? "rounded-xl" : ""}`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            sizes={`(max-width: 640px) 100vw, (max-width: 1024px) 50vw, ${100 / columns}vw`}
          />
        </div>
      ))}
    </div>
  );
}
