import { useState, useCallback } from "react";

interface CarouselSlide {
  image: string;
  alt: string;
  caption: string;
  blurb: string;
}

interface CarouselProps {
  slides: CarouselSlide[];
  className?: string;
}

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {direction === "left" ? (
        <path d="M12 4l-6 6 6 6" />
      ) : (
        <path d="M8 4l6 6-6 6" />
      )}
    </svg>
  );
}

export function Carousel({ slides, className = "" }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(
    () => setCurrent((i) => (i === 0 ? slides.length - 1 : i - 1)),
    [slides.length]
  );

  const next = useCallback(
    () => setCurrent((i) => (i === slides.length - 1 ? 0 : i + 1)),
    [slides.length]
  );

  const slide = slides[current];

  return (
    <div className={`flex flex-col gap-6 ${className}`}>
      {/* Image area */}
      <div className="relative border border-border rounded-lg overflow-hidden bg-black/5">
        <div className="flex items-center justify-center min-h-[320px] md:min-h-[480px]">
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-auto max-h-[600px] object-contain"
          />
        </div>

        {/* Prev / Next buttons */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-bg/80 backdrop-blur border border-border text-text-muted transition-colors hover:bg-bg hover:text-text cursor-pointer"
        >
          <ArrowIcon direction="left" />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-bg/80 backdrop-blur border border-border text-text-muted transition-colors hover:bg-bg hover:text-text cursor-pointer"
        >
          <ArrowIcon direction="right" />
        </button>
      </div>

      {/* Caption + blurb */}
      <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{slide.caption}</h3>
          <p className="mt-1 text-sm leading-relaxed text-text-muted">
            {slide.blurb}
          </p>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center gap-2 md:pt-1">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                i === current
                  ? "w-6 bg-accent"
                  : "w-2 bg-border hover:bg-text-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
