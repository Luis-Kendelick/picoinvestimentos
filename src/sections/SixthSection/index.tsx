import YoutubeEmbed from '@/components/EmbedVideo';
import {
  motion,
  useAnimate,
  useInView,
  DynamicAnimationOptions,
} from 'framer-motion';
import { useEffect, useRef } from 'react';

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

const SixthSection = () => {
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
  const [text1, text1Animate] = useAnimate();
  const text1InView = useInView(text1, { once: true });
  const [text2, text2Animate] = useAnimate();
  const text2InView = useInView(text2, { once: true });

  const [text3, text3Animate] = useAnimate();
  const text3InView = useInView(text3, { once: true });

  useEffect(() => {
    text2InView &&
      text2Animate(
        text2.current,
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
    text1InView &&
      text1Animate(
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
      // id="nossa-abordagem"
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
          Nossa abordagem
        </h1>
      </motion.div>
      <div className="flex w-full mt-8 md:mt-18 gap-8 items-center flex-wrap md:flex-nowrap md:flex-col z-20">
        <motion.h2
          initial={{
            opacity: 0,
            x: 100,
          }}
          ref={text3}
          className="w-full text-2xl md:text-3xl text-start md:text-start md:flex-1 text-white tracking-wide font-calya"
        >
          Na <strong className="text-picoLightGreen">Pico</strong>, atuamos de
          forma independente e transparente. <br />
          Não nos beneficiamos de qualquer tipo de remuneração proveniente de
          bancos, corretoras, gestoras, entre outros.
        </motion.h2>
        <motion.h2
          ref={text2}
          initial={{
            opacity: 0,
            x: 100,
          }}
          className="w-full text-lg md:text-xl text-end md:flex-1 text-white tracking-wide font-light"
        >
          Cada cliente escolhe a corretora com a qual quer trabalhar.
        </motion.h2>
        <motion.h2
          ref={text1}
          initial={{
            opacity: 0,
            x: 100,
          }}
          className="w-full text-lg md:text-xl text-end md:flex-1 text-white tracking-wide font-light max-w-full"
        >
          {/* Na <strong className="text-picoLightGreen font-bold">Pico</strong>{' '} */}
          A nossa única fonte de receita é uma taxa mensal pré-acordada sobre a
          carteira do Cliente, {window.innerWidth > 765 && <br />} o que nos permite atuar sem vieses, escolhendo os
          melhores investimentos.
        </motion.h2>
        {/* <motion.a
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
        </motion.a> */}
        {/* 
        <div className='bg-picoLightGreen rounded-md p-1 sm:p-3 w-full md:max-w-[80%]'>
          <h2 className='text-picoLightBlue font-semibold mb-1 ml-2 sm:mb-3 sm:ml-0'>Pico Investimentos - Apresentação</h2>
          <YoutubeEmbed embedId="Cz0uSfptbWk" />
        </div>
        */}
      </div>
      {/* <ArrowIcon classNames="-rotate-90 absolute z-0 h-[29rem] w-[29rem] green-gradient top-8 -left-[270px] opacity-25" />
      <ArrowIcon classNames="-rotate-90 absolute z-0 h-[29rem] w-[29rem] green-gradient top-8 left-0 opacity-25" />
      <ArrowIcon classNames="-rotate-90 absolute z-0 h-[29rem] w-[29rem] green-gradient top-8 left-[270px] opacity-25" />
      <ArrowIcon classNames="-rotate-90 absolute z-0 h-[29rem] w-[29rem] green-gradient top-8 left-[540px] opacity-25" />
      <ArrowIcon classNames="-rotate-90 absolute z-0 h-[29rem] w-[29rem] green-gradient top-8 left-[810px] opacity-25" />
      <ArrowIcon classNames="-rotate-90 absolute z-0 h-[29rem] w-[29rem] green-gradient top-8 left-[1080px] opacity-25" />
      <ArrowIcon classNames="-rotate-90 absolute z-0 h-[29rem] w-[29rem] green-gradient top-8 left-[1350px] opacity-25" />
      <ArrowIcon classNames="-rotate-90 absolute z-0 h-[29rem] w-[29rem] green-gradient top-8 -left-[270px] opacity-25" />

      <ArrowIcon classNames="rotate-90 absolute z-0 h-[29rem] w-[29rem] blue-gradient top-[60%] md:hidden right-0 opacity-50" />
      <ArrowIcon classNames="rotate-90 absolute z-0 h-[29rem] w-[29rem] blue-gradient top-[60%] md:hidden right-[270px] opacity-50" />
      <ArrowIcon classNames="rotate-90 absolute z-0 h-[29rem] w-[29rem] blue-gradient top-[60%] md:hidden right-[540px] opacity-50" />
      <ArrowIcon classNames="rotate-90 absolute z-0 h-[29rem] w-[29rem] blue-gradient top-[60%] md:hidden right-[810px] opacity-50" />
      <ArrowIcon classNames="rotate-90 absolute z-0 h-[29rem] w-[29rem] blue-gradient top-[60%] md:hidden right-[1080px] opacity-50" />
      <ArrowIcon classNames="rotate-90 absolute z-0 h-[29rem] w-[29rem] blue-gradient top-[60%] md:hidden right-[1350px] opacity-50" />
      <div className="flex flex-wrap gap-10 justify-center"></div> */}
    </section>
  );
};

export default SixthSection;
