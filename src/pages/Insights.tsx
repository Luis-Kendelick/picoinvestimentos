import Header from '@/components/Header';
import HomeLogo from '@/components/HomeLogo';
import { useAnimate } from 'framer-motion';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { PlayCircleIcon } from 'lucide-react';

const Insights = () => {
  const [titleBox, animateTitleBox] = useAnimate();
  const [logo, animateLogo] = useAnimate();
  const [underline, animateUnderline] = useAnimate();

  useEffect(() => {
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
            className="text-white font-calya z-10 text-3xl md:text-5xl"
          >
            Insights
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
      <div className="w-screen min-h-screen flex flex-col items-center bg-darkbg overflow-x-hidden padding-pages overflow-hidden px-6">
        <h2 className="font-calya text-2xl md:text-3xl text-center justify-center">
          Explore os nossos<br /> relatórios e vídeos! <br /> Descubra como podemos
          contribuir para que você alcance seus objetivos financeiros
        </h2>
        <div className='flex gap-10 flex-wrap justify-center max-w-full'>
          <div className="max-w-full md:max-w-[45%] relative border-4 w-full aspect-video mt-10 rounded-2xl border-picoLightGreen flex justify-center items-center">
            <PlayCircleIcon className="aspect-square h-96 w-96 stroke-picoLightGreen opacity-20 animate-pulse" />
            <div className="w-full h-full absolute bg-picoLightBlue opacity-30" />
            <h2 className="isolate z-40 text-4xl md:text-7xl font-calya absolute h-full w-full flex text-center items-center justify-center">
              Em breve!
            </h2>
          </div>
          <div className="max-w-full md:max-w-[45%] relative border-4 w-full aspect-video mt-10 rounded-2xl border-picoLightGreen flex justify-center items-center">
            <PlayCircleIcon className="aspect-square h-96 w-96 stroke-picoLightGreen opacity-20 animate-pulse" />
            <div className="w-full h-full absolute bg-picoLightBlue opacity-30" />
            <h2 className="isolate z-40 text-4xl md:text-7xl font-calya absolute h-full w-full flex text-center items-center justify-center">
              Em breve!
            </h2>
          </div>
          <div className="max-w-full md:max-w-[45%] relative border-4 w-full aspect-video mt-10 rounded-2xl border-picoLightGreen flex justify-center items-center">
            <PlayCircleIcon className="aspect-square h-96 w-96 stroke-picoLightGreen opacity-20 animate-pulse" />
            <div className="w-full h-full absolute bg-picoLightBlue opacity-30" />
            <h2 className="isolate z-40 text-4xl md:text-7xl font-calya absolute h-full w-full flex text-center items-center justify-center">
              Em breve!
            </h2>
          </div>
          <div className="max-w-full md:max-w-[45%] relative border-4 w-full aspect-video mt-10 rounded-2xl border-picoLightGreen flex justify-center items-center">
            <PlayCircleIcon className="aspect-square h-96 w-96 stroke-picoLightGreen opacity-20 animate-pulse" />
            <div className="w-full h-full absolute bg-picoLightBlue opacity-30" />
            <h2 className="isolate z-40 text-4xl md:text-7xl font-calya absolute h-full w-full flex text-center items-center justify-center">
              Em breve!
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Insights;
