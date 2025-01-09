import Header from '@/components/Header';
import HomeLogo from '@/components/HomeLogo';
import { useAnimate } from 'framer-motion';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import YoutubeEmbed from '@/components/EmbedVideo';
import { DownloadIcon } from 'lucide-react';
import { downloadPDF, listProjectPDFs } from '@/lib/utils';

const Insights = () => {
  const [titleBox, animateTitleBox] = useAnimate();
  const [logo, animateLogo] = useAnimate();
  const [underline, animateUnderline] = useAnimate();
  const [pdfs, setPdfs] = useState<{ name: string | undefined; path: string }[]>([]);

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

  useEffect(() => {
    setPdfs(listProjectPDFs());
  }, []);

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
        <HomeLogo onClick={() => window.open('/', '_self')} className="mt-20 md:mt-10 text-xl w-[250px] md:text-3xl md:w-[360px] h-fit" />
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
      <div className="w-screen min-h-screen flex flex-col items-center bg-darkbg overflow-x-hidden padding-pages px-6">
        <h2 className="font-calya text-2xl md:text-3xl text-center justify-center">
          Explore os nossos{window.innerWidth < 765 && <br />} relatórios e vídeos! <br /> Descubra como podemos
          contribuir para que você alcance seus objetivos financeiros.
        </h2>
        <div className='flex gap-5 flex-wrap justify-center w-full mb-8 mt-4'>
          {/* <div className="max-w-full md:max-w-[45%] relative border-4 w-full aspect-video mt-10 rounded-2xl border-picoLightGreen flex justify-center items-center">
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
          </div> */}
          <div className='w-full flex flex-col items-center mt-3'>
            <h2 className='font-calya text-xl md:text-2xl text-center justify-center'>Vídeos</h2>
            <div className='bg-picoLightGreen w-11/12 h-1 mt-4' />
          </div>
          <div className='flex justify-around flex-wrap w-full gap-5'>
            <div className='bg-picoLightGreen rounded-md p-1 sm:p-3 w-full md:max-w-[49%] relative'>
              <h2 className='text-picoLightBlue font-semibold mb-1 ml-2 sm:mb-2 sm:ml-0 text-sm sm:text-xl'>Pico Investimentos - Apresentação</h2>
              <YoutubeEmbed embedId="Cz0uSfptbWk" />
              {/* <Circle fill='red' color='red' className='absolute top-0 right-0 h-3 animate-pulse' /> */}
            </div>
            <div className='bg-picoLightGreen rounded-md p-1 sm:p-3 w-full md:max-w-[49%]'>
              <h2 className='text-picoLightBlue font-semibold mb-1 ml-2 sm:mb-2 sm:ml-0 text-sm sm:text-xl'>Pico Investimentos - Tesouro Direto</h2>
              <YoutubeEmbed embedId="xQrzWm8z4G4" />
            </div>
            <div className='bg-picoLightGreen rounded-md p-1 sm:p-3 w-full md:max-w-[49%]'>
              <h2 className='text-picoLightBlue font-semibold mb-1 ml-2 sm:mb-2 sm:ml-0 text-sm sm:text-xl'>Pico Investimentos - Renda Fixa Passiva</h2>
              <YoutubeEmbed embedId="bavu-OBIyV8" />
            </div>
          </div>
          <div className='w-full flex flex-col items-center mt-3'>
            <h2 className='font-calya text-xl md:text-2xl text-center justify-center'>Relatórios</h2>
            <div className='bg-picoLightGreen w-11/12 h-1 mt-4' />
          </div>
          <div className='flex justify-around flex-wrap w-11/12 gap-5'>
            <div className='p-5 bg-slate-700 rounded-md cursor-pointer w-full md:max-w-[48%] flex justify-between items-center'>
              <p>Carta Mensal - Dezembro de 2024</p>
              <DownloadIcon className='h-7 w-7 p-1 transition-colors duration-200 hover:bg-slate-400 rounded-md' onClick={() => downloadPDF(pdfs.find(pdf => pdf.name === 'carta-mensal-12-24.pdf')?.path ?? '')} />
            </div>
            <div className='p-5 bg-slate-700 rounded-md cursor-pointer w-full md:max-w-[48%] flex justify-between items-center'>
              <p>Carta Mensal - Janeiro de 2025</p>
              <DownloadIcon className='h-7 w-7 p-1 transition-colors duration-200 hover:bg-slate-400 rounded-md' onClick={() => downloadPDF(pdfs.find(pdf => pdf.name === 'carta-mensal-01-25.pdf')?.path ?? '')} />
            </div>
          </div>
          <div className='w-full flex flex-col items-center mt-3'>
            <h2 className='font-calya text-xl md:text-2xl text-center justify-center'>Newsletter</h2>
            <div className='bg-picoLightGreen w-11/12 h-1 mt-4' />
          </div>
          <div className='flex justify-around flex-wrap w-full gap-5'>
            <div className='p-5 bg-slate-700 rounded-md cursor-pointer w-full md:max-w-[48%] flex justify-between items-center'>
              <p>Newsletter - Dezembro de 2024</p>
              <DownloadIcon className='h-7 w-7 p-1 transition-colors duration-200 hover:bg-slate-400 rounded-md' onClick={() => downloadPDF(pdfs.find(pdf => pdf.name === 'newsletter-12-24.pdf')?.path ?? '')} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Insights;
