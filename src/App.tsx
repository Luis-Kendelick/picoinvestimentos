// import { ThemeProvider } from '@/components/shells/theme-provider';
// import Router from './pages/router';
import Header from './components/Header';
import './App.css';
import HomeLogo from './components/HomeLogo';
import SecondSection from './sections/SecondSection';
import ThirdSection from './sections/ThirdSection';
import { PicoIconNoPulse } from './components/PicoIcon';

const App = () => {
  return (
    <>
      <Header />
      <div className="w-screen h-screen relative flex justify-center items-center">
        <img
          src="/src/assets/images/pico-imagem-improved.webp"
          alt="Pico"
          className="h-full w-full object-cover z-0 absolute filter grayscale brightness-150 hue-rotate-270"
        />
        <div className="h-full absolute z-10 w-full bg-filter" />
        <HomeLogo />
      </div>
      <SecondSection />
      <div className="z-50 absolute opacity-25 overflow-hidden w-full md:w-full h-fit top-[700px] md:top-[800px] md:left-[1100px]">
        <div className="w-[200%] md:w-[900px] md:aspect-auto fill-current skew-x-3">
          <PicoIconNoPulse />
        </div>
      </div>
      <div className="z-0 rotate-180 absolute opacity-25 overflow-hidden w-full md:w-full h-fit top-[700px] md:top-[1090px] md:-left-[1100px] invisible md:visible">
        <div className="w-[200%] md:w-[900px] md:aspect-auto fill-picoLightGreen skew-x-3">
          <PicoIconNoPulse />
        </div>
      </div>
      <ThirdSection />
    </>
    // <div className="h-auto w-full flex flex-col overflow-x-hidden">
    // </div>
  );
};

export default App;
