import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Testimonial } from "../../data/testimonials";

interface CarouselProps {
  id?: string;
  items: Testimonial[];
  autoPlayInterval?: number; // millisecond intervals
}

export const Carousel: React.FC<CarouselProps> = ({
  id,
  items,
  autoPlayInterval = 6000,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const length = items.length;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  // Setup auto-play
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(nextSlide, autoPlayInterval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeIndex, isPaused, autoPlayInterval]);

  if (!items || length === 0) return null;

  return (
    <div
      id={id}
      className="relative max-w-4xl mx-auto px-4 md:px-12 py-8 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Testimonial Active Slide View */}
      <div className="relative overflow-hidden min-h-[400px] md:min-h-[460px] flex items-center justify-center">
        {items.map((item, index) => {
          const isActive = index === activeIndex; 
          return (
            <div
              key={item.id}
              className={`absolute w-full transition-all duration-700 ease-in-out transform flex flex-col items-center text-center ${
                isActive
                  ? "opacity-100 translate-x-0 pointer-events-auto"
                  : "opacity-0 translate-x-12 pointer-events-none" 
              }`}
            >
              {/* Profile Photo */}
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-amber-400 shadow-md mb-4 bg-slate-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 justify-center mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={`${
                      i < item.rating
                        ? "fill-amber-400 text-amber-400"
                        : "text-slate-200"
                    }`}
                  />
                ))}
              </div>

              {/* Testimonial Quote */}
              <p className="text-lg md:text-2xl font-medium text-slate-700 italic max-w-3xl leading-relaxed mb-6 px-4">
                "{item.quote}"
              </p>

              {/* Name & Role */}
              <div>
                <h4 className="font-bold text-slate-900 text-lg">{item.name}</h4>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">
                  {item.role}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Slide Controllers */}

      {/* Arrow left */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-slate-900 shadow-sm hover:shadow-md transition-all cursor-pointer outline-none focus:ring-1 focus:ring-amber-500"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Arrow right */}
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-slate-900 shadow-sm hover:shadow-md transition-all cursor-pointer outline-none focus:ring-1 focus:ring-amber-500"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots navigation */}
      <div className="flex justify-center gap-2 mt-8">
        {items.map((_, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2.5 rounded-full transition-all cursor-pointer outline-none ${
                isActive ? "w-8 bg-amber-500" : "w-2.5 bg-slate-200 hover:bg-slate-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
};
