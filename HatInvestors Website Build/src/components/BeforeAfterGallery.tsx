import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
interface GalleryImage {
  src: string;
  alt: string;
  type: "before" | "after";
}
interface BeforeAfterGalleryProps {
  images: GalleryImage[];
}
export const BeforeAfterGallery = ({
  images
}: BeforeAfterGalleryProps) => {
  const beforeImages = images.filter(img => img.type === "before");
  const afterImages = images.filter(img => img.type === "after");
  return <div className="w-full space-y-8">
      {/* Before Section */}
      <div className="space-y-4">
        <h3 className="text-2xl font-heading font-bold text-center">Before</h3>
        <div className="px-12">
          <Carousel className="w-full">
            <CarouselContent>
              {beforeImages.map((image, index) => <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden">
                    <div className="relative aspect-[4/3]">
                      <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                    </div>
                  </Card>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      {/* After Section */}
      <div className="space-y-4">
        <h3 className="text-2xl font-heading font-bold text-center">After</h3>
        <div className="px-12">
          <Carousel className="w-full">
            <CarouselContent>
              {afterImages.map((image, index) => <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden">
                    <div className="relative aspect-[4/3]">
                      <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                    </div>
                  </Card>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>;
};