import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const OurTransformations = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Our Transformations
          </h1>
          <p className="text-base md:text-lg max-w-3xl mx-auto opacity-90">
            Explore our portfolio of property transformations across Jacksonville. 
            From distressed properties to beautiful homes, see the quality and attention 
            to detail we bring to every project.
          </p>
        </div>
      </section>

      {/* Full Gallery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {/* Row 1 */}
            <div className="col-span-2 row-span-2">
              <img
                src="/collage/parrish-living.jpg"
                alt="Parrish Living Room Transformation"
                className="w-full h-full object-cover rounded-lg shadow-lg hover-scale"
              />
            </div>
            <div className="col-span-1">
              <img
                src="/collage/pennant-kitchen.jpg"
                alt="Pennant Kitchen"
                className="w-full h-full object-cover rounded-lg shadow-lg hover-scale"
              />
            </div>
            <div className="col-span-1">
              <img
                src="/collage/parrish-bathroom.jpg"
                alt="Parrish Bathroom Renovation"
                className="w-full h-full object-cover rounded-lg shadow-lg hover-scale"
              />
            </div>
            
            {/* Row 2 */}
            <div className="col-span-1">
              <img
                src="/collage/pennant-bathroom.jpg"
                alt="Pennant Bathroom"
                className="w-full h-full object-cover rounded-lg shadow-lg hover-scale"
              />
            </div>
            <div className="col-span-1">
              <img
                src="/collage/parrish-exterior.jpg"
                alt="Parrish Exterior After"
                className="w-full h-full object-cover rounded-lg shadow-lg hover-scale"
              />
            </div>
            
            {/* Row 3 */}
            <div className="col-span-1">
              <img
                src="/collage/parrish-floorplan-2d.png"
                alt="Parrish 2D Floorplan"
                className="w-full h-full object-cover rounded-lg shadow-lg hover-scale"
              />
            </div>
            <div className="col-span-2">
              <img
                src="/collage/parrish-dining.jpg"
                alt="Parrish Dining Area"
                className="w-full h-full object-cover rounded-lg shadow-lg hover-scale"
              />
            </div>
            <div className="col-span-1">
              <img
                src="/projects/darlington-after-kitchen-2.jpg"
                alt="Darlington Kitchen Renovation"
                className="w-full h-full object-cover rounded-lg shadow-lg hover-scale"
              />
            </div>

            {/* Row 4 */}
            <div className="col-span-2">
              <img
                src="/collage/pennant-open-concept.jpg"
                alt="Pennant Open Concept"
                className="w-full h-full object-cover rounded-lg shadow-lg hover-scale"
              />
            </div>
            <div className="col-span-1">
              <img
                src="/collage/parrish-kitchen.jpg"
                alt="Parrish Kitchen"
                className="w-full h-full object-cover rounded-lg shadow-lg hover-scale"
              />
            </div>
            <div className="col-span-1">
              <img
                src="/collage/pennant-living-alt.jpg"
                alt="Pennant Living Room"
                className="w-full h-full object-cover rounded-lg shadow-lg hover-scale"
              />
            </div>

            {/* Row 5 */}
            <div className="col-span-1">
              <img
                src="/collage/pennant-living-fireplace.jpg"
                alt="Pennant Living with Fireplace"
                className="w-full h-full object-cover rounded-lg shadow-lg hover-scale"
              />
            </div>
            <div className="col-span-1">
              <img
                src="/collage/parrish-kitchen-3d.png"
                alt="Parrish Kitchen 3D Render"
                className="w-full h-full object-cover rounded-lg shadow-lg hover-scale"
              />
            </div>
            <div className="col-span-2">
              <img
                src="/collage/darlington-living.jpg"
                alt="Darlington Living Room"
                className="w-full h-full object-cover rounded-lg shadow-lg hover-scale"
              />
            </div>
            
            {/* Row 6 */}
            <div className="col-span-2">
              <img
                src="/collage/pennant-backyard.jpg"
                alt="Pennant Backyard"
                className="w-full h-full object-cover rounded-lg shadow-lg hover-scale"
              />
            </div>
            <div className="col-span-1">
              <img
                src="/collage/floorplan-1.png"
                alt="Darlington Floorplan"
                className="w-full h-full object-cover rounded-lg shadow-lg hover-scale"
              />
            </div>
            <div className="col-span-1">
              <img
                src="/collage/parrish-floorplan-3d.png"
                alt="Parrish 3D Floorplan"
                className="w-full h-full object-cover rounded-lg shadow-lg hover-scale"
              />
            </div>
            
            {/* Row 7 */}
            <div className="col-span-1">
              <img
                src="/collage/pennant-bedroom.jpg"
                alt="Pennant Bedroom"
                className="w-full h-full object-cover rounded-lg shadow-lg hover-scale"
              />
            </div>
            <div className="col-span-1">
              <img
                src="/collage/exterior-1.png"
                alt="Exterior Transformation"
                className="w-full h-full object-cover rounded-lg shadow-lg hover-scale"
              />
            </div>
            <div className="col-span-1">
              <img
                src="/projects/darlington-after-bathroom.jpg"
                alt="Darlington Bathroom"
                className="w-full h-full object-cover rounded-lg shadow-lg hover-scale"
              />
            </div>
            <div className="col-span-1">
              <img
                src="/collage/pennant-kitchen-living.jpg"
                alt="Pennant Kitchen and Living"
                className="w-full h-full object-cover rounded-lg shadow-lg hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Want to See Full Project Details?
          </h2>
          <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore complete case studies with financial breakdowns, before/after comparisons, 
            and detailed renovation insights.
          </p>
          <Link to="/our-projects">
            <Button size="lg" className="font-semibold">
              View All Projects
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OurTransformations;
