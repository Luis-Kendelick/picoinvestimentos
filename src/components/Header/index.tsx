import { PicoIconPulse } from '../PicoIcon';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from '../ui/drawer';
import { MenuIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  console.log("🚀 ~ Header ~ menuIsOpen:", menuIsOpen)
  return (
    <header className="w-full flex flex-row items-center justify-center py-2 md:py-5 z-40 fixed top-0 backdrop-blur-md">
      <nav className="flex grid-flow-row items-center">
        <ul className="flex space-x-0 md:space-x-14 items-center font-normal text-sm w-fit justify-self-center">
          <li>
            <a
              href="#home"
              className="text-white hover:text-gray-300 hidden md:flex"
            >
              SOBRE
            </a>
          </li>
          <li>
            <a
              href="#about"
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
          <li className="w-14">
            {!menuIsOpen && <PicoIconPulse />}
          </li>
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
              CONTATO
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
          <Drawer direction="bottom" onOpenChange={() => setMenuIsOpen(!menuIsOpen)}>
            <DrawerTrigger>
              <MenuIcon size={40} className="text-white stroke-1" />
            </DrawerTrigger>
            <DrawerContent className="bg-darkbg justify-center flex items-center">
              <DrawerHeader className='flex items-center flex-col py-10'>
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -300,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 20,
                    delay: 0.2,
                  }}
                  className="flex items-center justify-center h-20 w-20 mb-20"
                >
                  <PicoIconPulse />
                </motion.div>
                <ul className="flex flex-col space-y-5 items-center justify-center font-montserrat gap-4 py-4">
                  <li>
                    <a href="#home" className="text-white hover:text-gray-300">
                      SOBRE
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
                      href="#diferenciais"
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
                      CONTATO
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
