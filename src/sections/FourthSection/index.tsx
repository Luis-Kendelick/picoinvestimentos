import { motion, useAnimate, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import './styles.modules.css';
import { ArrowIcon } from '@/components/PicoIcon';

const FourthSection = () => {
  const component = useRef(null);
  const componentIsInView = useInView(component, { once: true });
  const refLeft = useRef(null);
  const leftIsInView = useInView(refLeft, { once: true });
  const resultRef = useRef(null);
  const resultInView = useInView(resultRef, { once: true });
  const transparencyRef = useRef(null);
  const transparencyInView = useInView(transparencyRef, { once: true });
  const conformityRef = useRef(null);
  const conformityInView = useInView(conformityRef, { once: true });

  const [text1, text1Animate] = useAnimate();
  const text1InView = useInView(text1, { once: true });
  const [text2, text2Animate] = useAnimate();
  const text2InView = useInView(text2, { once: true });
  const [text3, text3Animate] = useAnimate();
  const text3InView = useInView(text3, { once: true });

  useEffect(() => {
    text1InView && text1Animate(
      text1.current,
      {
        x: 0,
        opacity: 1,
      },
      {
        delay: 1,
        type: 'spring',
        stiffness: 50,
        damping: 20,
      },
    );
    text2InView && text2Animate(
      text2.current,
      {
        x: 0,
        opacity: 1,
      },
      {
        delay: 1.2,
        type: 'spring',
        stiffness: 50,
        damping: 20,
      },
    );
    text3InView && text3Animate(
      text3.current,
      {
        x: 0,
        opacity: 1,
      },
      {
        delay: 1.4,
        type: 'spring',
        stiffness: 50,
        damping: 20,
      },
    );
  });

  return (
    <section
      id="diferenciais"
      className="relative h-auto w-full z-60 bg-darkbg flex flex-col p-12 px-8 md:p-48 md:py-12 md:pt-20 justify-center md:justify-start overflow-hidden"
    >
      <motion.div
        ref={component}
        initial={{
          scale: 0.9,
        }}
        animate={
          componentIsInView
            ? {
                scale: 1,
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
      <div className="flex w-full mt-8 md:mt-18 gap-8 items-center flex-wrap md:flex-nowrap z-20">
        <div className="font-calya text-start text-3xl md:text-4xl flex-1">
          <motion.h2
            ref={resultRef}
            initial={{
              x: -20,
              opacity: 0,
            }}
            animate={{
              x: resultInView ? 0 : undefined,
              opacity: resultInView ? 1 : undefined,
            }}
            transition={{
              type: 'spring',
              stiffness: 50,
              damping: 20,
              delay: 1,
            }}
            className="text-white font-calya text-start text-3xl md:text-4xl flex-1"
          >
            Resultado,
          </motion.h2>
          {/* <br /> */}
          <motion.h2
            ref={transparencyRef}
            initial={{
              x: -80,
              opacity: 0,
            }}
            animate={{
              x: transparencyInView ? 0 : undefined,
              opacity: transparencyInView ? 1 : undefined,
            }}
            transition={{
              type: 'spring',
              stiffness: 50,
              damping: 20,
              delay: 1.2,
            }}
            className="text-white font-calya text-start text-3xl md:text-4xl flex-1"
          >
            Transparência,
          </motion.h2>
          {/* <br /> */}
          <motion.h2
            ref={conformityRef}
            initial={{
              x: -80,
              opacity: 0,
            }}
            animate={{
              x: conformityInView ? 0 : undefined,
              opacity: conformityInView ? 1 : undefined,
            }}
            transition={{
              type: 'spring',
              stiffness: 50,
              damping: 20,
              delay: 1.5,
            }}
            className="text-white font-calya text-start text-3xl md:text-4xl flex-1"
          >
            Conformidade.
          </motion.h2>
        </div>
        <div className="flex flex-col p-0 md:pl-56">
          <motion.h2
            ref={text1}
            initial={{
              opacity: 0,
              x: 100,
            }}
            className="w-full text-lg md:text-xl text-end md:flex-1 text-white tracking-wide font-light"
          >
            Na <strong className="text-picoLightGreen font-bold">Pico</strong>{' '}
            atuamos e pensamos de forma diferente.
          </motion.h2>
          <br />
          <motion.h2
            initial={{
              opacity: 0,
              x: 100,
            }}
            ref={text2}
            className="w-full text-lg md:text-xl text-end md:flex-1 text-white tracking-wide font-light"
          >
            Não nos limitamos a monitorar o mercado financeiro, fornecer
            recomendações de investimento e gerenciar o seu portfólio de ativo.
          </motion.h2>
          <br />
          <motion.h2
            initial={{
              opacity: 0,
              x: 100,
            }}
            ref={text3}
            className="w-full text-lg md:text-xl text-end md:flex-1 text-white tracking-wide font-light"
          >
            Oferecemos mais robustez e solidez através do modelo one-stop shop:
            especialistas altamente qualificados, tanto na área financeira
            quanto na área jurídica, que oferecem um atendimento completo e sob
            medida para as necessidades dos clientes, reunidas em um único
            lugar.
          </motion.h2>
        </div>
      </div>
      <motion.a
        initial={{
          x: -200,
        }}
        animate={{
          x: 0,
        }}
        transition={{
          type: 'linear',
        }}
        href="/nossos-diferenciais"
        className="z-20 justify-self-start cursor-pointer text-start md:text-center h-fit flex self-end md:self-start items-center border-b-2 border-picoLightGreen w-fit text-lg text-white font-montserrat mt-5"
      >
        <p>Saiba mais</p>
        <div className="h-4 w-4 animate-pulse duration-1000 left-44">
          <ArrowIcon classNames="ml-1 h-4 w-4 rotate-90 fill-picoLightGreen" />
        </div>
      </motion.a>
      <ArrowIcon classNames="-rotate-90 absolute z-0 h-[29rem] w-[29rem] green-gradient top-8 -left-[270px] opacity-25" />
      <ArrowIcon classNames="-rotate-90 absolute z-0 h-[29rem] w-[29rem] green-gradient top-8 left-0 opacity-25" />
      <ArrowIcon classNames="-rotate-90 absolute z-0 h-[29rem] w-[29rem] green-gradient top-8 left-[270px] opacity-25" />
      <ArrowIcon classNames="-rotate-90 absolute z-0 h-[29rem] w-[29rem] green-gradient top-8 left-[540px] opacity-25" />
      <ArrowIcon classNames="-rotate-90 absolute z-0 h-[29rem] w-[29rem] green-gradient top-8 left-[810px] opacity-25" />
      <ArrowIcon classNames="-rotate-90 absolute z-0 h-[29rem] w-[29rem] green-gradient top-8 left-[1080px] opacity-25" />
      <ArrowIcon classNames="-rotate-90 absolute z-0 h-[29rem] w-[29rem] green-gradient top-8 left-[1350px] opacity-25" />
      {/* <Carousel
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
      </Carousel> */}
      <div className="flex flex-wrap gap-10 justify-center"></div>
    </section>
  );
};

export default FourthSection;
