import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const SecondSection = () => {
  const refRight = useRef(null);
  const refLeft = useRef(null);
  const component = useRef(null);
  const aboutUsRef = useRef(null);
  const rightIsInView = useInView(refRight, { once: true });
  const leftIsInView = useInView(refLeft, { once: true });

  const componentIsInView = useInView(component, { once: true });
  const aboutUsIsInView = useInView(aboutUsRef, { once: true });

  return (
    <div className="relative bg-darkbg flex flex-col pt-16 px-8 pb-5 md:p-48 md:pb-10 justify-start md:justify-start overflow-hidden">
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
        <div className="flex w-full mt-8 md:mt-18 gap-8 items-center flex-wrap md:flex-nowrap justify-between">
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
            className="font-calya text-start text-2xl md:text-3xl text-white flex-1 max-w-full md:max-w-[50%]"
          >
            Traçamos estratégias de investimento que se adequam a cada momento
            da sua vida
          </motion.h2>
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
              delay: 1.6,
            }}
            className="w-full text-lg md:text-xl md:flex-1 text-white tracking-wide font-light text-end max-w-full md:max-w-[40%]"
          >
            A <strong className="font-bold text-picoLightGreen">Pico</strong>{' '}
            nasceu da união de profissionais com atuação em grandes instituições
            financeiras e renomados escritórios de advocacia no Brasil e na
            Europa.
          </motion.h2>
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
      </motion.div>
    </div>
  );
};

export default SecondSection;
