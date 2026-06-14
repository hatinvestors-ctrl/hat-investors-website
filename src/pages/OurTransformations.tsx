import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const GALLERY = [
  { src: "/collage/parrish-living.jpg",         alt: "Parrish Living Room",      span: "col-span-2 row-span-2" },
  { src: "/collage/pennant-kitchen.jpg",         alt: "Pennant Kitchen",          span: "col-span-1" },
  { src: "/collage/parrish-bathroom.jpg",        alt: "Parrish Bathroom",         span: "col-span-1" },
  { src: "/collage/pennant-bathroom.jpg",        alt: "Pennant Bathroom",         span: "col-span-1" },
  { src: "/collage/parrish-exterior.jpg",        alt: "Parrish Exterior",         span: "col-span-1" },
  { src: "/collage/parrish-floorplan-2d.png",   alt: "Parrish Floorplan",        span: "col-span-1" },
  { src: "/collage/parrish-dining.jpg",          alt: "Parrish Dining",           span: "col-span-2" },
  { src: "/projects/darlington-after-kitchen-2.jpg", alt: "Darlington Kitchen",   span: "col-span-1" },
  { src: "/collage/pennant-open-concept.jpg",    alt: "Pennant Open Concept",     span: "col-span-2" },
  { src: "/collage/parrish-kitchen.jpg",         alt: "Parrish Kitchen",          span: "col-span-1" },
  { src: "/collage/pennant-living-alt.jpg",      alt: "Pennant Living Room",      span: "col-span-1" },
  { src: "/collage/pennant-living-fireplace.jpg",alt: "Pennant Fireplace",        span: "col-span-1" },
  { src: "/collage/parrish-kitchen-3d.png",      alt: "Parrish Kitchen 3D",       span: "col-span-1" },
  { src: "/collage/darlington-living.jpg",       alt: "Darlington Living Room",   span: "col-span-2" },
  { src: "/collage/pennant-backyard.jpg",        alt: "Pennant Backyard",         span: "col-span-2" },
  { src: "/collage/floorplan-1.png",             alt: "Darlington Floorplan",     span: "col-span-1" },
  { src: "/collage/parrish-floorplan-3d.png",    alt: "Parrish 3D Floorplan",     span: "col-span-1" },
  { src: "/collage/pennant-bedroom.jpg",         alt: "Pennant Bedroom",          span: "col-span-1" },
  { src: "/collage/exterior-1.png",              alt: "Exterior Transformation",   span: "col-span-1" },
  { src: "/projects/darlington-after-bathroom.jpg", alt: "Darlington Bathroom",   span: "col-span-1" },
  { src: "/collage/pennant-kitchen-living.jpg",  alt: "Pennant Kitchen & Living", span: "col-span-1" },
];

const OurTransformations = () => {
  return (
    <div className="min-h-screen">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-navy-deep py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-[hsl(var(--gold))]/5 blur-3xl rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Reveal>
            <span className="gold-line-center mb-6" />
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mt-4 mb-4">
              Our Transformations
            </h1>
            <p className="text-lg text-white/65 max-w-2xl mx-auto">
              From distressed properties to beautiful homes — see the quality and
              attention to detail we bring to every project across Jacksonville.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── GALLERY ──────────────────────────────────────────────── */}
      <section className="bg-[hsl(var(--navy-deep))] py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-7xl mx-auto auto-rows-[200px]">
              {GALLERY.map(({ src, alt, span }) => (
                <div
                  key={src}
                  className={`${span} img-hover rounded-2xl overflow-hidden shadow-lg ring-1 ring-white/5 group`}
                >
                  <div className="relative w-full h-full">
                    <img src={src} alt={alt} className="w-full h-full object-cover" />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-[hsl(var(--gold))]/0 group-hover:bg-[hsl(var(--gold))]/10 transition-all duration-400 flex items-end p-4">
                      <span className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-md">
                        {alt}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="bg-navy-deep py-24 border-t border-[hsl(var(--navy-light))]">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <Reveal>
            <span className="gold-line-center mb-4" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mt-4 mb-4">
              Want to See Full Project Details?
            </h2>
            <p className="text-white/60 mb-10 max-w-xl mx-auto">
              Explore complete case studies with financial breakdowns, before/after
              comparisons, and detailed renovation insights.
            </p>
            <Link
              to="/our-projects"
              className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-xl"
            >
              View All Projects <ArrowRight className="h-5 w-5" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default OurTransformations;
