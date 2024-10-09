import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './styles.modules.css';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import useEmblaCarousel from 'embla-carousel-react';
const icons = [
  {
    src: '/icons/balance-highlight.png',
    alt: 'balance',
    text: 'Diferentemente de outros agentes do mercado financeiro, atuamos em conjunto com advogados experientes, que monitoram as frequentes mudanças nas normas regulatórias e tributárias que afetamos planejamentos financeiros.',
  },
  {
    src: '/icons/business-strategy-highlight.png',
    alt: 'business-strategy',
    text: 'Com este pensamento estratégico, a Pico coloca você à frente de qualquer situação que possa ocorrer.',
  },
  {
    src: '/icons/creative-highlight.png',
    alt: 'creative',
    text: 'Não nos limitamos a monitorar o mercado financeiro, fornecer recomendações de investimento e gerenciar o seu portfólio de ativos.',
  },
  {
    src: '/icons/goals-highlight.png',
    alt: 'goals',
    text: 'A partir disso, buscamos antecipar eventuais adequações nas eleçãodos melhores ativos, sempre auxiliando os nossos Clientes na avaliação de benefícios, custos e riscos.',
  },
  {
    src: '/icons/validating-ticket-highlight.png',
    alt: 'ticket',
    text: 'Apoiamos os nossos Clientes no cumprimento de suas obrigações fiscais, inclusive na apuração de ganhos de capital dentro e fora da bolsa, naemissão de guias para pagamento de impostos devidos e na entrega das declarações tributárias.',
  },
];

const FourthSection = () => {
  const component = useRef(null);
  const refLeft = useRef(null);
  // const successionRef = useRef(null);
  // const socialRef = useRef(null);

  const componentIsInView = useInView(component, { once: true });
  const leftIsInView = useInView(refLeft, { once: true });
  // const successionInView = useInView(successionRef, { once: true });
  // const socialInView = useInView(socialRef, { once: true });

  const [emblaRef, _] = useEmblaCarousel({
    align: 'center',
    loop: true,
  });
  // const tweenFactor = useRef(0);
  // const tweenNodes = useRef<HTMLElement[]>([]);

  // const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
  //   tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
  //     return slideNode.querySelector('.images') as HTMLElement;
  //   });
  // }, []);

  // const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
  //   tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  // }, []);

  // const tweenScale = useCallback(
  //   (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
  //     const engine = emblaApi.internalEngine();
  //     const scrollProgress = emblaApi.scrollProgress();
  //     const slidesInView = emblaApi.slidesInView();
  //     const isScrollEvent = eventName === 'scroll';

  //     emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
  //       let diffToTarget = scrollSnap - scrollProgress;
  //       const slidesInSnap = engine.slideRegistry[snapIndex];

  //       slidesInSnap.forEach((slideIndex) => {
  //         if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

  //         if (engine.options.loop) {
  //           engine.slideLooper.loopPoints.forEach((loopItem) => {
  //             const target = loopItem.target();

  //             if (slideIndex === loopItem.index && target !== 0) {
  //               const sign = Math.sign(target);

  //               if (sign === -1) {
  //                 diffToTarget = scrollSnap - (1 + scrollProgress);
  //               }
  //               if (sign === 1) {
  //                 diffToTarget = scrollSnap + (1 - scrollProgress);
  //               }
  //             }
  //           });
  //         }

  //         const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
  //         const scale = numberWithinRange(tweenValue, 0, 1).toString();
  //         const tweenNode = tweenNodes.current[slideIndex];
  //         tweenNode.style.transform = `scale(${scale})`;
  //       });
  //     });
  //   },
  //   [],
  // );

  // useEffect(() => {
  //   if (!emblaApi) return

  //   setTweenNodes(emblaApi)
  //   setTweenFactor(emblaApi)
  //   tweenScale(emblaApi)

  //   emblaApi
  //     .on('reInit', setTweenNodes)
  //     .on('reInit', setTweenFactor)
  //     .on('reInit', tweenScale)
  //     .on('scroll', tweenScale)
  //     .on('slideFocus', tweenScale)
  // }, [emblaApi, tweenScale])

  return (
    <div id='diferenciais' className="relative h-auto w-full z-60 bg-darkbg flex flex-col p-12 px-16 md:p-48 md:py-12 md:pt-20 justify-center md:justify-start overflow-hidden">
      <motion.div
        ref={component}
        initial={{
          scale: 0.9,
          opacity: 0,
        }}
        animate={
          componentIsInView
            ? {
                scale: 1,
                opacity: 1,
              }
            : undefined
        }
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 20,
          when: 'beforeChildren',
        }}
        className="flex items-center z-20"
      >
        <motion.div
          ref={refLeft}
          initial={{
            x: -100,
            opacity: 0,
          }}
          animate={
            leftIsInView
              ? {
                  x: 0,
                  opacity: 1,
                }
              : undefined
          }
          transition={{
            type: 'spring',
            stiffness: 50,
            damping: 20,
            delay: 1,
          }}
          className="h-1 w-16 bg-picoLightGreen absolute top-9 md:top-12 md:w-24 opacity-40"
        />
        <h1 className="text-3xl text-nowrap md:text-5xl font-calya text-white h-full z-40">
          Nossos diferenciais
        </h1>
      </motion.div>
      <motion.h2
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 50,
          damping: 20,
          delay: 1.4,
        }}
        className="font-calya text-start text-3xl md:text-4xl text-white flex-1 mt-10"
      >
        Na <strong className="text-picoLightGreen">Pico</strong> atuamos e
        pensamos de forma diferente.
      </motion.h2>
      {/* <ArrowIcon classNames='rotate-90 absolute' /> */}
      <Carousel
        className="mt-12"
        ref={emblaRef}
        opts={{
          align: "center",
          loop: true,
        }}
      >
        <CarouselContent>
          {icons.map((icon) => (
            <CarouselItem
              key={icon.alt}
              className={`basis-48 mr-5 md:basis-3/12 min-w-0 px-5 md:px-10 flex-shrink-0 flex py-10 border rounded-2xl backdrop-blur-3xl images flex-col items-center gap-6`}
            >
              <img src={icon.src} alt={icon.alt} className="h-12 w-12" />
              <p>{icon.text}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-darkbg fill-white" />
        <CarouselNext className="bg-darkbg fill-white" />
      </Carousel>
      <div className="flex flex-wrap gap-10 justify-center"></div>
    </div>
  );
};

export default FourthSection;
