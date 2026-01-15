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
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Video Embed */}
          <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>

          {/* Quote */}
          {quote && (
            <div className="flex flex-col justify-center">
              <blockquote className="text-xl sm:text-2xl text-gray-700 italic leading-relaxed">
                &ldquo;{quote.text}&rdquo;
              </blockquote>
              <div className="mt-6">
                <div className="font-semibold text-gray-900">{quote.author}</div>
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
