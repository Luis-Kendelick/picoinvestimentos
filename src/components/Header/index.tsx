import { PicoIconPulse } from '../PicoIcon';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from '../ui/drawer';
import { MenuIcon, XIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <header className="w-full flex flex-row items-center justify-center py-2 md:py-5 z-50 fixed top-0 backdrop-blur-md">
      <nav className="flex grid-flow-row items-center">
        <ul className="flex space-x-0 md:space-x-14 items-center font-normal text-sm w-fit justify-self-center">
          <li>
            <a
              href="/"
              className="text-white hover:text-gray-300 hidden md:flex"
            >
              SOBRE NÓS
            </a>
          </li>
          <li>
            <a
              href="/nossos-diferenciais"
              className="text-white hover:text-gray-300 hidden md:flex"
            >
              DIFERENCIAIS
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="text-white hover:text-gray-300 hidden md:flex"
            >
              ABORDAGEM
            </a>
          </li>
          <li className="w-14">{!menuIsOpen && <PicoIconPulse />}</li>
          <li>
            <a
              href="#contact"
              className="text-white hover:text-gray-300 hidden md:flex"
            >
              INSIGHTS
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-white hover:text-gray-300 hidden md:flex"
            >
              SEJA CLIENTE
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-white hover:text-gray-300 hidden md:flex"
            >
              SIMULAÇÃO
            </a>
          </li>
        </ul>
        <div className="md:hidden w-fit absolute right-5 top-3">
          <Drawer
            direction="bottom"
            onOpenChange={() => setMenuIsOpen(!menuIsOpen)}
            open={menuIsOpen}
          >
            <DrawerTrigger>
              <MenuIcon size={40} className="text-white stroke-1" />
            </DrawerTrigger>
            <DrawerContent className="bg-darkbg justify-center flex items-center border-picoLightGreen border-[1px]">
              <XIcon
                size={30}
                className="fill-picoLightGreen stroke-picoLightGreen self-end mr-4 mt-2 border-[1px] rounded-md border-picoLightGreen"
                onClick={() => setMenuIsOpen(false)}
              />
              <DrawerHeader className="flex items-center flex-col py-10">
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -300,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 20,
                    delay: 0.2,
                  }}
                  exit={{
                    y: -800,
                    x: 40,
                  }}
                  className="flex flex-row items-center justify-center h-20 w-60 gap-5"
                >
                  <PicoIconPulse />
                  <div>
                    <h1 className="text-white text-2xl font-calya text-left">
                      Pico
                    </h1>
                    <h1 className="text-white text-2xl font-calya -mt-1">
                      Investimentos
                    </h1>
                  </div>
                </motion.div>
                <ul className="mt-10 flex flex-col space-y-5 items-center justify-center font-montserrat gap-3 py-4">
                  <li>
                    <a href="/" className="text-white hover:text-gray-300">
                      SOBRE NÓS
                    </a>
                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      animate={{
                        width: '100%',
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 100,
                        damping: 20,
                        delay: 0.2,
                      }}
                      className="w-full h-[1px] bg-picoLightGreen"
                    />
                  </li>
                  <li>
                    <a
                      href="/nossos-diferenciais"
                      className="text-white hover:text-gray-300"
                    >
                      DIFERENCIAIS
                    </a>
                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      animate={{
                        width: '100%',
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 100,
                        damping: 20,
                        delay: 0.2,
                      }}
                      className="w-full h-[1px] bg-picoLightGreen"
                    />
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="text-white hover:text-gray-300"
                    >
                      ABORDAGEM
                    </a>
                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      animate={{
                        width: '100%',
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 100,
                        damping: 20,
                        delay: 0.2,
                      }}
                      className="w-full h-[1px] bg-picoLightGreen"
                    />
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="text-white hover:text-gray-300"
                    >
                      INSIGHTS
                    </a>
                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      animate={{
                        width: '100%',
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 100,
                        damping: 20,
                        delay: 0.2,
                      }}
                      className="w-full h-[1px] bg-picoLightGreen"
                    />
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="text-white hover:text-gray-300"
                    >
                      SEJA CLIENTE
                    </a>
                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      animate={{
                        width: '100%',
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 100,
                        damping: 20,
                        delay: 0.2,
                      }}
                      className="w-full h-[1px] bg-picoLightGreen"
                    />
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="text-white hover:text-gray-300"
                    >
                      SIMULAÇÃO
                    </a>
                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      animate={{
                        width: '100%',
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 100,
                        damping: 20,
                        delay: 0.2,
                      }}
                      className="w-full h-[1px] bg-picoLightGreen"
                    />
                  </li>
                </ul>
              </DrawerHeader>
            </DrawerContent>
          </Drawer>
        </div>
      </nav>
    </header>
  );
};

export default Header;
