import Header from '@/components/Header';
import HomeLogo from '@/components/HomeLogo';
import { PicoIconNoPulse } from '@/components/PicoIcon';
import FifthSection from '@/sections/FifthSection';
import FourthSection from '@/sections/FourthSection';
import SecondSection from '@/sections/SecondSection';
import SixthSection from '@/sections/SixthSection';
import ThirdSection from '@/sections/ThirdSection';

const Home = () => {
  return (
    <>
      <Header />
      <div className="w-screen h-screen relative flex justify-center items-center">
        <img
          src="/images/pico-imagem-improved.webp"
          alt="Pico"
          className="h-full w-full object-cover z-0 absolute filter grayscale brightness-150 hue-rotate-270"
        />
        <div className="h-full absolute z-10 w-full bg-filter" />
        <HomeLogo className='text-2xl md:text-7xl md:w-[800px]' />
      </div>
      <SecondSection />
      <div className="z-30 absolute opacity-25 overflow-hidden w-full md:w-full h-fit top-[700px] md:top-[800px] md:left-[60%]">
        <div className="w-[200%] md:w-[900px] md:aspect-auto fill-current skew-x-3">
          <PicoIconNoPulse />
        </div>
      </div>
      <div className="z-0 rotate-180 absolute opacity-25 overflow-hidden w-full md:w-full h-fit top-[700px] md:top-[990px] md:-left-[70%] invisible md:visible">
        <div className="w-[200%] md:w-[900px] md:aspect-auto fill-picoLightGreen skew-x-3">
          <PicoIconNoPulse />
        </div>
      </div>
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
    </>
  );
};

export default Home;
