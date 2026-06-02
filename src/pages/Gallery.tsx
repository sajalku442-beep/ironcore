import React, { useState, useEffect } from "react";
import { Maximize2, Layers, HeartPulse, Sparkles } from "lucide-react";
import { galleryItems, GalleryItem } from "../data/gallery";
import { SectionHeading } from "../components/shared/SectionHeading";
import { AnimatedSection } from "../components/shared/AnimatedSection";
import { Modal } from "../components/shared/Modal";

export const Gallery: React.FC = () => {
  const categories: ("All" | GalleryItem["category"])[] = ["All", "Facility", "Equipment", "Classes", "Recovery"];
  const [selectedCategory, setSelectedCategory] = useState<"All" | GalleryItem["category"]>("All");
  
  // Lightbox modal state
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  // Filter items matching state
  const filteredItems = selectedCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  const openLightbox = (id: string) => {
    // Determine its index inside the CURRENT filtered list
    const idx = filteredItems.findIndex((item) => item.id === id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev! - 1));
    }
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev! + 1));
    }
  };

  // Currently active item shown inside lightbox
  const activeItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div className="bg-white min-h-screen">
      
      {/* Page Header Banner */}
      <div className="relative bg-slate-900 text-white py-24 md:py-32 overflow-hidden border-b border-slate-950">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=1600"
            alt="Gallery tour background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center space-y-4">
          <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-bold rounded-full uppercase tracking-wider border border-amber-500/20">
            Interactive Tour
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
            Facility <span className="text-amber-500">Gallery</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-300 text-sm md:text-lg">
            Tap on any photo to open our high-fidelity lightbox, offering complete previous/next controls and keyboard arrows support.
          </p>
        </div>
      </div>

      {/* Gallery Main Container with filters */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Section title */}
          <SectionHeading
            badge="Virtual Sightseeing"
            title="Sights Around the Gym"
            subtitle="Explore our pristine weight cages, specialized mobility floor spaces, steam showers, and cold plunge therapy chambers."
          />

          {/* Filter Categories Menu */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold uppercase tracking-wide transition-all cursor-pointer outline-none ${
                    isActive
                      ? "bg-slate-900 text-white shadow-md shadow-slate-900/10"
                      : "bg-slate-50 text-slate-500 border border-slate-200/50 hover:bg-slate-100 hover:text-slate-800"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Dynamic Image Grid */}
          <AnimatedSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => openLightbox(item.id)}
                className="relative aspect-square rounded-3xl overflow-hidden group shadow-md hover:shadow-2xl border border-slate-100 cursor-zoom-in bg-slate-900"
              >
                {/* Photo */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:blur-[1px] select-none"
                  loading="lazy"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Hover indicator search icon */}
                <span className="absolute top-4 right-4 p-2 bg-slate-950/80 backdrop-blur-md rounded-xl text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 size={16} />
                </span>

                {/* Details layout */}
                <div className="absolute bottom-4 left-4 right-4 text-white p-2">
                  <span className="text-[10px] uppercase font-black text-amber-500 tracking-wider">
                    {item.category}
                  </span>
                  <h4 className="font-extrabold text-base uppercase leading-tight tracking-tight mt-1">
                    {item.title}
                  </h4>
                  <p className="text-slate-350 text-[11px] font-medium leading-relaxed mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeItem && (
        <Modal
          isOpen={lightboxIndex !== null}
          onClose={closeLightbox}
          title={activeItem.title}
          onPrev={handlePrev}
          onNext={handleNext}
        >
          <div className="relative bg-slate-950 p-2 border border-slate-800 rounded-2xl max-w-full">
            <img
              src={activeItem.imageUrl}
              alt={activeItem.title}
              className="max-h-[70vh] max-w-full object-contain pointer-events-none rounded-xl"
            />
            
            {/* Context bar under lightbox */}
            <div className="p-4 bg-slate-950 border-t border-slate-900/60 text-slate-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs">
              <div className="space-y-1">
                <p className="text-[10px] font-bold uppercase text-amber-500 tracking-widest">{activeItem.category} Zone Description</p>
                <p className="text-sm font-bold text-white">{activeItem.description}</p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1.5 px-3 py-1 bg-white/5 rounded-lg font-bold">
                <Sparkles size={12} className="text-amber-500" />
                <span>Image {lightboxIndex! + 1} of {filteredItems.length}</span>
              </span>
            </div>
          </div>
        </Modal>
      )}

    </div>
  );
};
export default Gallery;
