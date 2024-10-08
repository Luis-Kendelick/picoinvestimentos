import { ArrowIcon, PicoIconNoPulse } from '@/components/PicoIcon';
import { domAnimation, LazyMotion, motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const SecondSection = () => {
  const refRight = useRef(null);
  const component = useRef(null);
  const aboutUsRef = useRef(null);
  const rightIsInView = useInView(refRight, { once: true });
  const componentIsInView = useInView(component, { once: true });
  const aboutUsIsInView = useInView(aboutUsRef, { once: true });

  return (
    <div className="relative bg-darkbg flex flex-col p-16 pb-5 md:p-48 md:pb-10 justify-start md:justify-start overflow-hidden">
      {/* <div className="z-50 absolute opacity-25 overflow-hidden w-full md:w-fit h-fit -top-28 left-0">
        <div className="w-[200%] md:w-96 md:aspect-auto fill-current skew-x-3">
          <PicoIconNoPulse />
        </div>
      </div> */}
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
          ref={refRight}
          initial={{
            x: -100,
            opacity: 0,
          }}
          animate={
            rightIsInView
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
            delay: 0.5,
            when: 'beforeChildren',
          }}
          className="flex h-1 w-16 bg-picoLightGreen absolute top-9 md:top-12 md:w-24"
        />
        <h1 className="text-3xl text-nowrap md:text-5xl font-calya text-white h-full">
          Sobre nós
        </h1>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: aboutUsIsInView ? 1 : 0,
          y: aboutUsIsInView ? 0 : 50,
        }}
        transition={{
          type: 'spring',
          stiffness: 50,
          damping: 20,
          delay: 1.2,
        }}
        ref={aboutUsRef}
      >
        <div className="flex w-full mt-8 md:mt-18 gap-8 items-center flex-wrap md:flex-nowrap">
          {/* <div className="w-[680px] absolute -left-32 -top-28 rotate-45 opacity-5">
          <PicoIconPulse />
        </div> */}
          <motion.h2
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: aboutUsIsInView ? 1 : 0,
              y: aboutUsIsInView ? 0 : 50,
            }}
            transition={{
              type: 'spring',
              stiffness: 50,
              damping: 20,
              delay: 1.4,
            }}
            className="font-calya text-start text-3xl md:text-4xl text-white flex-1"
          >
            Seja guiado por quem entende do mercado financeiro
          </motion.h2>
          <motion.p
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: aboutUsIsInView ? 1 : 0,
              y: aboutUsIsInView ? 0 : 50,
            }}
            transition={{
              type: 'spring',
              stiffness: 50,
              damping: 20,
              delay: 1.6,
            }}
            className="w-full text-lg md:text-xl text-end md:flex-1 text-white font-light tracking-wide italic"
          >
            A <strong className="font-bold text-picoLightGreen">Pico</strong>{' '}
            nasceu da união de profissionais com atuação em grandes instituições
            financeiras e renomados escritórios de advocacia no Brasil e na
            Europa.
          </motion.p>
        </div>
        <motion.div
          ref={refRight}
          initial={{
            x: -100,
            opacity: 0,
          }}
          animate={
            rightIsInView
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
            delay: 0.5,
            when: 'beforeChildren',
          }}
          className="flex h-[2px] w-full bg-picoLightGreen top-9 mt-7 md:hidden"
        />
        <p className="w-full font-bold font-montserrat text-center mt-7 md:mt-14 text-white text-xl md:text-3xl ita">
          Nossa equipe detém as seguintes certificações:
        </p>
      </motion.div>
    </div>
  );
};

export default SecondSection;
