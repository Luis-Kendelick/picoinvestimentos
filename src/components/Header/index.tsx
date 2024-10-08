import { PicoIconPulse } from '../PicoIcon';

const Header = () => {
  return (
    <header className="w-full flex flex-wrap items-center justify-center py-2 md:py-5 z-40 fixed top-0 backdrop-blur-md">
      <nav className="flex items-center">
        <ul className="flex space-x-14 items-center font-normal text-sm">
          <li>
            <a href="#home" className="text-white hover:text-gray-300 hidden md:flex">
              SOBRE
            </a>
          </li>
          <li>
            <a href="#about" className="text-white hover:text-gray-300 hidden md:flex">
              DIFERENCIAIS
            </a>
          </li>
          <li>
            <a href="#services" className="text-white hover:text-gray-300 hidden md:flex">
              ABORDAGEM
            </a>
          </li>
          <li className="w-14">
            <PicoIconPulse />
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-gray-300 hidden md:flex">
              INSIGHTS
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-gray-300 hidden md:flex">
              CONTATO
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-gray-300 hidden md:flex">
              SIMULAÇÃO
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
