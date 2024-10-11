import Header from '@/components/Header';
import HomeLogo from '@/components/HomeLogo';
import { ArrowIcon, PicoIconNoPulse } from '@/components/PicoIcon';
import { motion, useAnimate } from 'framer-motion';
import { useEffect } from 'react';

const NossosDiferenciais = () => {
  //   const [title, animateTitle] = useAnimate();
  const [titleBox, animateTitleBox] = useAnimate();
  const [logo, animateLogo] = useAnimate();
  const [underline, animateUnderline] = useAnimate();

  useEffect(() => {
    // animateTitle(
    //   title.current,
    //   { scale: 1, opacity: 1, x: 0 },
    //   { delay: 0.5, type: 'spring', stiffness: 100, damping: 20 },
    // );
    animateTitleBox(
      titleBox.current,
      { x: 0, opacity: 1 },
      { delay: 0.8, type: 'spring', stiffness: 50, damping: 20 },
    );
    animateLogo(
      logo.current,
      { scale: 1, opacity: 1 },
      { delay: 1.5, type: 'spring', stiffness: 100, damping: 20 },
    );
    animateUnderline(
      underline.current,
      { x: 0, opacity: 1 },
      { delay: 1.5, type: 'spring', stiffness: 50, damping: 20 },
    );
  });

  return (
    <>
      <Header />
      <div
        ref={logo}
        className="w-screen h-64 md:h-96 relative flex flex-col justify-center items-center "
      >
        <img
          src="/images/pico-imagem-improved.webp"
          alt="Pico"
          className="h-full w-full object-cover z-0 absolute filter grayscale brightness-100 hue-rotate-270"
        />
        <div className="h-full absolute z-10 w-full bg-filter" />
        <HomeLogo className="mt-20 md:mt-10 text-xl w-[250px] md:text-3xl md:w-[360px] h-fit" />
        <div className="h-fit z-20 mt-8 md:mt-14">
          <motion.h1
            ref={titleBox}
            initial={{ x: -100, opacity: 0 }}
            className="text-white font-calya z-10 text-xl md:text-5xl"
          >
            Nossos diferenciais
          </motion.h1>
          <motion.div
            ref={underline}
            initial={{
              x: -100,
              opacity: 0,
            }}
            className="h-1 w-16 bg-picoLightGreen md:w-full"
          />
        </div>
      </div>
      <div className="w-screen min-h-screen flex flex-col items-start bg-darkbg overflow-x-hidden padding-pages pt-0 overflow-hidden">
        <div className="h-[450px] w-full flex">
          <div className="w-6/12 h-full flex justify-center bg-picoLightGreen rounded-b-xl">
            <ArrowIcon classNames="rotate-90 w-[28rem] blue-gradient" />
            <ArrowIcon classNames="rotate-90 w-[28rem] blue-gradient" />
          </div>
          <div className="w-6/12 h-full flex flex-col justify-center items-center text-2xl px-14 font-montserrat font-light text-justify gap-5 bg-picoLightGreen text-darkbg rounded-b-xl">
            <div className="bg-darkbg rounded-full p-2">
              <img
                src={'/icons/creative-highlight.png'}
                alt={'creative'}
                className="h-12 w-12"
              />
            </div>
            Não nos limitamos somente a monitorar o mercado financeiro, fornecer
            recomendações de investimento e gerenciar o seu portfólio de ativos.
          </div>
        </div>
        <div className="h-[450px] w-full flex">
          <div className="w-6/12 h-full flex flex-col justify-center items-center text-2xl px-14 font-montserrat font-light text-justify gap-5 bg-darkbg text-white rounded-xl">
            <div className="bg-picoLightBlue rounded-full p-4 bg-opacity-30">
              <img
                src={'/icons/validating-ticket-highlight.png'}
                alt={'creative'}
                className="h-10 w-10"
              />
            </div>
            Apoiamos os nossos Clientes no cumprimento de suas obrigações
            fiscais, inclusive na apuração de ganhos de capital dentro e fora da
            bolsa, naemissão de guias para pagamento de impostos devidos e na
            entrega das declarações tributárias.
          </div>
          <div className="w-6/12 h-full flex justify-center items-center bg-darkbg rounded-xl overflow-hidden">
            {/* <ArrowIcon classNames="-rotate-90 w-[28rem] green-gradient" />
            <ArrowIcon classNames="-rotate-90 w-[28rem] green-gradient" /> */}
            <PicoIconNoPulse className="fill-picoLightBlue w-full h-full scale-[3]" />
          </div>
        </div>
        <div className="h-[450px] w-full flex">
          <div className="w-6/12 h-full flex justify-center items-center flex-col bg-picoLightGreen rounded-xl overflow-hidden">
            <ArrowIcon classNames=" w-[32rem] blue-gradient" />
            <ArrowIcon classNames=" w-[32rem] blue-gradient" />
          </div>
          <div className="w-6/12 h-full flex flex-col justify-center items-center text-2xl px-14 font-montserrat font-light text-justify gap-5 bg-picoLightGreen text-darkbg rounded-xl">
            <div className="bg-darkbg rounded-full p-2">
              <img
                src={'/icons/creative-highlight.png'}
                alt={'creative'}
                className="h-12 w-12"
              />
            </div>
            Não nos limitamos somente a monitorar o mercado financeiro, fornecer
            recomendações de investimento e gerenciar o seu portfólio de ativos.
          </div>
        </div>
        <div className="h-[450px] w-full flex bg-picoLightBlue">
          <div className="w-6/12 h-full flex flex-col justify-center items-center text-2xl px-14 font-montserrat font-light text-justify gap-5 text-white rounded-xl">
            <div className="bg-picoLightBlue rounded-full p-4 bg-opacity-30">
              <img
                src={'/icons/validating-ticket-highlight.png'}
                alt={'creative'}
                className="h-10 w-10"
              />
            </div>
            Apoiamos os nossos Clientes no cumprimento de suas obrigações
            fiscais, inclusive na apuração de ganhos de capital dentro e fora da
            bolsa, naemissão de guias para pagamento de impostos devidos e na
            entrega das declarações tributárias.
          </div>
          <div className="relative w-6/12 h-full rounded-xl">
            {/* <ArrowIcon classNames="-rotate-90 w-[28rem] green-gradient" />
            <ArrowIcon classNames="-rotate-90 w-[28rem] green-gradient" /> */}
            <PicoIconNoPulse className="fill-darkbg scale-[0.6] absolute" />
            <PicoIconNoPulse className="fill-darkbg scale-[0.6] absolute" />
            <PicoIconNoPulse className="fill-darkbg scale-[0.6] absolute" />
            <PicoIconNoPulse className="fill-darkbg scale-[0.6] absolute" />
            <PicoIconNoPulse className="fill-darkbg scale-[0.6] absolute" />
          </div>
        </div>
      </div>
    </>
    // <div className="h-auto w-full flex flex-col overflow-x-hidden">
    // </div>
  );
};

export default NossosDiferenciais;
