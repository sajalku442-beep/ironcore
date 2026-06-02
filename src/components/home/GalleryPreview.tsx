import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Eye } from "lucide-react";
import { galleryItems } from "../../data/gallery";
import { SectionHeading } from "../shared/SectionHeading";
import { AnimatedSection } from "../shared/AnimatedSection";
import { CTAButton } from "../shared/CTAButton";

export const GalleryPreview: React.FC = () => {
  // Show first 4 standard gallery items in preview
  const previewItems = galleryItems.slice(0, 4);

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Title structure */}
        <SectionHeading
          badge="Gym Tour"
          title="Inside Our World-Class"
          accentTitle="Facility Hub"
          subtitle="A quick curated sneak-peek of our pristine heavy lift zones, eco cardio decks, and luxury recovery cold plunge features."
        />

        {/* Gallery Grid */}
        <AnimatedSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewItems.map((item) => (
            <div
              key={item.id}
              className="relative aspect-square rounded-3xl overflow-hidden group shadow-md"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Overlaid details on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-5">
                <span className="text-[10px] uppercase font-black text-amber-500 tracking-wider">
                  {item.category}
                </span>
                <h4 className="text-white font-black text-lg mt-1 uppercase tracking-tight leading-tight">
                  {item.title}
                </h4>
                <p className="text-slate-300 text-xs mt-2 font-medium line-clamp-2">
                  {item.description}
                </p>
                <Link
                  to="/gallery"
                  className="mt-4 inline-flex items-center gap-1.5 font-bold text-xs text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
                >
                  <Eye size={14} />
                  <span>Interactive Zoom View</span>
                </Link>
              </div>
            </div>
          ))}
        </AnimatedSection>

        {/* View Full Gallery Trigger button */}
        <div className="text-center mt-12">
          <CTAButton to="/gallery" variant="amber" className="gap-2 px-8 py-4">
            <span>Explore Entire Facility Tour</span>
            <ArrowRight size={16} />
          </CTAButton>
        </div>

      </div>
    </section>
  );
};
export default GalleryPreview;
