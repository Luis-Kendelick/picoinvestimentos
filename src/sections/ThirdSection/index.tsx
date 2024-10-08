import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const certificates = [
  {
    src: '/src/assets/certificates/cea.jpg',
    alt: 'cea',
  },
  {
    src: '/src/assets/certificates/cfg.jpg',
    alt: 'cfg',
  },
  {
    src: '/src/assets/certificates/cfp.png',
    alt: 'cfp',
  },
  {
    src: '/src/assets/certificates/cga.jpg',
    alt: 'cga',
  },
  {
    src: '/src/assets/certificates/cge.jpg',
    alt: 'cge',
  },
  {
    src: '/src/assets/certificates/cpa-10.jpg',
    alt: 'cpa-10',
  },
  {
    src: '/src/assets/certificates/cpa-20.jpg',
    alt: 'cpa-20',
  },
];

const CertificateImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="object-cover w-full h-full rounded-ss-xl rounded-ee-xl"
    />
  );
};

const ThirdSection = () => {
  return (
    <div className="h-fit w-full z-60 bg-picoLightGreen flex flex-col p-12 px-16 md:p-48 md:pt-16 justify-center md:justify-start overflow-x-hidden">
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        opts={{
          align: 'center',
          loop: true,
        }}
        className="w-full "
      >
        <CarouselContent className="touch-pan-y touch-pinch-zoom flex">
          {certificates.map((certificate, index) => (
            <CarouselItem
              key={index}
              className="basis-32 mr-3 md:basis-2/12 min-w-0 flex"
            >
              <CertificateImage src={certificate.src} alt={certificate.alt} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-darkbg fill-white" />
        <CarouselNext className="bg-darkbg fill-white" />
      </Carousel>
    </div>
  );
};

export default ThirdSection;
