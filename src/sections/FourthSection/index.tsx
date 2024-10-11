import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './styles.modules.css';
import { ArrowIcon } from '@/components/PicoIcon';
import { useNavigate } from 'react-router-dom';
// const icons = [
//   {
//     src: '/icons/balance-highlight.png',
//     alt: 'balance',
//     text: 'Diferentemente de outros agentes do mercado financeiro, atuamos em conjunto com advogados experientes, que monitoram as frequentes mudanças nas normas regulatórias e tributárias que afetamos planejamentos financeiros.',
//   },
//   {
//     src: '/icons/business-strategy-highlight.png',
//     alt: 'business-strategy',
//     text: 'Com este pensamento estratégico, a Pico coloca você à frente de qualquer situação que possa ocorrer.',
//   },
//   {
//     src: '/icons/creative-highlight.png',
//     alt: 'creative',
//     text: 'Não nos limitamos a monitorar o mercado financeiro, fornecer recomendações de investimento e gerenciar o seu portfólio de ativos.',
//   },
//   {
//     src: '/icons/goals-highlight.png',
//     alt: 'goals',
//     text: 'A partir disso, buscamos antecipar eventuais adequações nas eleçãodos melhores ativos, sempre auxiliando os nossos Clientes na avaliação de benefícios, custos e riscos.',
//   },
//   {
//     src: '/icons/validating-ticket-highlight.png',
//     alt: 'ticket',
//     text: 'Apoiamos os nossos Clientes no cumprimento de suas obrigações fiscais, inclusive na apuração de ganhos de capital dentro e fora da bolsa, naemissão de guias para pagamento de impostos devidos e na entrega das declarações tributárias.',
//   },
// ];

const FourthSection = () => {
  const navigate = useNavigate();
  const component = useRef(null);
  const refLeft = useRef(null);
  const resultRef = useRef(null);
  const transparencyRef = useRef(null);
  const conformityRef = useRef(null);

  const componentIsInView = useInView(component, { once: true });
  const leftIsInView = useInView(refLeft, { once: true });
  const resultInView = useInView(resultRef, { once: true });
  const transparencyInView = useInView(transparencyRef, { once: true });
  const conformityInView = useInView(conformityRef, { once: true });

  return (
    <section
      id="diferenciais"
      className="relative h-auto w-full z-60 bg-darkbg flex flex-col p-12 px-16 md:p-48 md:py-12 md:pt-20 justify-center md:justify-start overflow-hidden"
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
            delay: 1.6,
          }}
          className="w-full text-lg md:text-xl text-end md:flex-1 text-white tracking-wide font-light"
        >
          Na <strong className="text-picoLightGreen font-bold">Pico</strong>{' '}
          atuamos e pensamos de forma diferente.
        </motion.h2>
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
        href='/nossos-diferenciais'
        className="z-20 justify-self-start cursor-pointer text-start md:text-center h-fit flex self-end md:self-start items-center border-b-2 border-picoLightGreen w-fit text-lg text-white font-montserrat mt-5"
      >
        <p>Saiba mais</p>
        <div className="h-4 w-4 animate-pulse duration-1000 left-44">
          <ArrowIcon classNames="ml-1 h-4 w-4 rotate-90 fill-picoLightGreen" />
        </div>
      </motion.a>
      <ArrowIcon classNames="rotate-90 absolute z-0 h-[29rem] w-[29rem] green-gradient top-8 -left-[270px] opacity-25" />
      <ArrowIcon classNames="rotate-90 absolute z-0 h-[29rem] w-[29rem] green-gradient top-8 left-0 opacity-25" />
      <ArrowIcon classNames="rotate-90 absolute z-0 h-[29rem] w-[29rem] green-gradient top-8 left-[270px] opacity-25" />
      <ArrowIcon classNames="rotate-90 absolute z-0 h-[29rem] w-[29rem] green-gradient top-8 left-[540px] opacity-25" />
      <ArrowIcon classNames="rotate-90 absolute z-0 h-[29rem] w-[29rem] green-gradient top-8 left-[810px] opacity-25" />
      <ArrowIcon classNames="rotate-90 absolute z-0 h-[29rem] w-[29rem] green-gradient top-8 left-[1080px] opacity-25" />
      <ArrowIcon classNames="rotate-90 absolute z-0 h-[29rem] w-[29rem] green-gradient top-8 left-[1350px] opacity-25" />
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
