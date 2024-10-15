import {
  motion,
  useAnimate,
  useInView,
  DynamicAnimationOptions,
} from 'framer-motion';
import { useEffect, useRef } from 'react';
import { ArrowIcon } from '@/components/PicoIcon';

const textLastStateAnimation = {
  opacity: 1,
  x: 0,
};

const textAnimation: DynamicAnimationOptions = {
  type: 'spring',
  stiffness: 50,
  damping: 20,
  delay: 1,
};

const FifthSection = () => {
  const component = useRef(null);
  const componentIsInView = useInView(component, { once: true });
  const refLeft = useRef(null);
  const leftIsInView = useInView(refLeft, { once: true });
  const [proccess1, proccess1Animate] = useAnimate();
  const proccess1InView = useInView(proccess1, { once: true });
  const [proccess2, proccess2Animate] = useAnimate();
  const proccess2InView = useInView(proccess2, { once: true });
  const [proccess3, proccess3Animate] = useAnimate();
  const proccess3InView = useInView(proccess3, { once: true });
  const [proccess4, proccess4Animate] = useAnimate();
  const proccess4InView = useInView(proccess4, { once: true });

  const [text3, text3Animate] = useAnimate();
  const text3InView = useInView(text3, { once: true });

  useEffect(() => {
    text3InView &&
      text3Animate(text3.current, textLastStateAnimation, {
        ...textAnimation,
        delay: 1.4,
      });
    proccess1InView &&
      proccess1Animate(
        proccess1.current,
        {
          y: 0,
          opacity: 1,
        },
        {
          ...textAnimation,
          delay: 1,
        },
      );
    proccess2InView &&
      proccess2Animate(
        proccess2.current,
        {
          y: 0,
          opacity: 1,
        },
        {
          ...textAnimation,
          delay: 1.2,
        },
      );
    proccess3InView &&
      proccess3Animate(
        proccess3.current,
        {
          y: 0,
          opacity: 1,
        },
        {
          ...textAnimation,
          delay: 1.4,
        },
      );
    proccess4InView &&
      proccess4Animate(
        proccess4.current,
        {
          y: 0,
          opacity: 1,
        },
        {
          ...textAnimation,
          delay: 1.6,
        },
      );
  });

  return (
    <section
      id="diferenciais"
      className="relative h-auto w-full z-60 bg-gradient-to-b from-darkbg from-60% to-picoLightGreen bg-gradi flex flex-col p-12 pt-0 px-8 md:p-48 md:py-12 md:pt-20 justify-center md:justify-start overflow-hidden"
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
          Nosso processo
        </h1>
      </motion.div>
      <div className="flex w-full mt-8 md:mt-18 gap-8 items-center flex-wrap md:flex-nowrap md:flex-col z-20">
        <motion.h2
          initial={{
            opacity: 0,
            x: 100,
          }}
          ref={text3}
          className="w-full text-lg md:text-xl md:text-center md:flex-1 text-white tracking-wide font-light"
        >
          O nosso fluxo de trabalho começa com uma reunião inicial sem
          compromisso, seguida da coleta dos dados, a partir do que elaboramos
          um planejamento financeiro, a ser implementado e monitorado conforme
          as nossas recomendações.
        </motion.h2>
        <div className="flex flex-col md:flex-row md:gap-8">
          <motion.div
            initial={{
              y: 72,
              opacity: 0,
            }}
            ref={proccess1}
            className="relative flex justify-center items-center px-9 py-4 h-fit w-full bg-purple-900 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-15 border border-gray-50 shadow-2xl"
          >
            <h2 className='text-center'>
              Apresentação do trabalho.
            </h2>

            {/* <div className="invisible md:flex absolute h-full left-[98%] top-[75%] rotate-180 md:rotate-90 md:-top-7 md:left-[100%]">
              <ArrowIcon classNames="h-6 w-6 fill-picoLightGreen" />
              <ArrowIcon classNames="h-6 w-6 fill-picoLightGreen" />
              <ArrowIcon classNames="h-6 w-6 fill-picoLightGreen" />
            </div> */}
          </motion.div>
          <div className="md:hidden rotate-180 md:rotate-90 w-full flex justify-center my-1">
            <ArrowIcon classNames="h-6 w-6 fill-picoLightGreen" />
          </div>
          <motion.div
            initial={{
              y: 72,
              opacity: 0,
            }}
            ref={proccess2}
            className="relative flex justify-center items-center px-9 py-4 h-fit w-full bg-purple-900 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-15 border border-gray-50 shadow-2xl"
          >
            <h2 className='text-center'>
              Coletamos informações necessárias para a
              elaboração do seu planejamento financeiro.
            </h2>
            {/* <div className="invisible md:visible absolute right-[98%] top-[90%] rotate-180 md:rotate-90 md:top-[5.3rem] md:left-[105%]">
              <ArrowIcon classNames="h-6 w-6 fill-picoLightGreen" />
              <ArrowIcon classNames="h-6 w-6 fill-picoLightGreen" />
              <ArrowIcon classNames="h-6 w-6 fill-picoLightGreen" />
            </div> */}
          </motion.div>
          <div className="md:hidden rotate-180 md:rotate-90 w-full flex justify-center my-1">
            <ArrowIcon classNames="h-6 w-6 fill-picoLightGreen" />
          </div>
          <motion.div
            initial={{
              y: 72,
              opacity: 0,
            }}
            ref={proccess3}
            className="relative flex justify-center items-center px-9 py-4 h-fit w-full bg-purple-900 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-15 border border-gray-50 shadow-2xl"
          >
            <h2 className='text-center'>
              Após análise, apresentaremos um relatório
              personalizado, com análise de risco, taxa e retorno e explicaremos
              a nossa estratégia.
            </h2>
            {/* <div className="invisible md:visible absolute left-[98%] top-[90%] rotate-180 md:rotate-90 md:-top-9 md:left-[95%]">
              <ArrowIcon classNames="h-6 w-6 fill-picoLightGreen" />
              <ArrowIcon classNames="h-6 w-6 fill-picoLightGreen" />
              <ArrowIcon classNames="h-6 w-6 fill-picoLightGreen" />
            </div> */}
          </motion.div>
          <div className="md:hidden rotate-180 md:rotate-90 w-full flex justify-center my-1">
            <ArrowIcon classNames="h-6 w-6 fill-picoLightGreen" />
          </div>
          <motion.div
            initial={{
              y: 72,
              opacity: 0,
            }}
            ref={proccess4}
            className="relative flex justify-center items-center px-9 py-4 h-fit w-full bg-purple-900 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-15 border border-gray-50 shadow-2xl"
          >
            <h2 className='text-center'>
              Auxiliamos o Cliente na implementação do plano
              e, periodicamente, realizaremos readequações de acordo com mudanças
              relevantes em sua vida e/ou mercado financeiro.
            </h2>
          </motion.div>
        </div>
        
      </div>
      <ArrowIcon classNames="rotate-90 absolute z-0 h-[29rem] w-[29rem] green-gradient top-8 -left-[270px] opacity-25" />
      <ArrowIcon classNames="rotate-90 absolute z-0 h-[29rem] w-[29rem] green-gradient top-8 left-0 opacity-25" />
      <ArrowIcon classNames="rotate-90 absolute z-0 h-[29rem] w-[29rem] green-gradient top-8 left-[270px] opacity-25" />
      <ArrowIcon classNames="rotate-90 absolute z-0 h-[29rem] w-[29rem] green-gradient top-8 left-[540px] opacity-25" />
      <ArrowIcon classNames="rotate-90 absolute z-0 h-[29rem] w-[29rem] green-gradient top-8 left-[810px] opacity-25" />
      <ArrowIcon classNames="rotate-90 absolute z-0 h-[29rem] w-[29rem] green-gradient top-8 left-[1080px] opacity-25" />
      <ArrowIcon classNames="rotate-90 absolute z-0 h-[29rem] w-[29rem] green-gradient top-8 left-[1350px] opacity-25" />
      <ArrowIcon classNames="rotate-90 absolute z-0 h-[29rem] w-[29rem] green-gradient top-8 -left-[270px] opacity-25" />

      <ArrowIcon classNames="-rotate-90 absolute z-0 h-[29rem] w-[29rem] blue-gradient top-[60%] md:hidden right-0 opacity-50" />
      <ArrowIcon classNames="-rotate-90 absolute z-0 h-[29rem] w-[29rem] blue-gradient top-[60%] md:hidden right-[270px] opacity-50" />
      <ArrowIcon classNames="-rotate-90 absolute z-0 h-[29rem] w-[29rem] blue-gradient top-[60%] md:hidden right-[540px] opacity-50" />
      <ArrowIcon classNames="-rotate-90 absolute z-0 h-[29rem] w-[29rem] blue-gradient top-[60%] md:hidden right-[810px] opacity-50" />
      <ArrowIcon classNames="-rotate-90 absolute z-0 h-[29rem] w-[29rem] blue-gradient top-[60%] md:hidden right-[1080px] opacity-50" />
      <ArrowIcon classNames="-rotate-90 absolute z-0 h-[29rem] w-[29rem] blue-gradient top-[60%] md:hidden right-[1350px] opacity-50" />
      <div className="flex flex-wrap gap-10 justify-center"></div>
    </section>
  );
};

export default FifthSection;
