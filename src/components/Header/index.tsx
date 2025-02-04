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
              href="/#about-us"
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
              href="/#nossa-abordagem"
              className="text-white hover:text-gray-300 hidden md:flex"
            >
              ABORDAGEM
            </a>
          </li>
          <li className="w-14" onClick={() => window.open('/', '_self')}>
            {!menuIsOpen && <PicoIconPulse />}
          </li>
          <li>
            <a
              href="/insights"
              className="text-white hover:text-gray-300 hidden md:flex"
            >
              INSIGHTS
            </a>
          </li>
          <li>
            <a
              href="/seja-cliente"
              className="text-white hover:text-gray-300 hidden md:flex"
            >
              SEJA CLIENTE
            </a>
          </li>
          <li>
            <a
              href="https://area-do-cliente.picoinvestimentos.com"
              target="_blank"
              className="text-white hover:text-gray-300 hidden md:flex"
            >
              ÁREA DO CLIENTE
            </a>
          </li>
        </ul>
        <div className="md:hidden w-fit absolute right-5 top-3">
          <Drawer
            direction="bottom"
            onOpenChange={() => setMenuIsOpen(!menuIsOpen)}
            open={menuIsOpen}
            disablePreventScroll
          >
            <DrawerTrigger>
              <MenuIcon size={40} className="text-white stroke-1" />
            </DrawerTrigger>
            <DrawerContent className="bg-darkbg justify-center flex items-center border-picoLightGreen border-[1px]">
              <XIcon
                size={30}
                className="fill-picoLightGreen stroke-picoLightGreen self-end mr-4 mt-2 border-[1px] rounded-md border-picoLightGreen absolute top-5"
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
                  onClick={() => window.open('/', '_self')}
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
                    <a
                      href="https://area-do-cliente.picoinvestimentos.com"
                      target="_blank"
                      className="text-white hover:text-gray-300"
                    >
                      ÁREA DO CLIENTE
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
                      onClick={() => {
                        setMenuIsOpen(false);
                        setTimeout(() => {
                          const section = document.getElementById('about-us');
                          if (section) {
                            section.scrollIntoView({
                              behavior: 'auto',
                              block: 'start',
                              inline: 'start',
                            });
                          }
                        }, 800);
                      }}
                      href="/#about-us"
                      className="text-white hover:text-gray-300"
                    >
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
                      href="/#nossa-abordagem"
                      onClick={() => {
                        setMenuIsOpen(false);
                        setTimeout(() => {
                          const section =
                            document.getElementById('nossa-abordagem');
                          if (section) {
                            const topPosition =
                              section.getBoundingClientRect().top +
                              window.pageYOffset;

                            // Adiciona um offset (por exemplo, 100px a mais)
                            const offset = 50;

                            // Faz o scroll até a posição do elemento menos o offset
                            window.scrollTo({
                              top: topPosition - offset,
                              behavior: 'smooth',
                            });
                          }
                        }, 800);
                      }}
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
                      href="/insights"
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
                      href="/seja-cliente"
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
