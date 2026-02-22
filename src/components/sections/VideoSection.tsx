interface VideoSectionProps {
  title: string;
  description?: string;
  videoId: string;
  quote?: {
    text: string;
    author: string;
    title?: string;
  };
}

export default function VideoSection({
  title,
  description,
  videoId,
  quote,
}: VideoSectionProps) {
  return (
    <section className="section-padding bg-neutral-off-white">
      <div className="container-site">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              {description}
            </p>
          )}
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="aspect-video overflow-hidden rounded-2xl shadow-xl">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="h-full w-full"
            />
          </div>

          {/* Quote */}
          {quote && (
            <div className="flex flex-col justify-center">
              <blockquote className="text-xl italic leading-relaxed text-gray-700 sm:text-2xl">
                &ldquo;{quote.text}&rdquo;
              </blockquote>
              <div className="mt-6">
                <div className="font-semibold text-gray-900">
                  {quote.author}
                </div>
                {quote.title && (
                  <div className="text-gray-600">{quote.title}</div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
