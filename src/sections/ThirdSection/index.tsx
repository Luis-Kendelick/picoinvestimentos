import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const certificates = [
  {
    src: '/certificates/cge.jpg',
    alt: 'cge',
  },
  {
    src: '/certificates/cga.jpg',
    alt: 'cga',
  },
  {
    src: '/certificates/cfg.jpg',
    alt: 'cfg',
  },
  {
    src: '/certificates/cfp-cut.png',
    alt: 'cfp',
  },
  {
    src: '/certificates/cea.jpg',
    alt: 'cea',
  },
  {
    src: '/certificates/cnpi-cut.png',
    alt: 'cnpi',
  },
  {
    src: '/certificates/cpa-20.jpg',
    alt: 'cpa-20',
  },
  {
    src: '/certificates/cpa-10.jpg',
    alt: 'cpa-10',
  },
];

const CertificateImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="object-contain h-full rounded-ss-xl rounded-ee-xl"
    />
  );
};

const ThirdSection = () => {
  const tributeRef = useRef(null);
  const familyRef = useRef(null);
  const successionRef = useRef(null);
  const socialRef = useRef(null);

  const tributeInView = useInView(tributeRef, { once: true });
  const familyInView = useInView(familyRef, { once: true });
  const successionInView = useInView(successionRef, { once: true });
  const socialInView = useInView(socialRef, { once: true });
  return (
    <div className="h-fit w-full z-30 bg-picoLightGreen flex flex-col p-12 pb-6 px-8 md:p-48 md:py-12 justify-center md:justify-start overflow-x-hidden opacity-70">
      <h2 className="w-full font-montserrat text-left md:text-center mb-7 md:mb-10 text-darkbg text-lg md:text-xl">
        Nossa <strong>equipe de consultoria financeira</strong> detém as
        seguintes certificações:
      </h2>
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: true,
            playOnInit: true,
          }),
        ]}
        opts={{
          align: 'center',
          loop: true,
        }}
        className="w-[85%] md:w-[900px] self-center"
      >
        <CarouselContent className="touch-pan-y touch-pinch-zoom flex max-h-32">
          {certificates.map((certificate, index) => (
            <CarouselItem
              key={index}
              className="basis-32 mr-3 md:basis-2/12 min-w-0 flex-shrink-0 w-auto"
            >
              <CertificateImage src={certificate.src} alt={certificate.alt} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-darkbg fill-white" />
        <CarouselNext className="bg-darkbg fill-white" />
      </Carousel>
      <h2 className="self-center mt-10 text-lg md:text-xl text-primary text-start md:text-center">
        A nossa <strong>equipe de planejamento patrimonial</strong> é composta
        por profissionais com mestrado em renomadas Faculdades de Direito do
        Brasil e Portugal.
        <br />
        <br />
      </h2>
      <h2 className="mt-1 text-lg md:text-xl text-primary text-end md:text-center">
        Principais áreas de atuação:{' '}
        {window.innerWidth < 765 && <br />}
        <motion.strong
          ref={tributeRef}
          initial={{
            opacity: 0.2,
          }}
          animate={
            tributeInView
              ? {
                  opacity: 1,
                }
              : undefined
          }
          transition={{
            type: 'spring',
            stiffness: 50,
            damping: 20,
            delay: 0.5,
            when: 'beforeChildren',
          }}
          className="animate-in slide-in-from-right-full text-lg md:text-xl"
        >
          Tributário
        </motion.strong>
        ,{' '}
        <motion.strong
          ref={socialRef}
          initial={{
            opacity: 0.2,
          }}
          animate={
            socialInView
              ? {
                  opacity: 1,
                }
              : undefined
          }
          transition={{
            type: 'spring',
            stiffness: 50,
            damping: 20,
            delay: 0.9,
            when: 'beforeChildren',
          }}
          className="animate-in slide-in-from-right-full text-lg md:text-xl"
        >
          Societário
        </motion.strong>
        , {window.innerWidth < 765 && <br />}
        <motion.strong
          ref={familyRef}
          initial={{
            opacity: 0.2,
          }}
          animate={
            familyInView
              ? {
                  opacity: 1,
                }
              : undefined
          }
          transition={{
            type: 'spring',
            stiffness: 50,
            damping: 20,
            delay: 1.3,
            when: 'beforeChildren',
          }}
          className="animate-in slide-in-from-right-full text-lg md:text-xl"
        >
          Família
        </motion.strong>{' '}
        e{' '}
        <motion.strong
          ref={successionRef}
          initial={{
            opacity: 0.2,
          }}
          animate={
            successionInView
              ? {
                  opacity: 1,
                }
              : undefined
          }
          transition={{
            type: 'spring',
            stiffness: 50,
            damping: 20,
            delay: 1.6,
            when: 'beforeChildren',
          }}
          className="animate-in slide-in-from-right-full text-lg md:text-xl"
        >
          Sucessões
        </motion.strong>
        .
      </h2>
      <br />
      {/* <div className='cursor-pointer text-start md:text-center h-fit flex self-end md:self-center items-center border-b-2 border-darkbg w-fit text-lg'>
        <a>Saiba mais</a>
        <div className='h-4 w-4 animate-pulse duration-1000'>
            <ArrowIcon classNames='ml-1 h-4 w-4 rotate-90' />
        </div>
      </div> */}
    </div>
  );
};

export default ThirdSection;
