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
      <div className="w-screen min-h-screen flex flex-col items-start bg-darkbg overflow-x-hidden px-0 lg:padding-pages md:pt-0 overflow-hidden">
        <div className="h-fit md:h-[450px] w-full flex flex-col md:flex-row">
          <div className="w-full md:w-6/12 h-80 md:h-full flex justify-center bg-picoLightGreen rounded-b-xl opacity-70">
            <ArrowIcon classNames="rotate-90 w-[28rem] blue-gradient" />
            <ArrowIcon classNames="rotate-90 w-[28rem] blue-gradient" />
          </div>
          <div className="w-full md:w-6/12 h-full flex flex-col justify-center items-center text-2xl font-montserrat font-light text-justify gap-5 bg-picoLightGreen text-darkbg rounded-b-xl px-9 md:px-14 py-9 md:py-0">
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
        <div className="h-fit md:h-[450px] w-full flex flex-col-reverse md:flex-row">
          <div className="w-full md:w-6/12 h-full flex flex-col justify-center items-center text-lg xl:text-2xl font-montserrat font-light text-justify gap-5 text-white rounded-xl bg-picoLightBlue px-9 md:px-14 py-9 md:py-0">
            <div className="bg-darkbg rounded-full p-4 bg-opacity-30">
              <img
                src={'/icons/validating-ticket-highlight.png'}
                alt={'creative'}
                className="h-10 w-10"
              />
            </div>
            Apoiamos os nossos Clientes no cumprimento de suas obrigações
            fiscais, inclusive na apuração de ganhos de capital dentro e fora da
            bolsa, na emissão de guias para pagamento de impostos devidos e na
            entrega das declarações tributárias.
          </div>
          <div className="w-full md:w-6/12 h-full flex justify-center items-center bg-darkbg rounded-xl overflow-hidden opacity-70">
            {/* <ArrowIcon classNames="-rotate-90 w-[28rem] green-gradient" />
            <ArrowIcon classNames="-rotate-90 w-[28rem] green-gradient" /> */}
            <PicoIconNoPulse className="fill-picoLightBlue scale-[3.5]" />
          </div>
        </div>
        <div className="h-fit md:h-[450px] w-full flex flex-col md:flex-row">
          <div className="w-full md:w-6/12 h-96 md:h-full flex justify-center items-center flex-col bg-picoLightGreen rounded-xl overflow-hidden opacity-70">
            <ArrowIcon classNames=" w-[32rem] blue-gradient" />
            <ArrowIcon classNames=" w-[32rem] blue-gradient" />
          </div>
          <div className="w-full md:w-6/12 h-full flex flex-col justify-center items-center text-lg xl:text-2xl font-montserrat font-light text-justify gap-5 bg-picoLightGreen text-darkbg rounded-xl px-9 md:px-14 py-9 md:py-0">
            <div className="bg-darkbg rounded-full p-2">
              <img
                src={'/icons/goals-highlight.png'}
                alt={'creative'}
                className="h-12 w-12"
              />
            </div>
            A partir disso, buscamos antecipar eventuais adequações nas
            eleçãodos melhores ativos, sempre auxiliando os nossos Clientes na
            avaliação de benefícios, custos e riscos.
          </div>
        </div>
        <div className="h-fit md:h-[450px] w-full flex flex-col-reverse md:flex-row">
          <div className="w-full md:w-6/12 h-fit md:h-full flex flex-col justify-center items-center text-lg xl:text-2xl px-9 md:px-14 py-9 md:py-0 font-montserrat font-light text-justify gap-5 text-white rounded-xl bg-picoLightBlue">
            <div className="bg-darkbg rounded-full p-4 bg-opacity-30">
              <img
                src={'/icons/balance-highlight.png'}
                alt={'creative'}
                className="h-10 w-10"
              />
            </div>
            Diferentemente de outros agentes do mercado financeiro, atuamos em
            conjunto com advogados experientes, que monitoram as frequentes
            mudanças nas normas regulatórias e tributárias que afetamos
            planejamentos financeiros.
          </div>
          <div className="py-5 px-5 relative w-full md:w-6/12 h-96 md:h-full flex flex-wrap justify-center items-center bg-picoLightBlue rounded-xl opacity-70">
            <div className="exquisite-css border-4 border-darkbg rounded-xl h-full w-full flex flex-wrap justify-center items-center overflow-hidden py-2 bg-picoLightBlue">
              <div className="h-32 w-32 rotate-45">
                <PicoIconNoPulse className="fill-darkbg" />
              </div>
              <div className="h-32 w-32 rotate-90">
                <PicoIconNoPulse className="fill-darkbg" />
              </div>
              <div className="h-32 w-32">
                <PicoIconNoPulse className="fill-darkbg" />
              </div>
              <div className="h-32 w-32">
                <PicoIconNoPulse className="fill-darkbg" />
              </div>
              <div className="h-32 w-32">
                <PicoIconNoPulse className="fill-darkbg" />
              </div>
              <div className="h-32 w-32">
                <PicoIconNoPulse className="fill-darkbg" />
              </div>
              <div className="h-32 w-32">
                <PicoIconNoPulse className="fill-darkbg" />
              </div>
              <div className="h-32 w-32">
                <PicoIconNoPulse className="fill-darkbg" />
              </div>
              <div className="h-32 w-32">
                <PicoIconNoPulse className="fill-darkbg" />
              </div>
              <div className="h-32 w-32">
                <PicoIconNoPulse className="fill-darkbg" />
              </div>
              <div className="h-32 w-32">
                <PicoIconNoPulse className="fill-darkbg" />
              </div>
              <div className="h-32 w-32">
                <PicoIconNoPulse className="fill-darkbg" />
              </div>
              <div className="h-32 w-32">
                <PicoIconNoPulse className="fill-darkbg" />
              </div>
              <div className="h-32 w-32">
                <PicoIconNoPulse className="fill-darkbg" />
              </div>
              <div className="h-32 w-32">
                <PicoIconNoPulse className="fill-darkbg" />
              </div>
              <div className="h-32 w-32">
                <PicoIconNoPulse className="fill-darkbg" />
              </div>
              <div className="h-32 w-32">
                <PicoIconNoPulse className="fill-darkbg" />
              </div>
              <div className="h-32 w-32">
                <PicoIconNoPulse className="fill-darkbg" />
              </div>
              <div className="h-32 w-32">
                <PicoIconNoPulse className="fill-darkbg" />
              </div>
              <div className="h-32 w-32">
                <PicoIconNoPulse className="fill-darkbg" />
              </div>
              <div className="h-32 w-32">
                <PicoIconNoPulse className="fill-darkbg" />
              </div>
            </div>
          </div>
        </div>
        <div className="h-fit md:h-[450px] w-full flex flex-col md:flex-row">
          <div className="w-full md:w-6/12 h-96 md:h-full flex justify-center items-center flex-col bg-gradient-to-r from-picoLightGreen to-darkbg rounded-xl overflow-hidden opacity-70">
            <ArrowIcon classNames=" w-[32rem] crazy-gradient" />
          </div>
          <div className="w-full md:w-6/12 h-full flex flex-col justify-center items-center text-lg xl:text-2xl font-montserrat font-light text-justify gap-5 bg-picoLightGreen text-darkbg rounded-xl px-9 md:px-14 py-9 md:py-0">
            <div className="bg-darkbg rounded-full p-4">
              <img
                src={'/icons/business-strategy-highlight.png'}
                alt={'creative'}
                className="h-12 w-12"
              />
            </div>
            <h2>
              Com este pensamento estratégico, a <strong className='font-bold'>Pico</strong> coloca
              você à frente de qualquer situação que possa ocorrer.
            </h2>
          </div>
        </div>
      </div>
    </>
    // <div className="h-auto w-full flex flex-col overflow-x-hidden">
    // </div>
  );
};

export default NossosDiferenciais;
