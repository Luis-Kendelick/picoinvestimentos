import { motion, useScroll, useTransform } from 'framer-motion';
import { PicoIconExtendedPulseHome } from '../PicoIcon';
import { useState } from 'react';
import clsx from 'clsx';

const HomeLogo = ({ className, onClick }: { className?: string, onClick?: () => void }) => {
  const [initialAnimationDone, setInitialAnimationDone] = useState(false);
  const { scrollYProgress } = useScroll();

  const fasterY = useTransform(
    scrollYProgress,
    window.innerWidth < 765 ? [0, 7] : [0, 3],
    window.innerWidth < 765 ? [0, -3000] : [0, -1500],
  );
  const fadeOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <motion.div
      initial={{ y: 350, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 50,
        damping: 20,
        duration: 0.8,
        onComplete: () => setInitialAnimationDone(true),
      }}
      style={{ y: fasterY, opacity: initialAnimationDone ? fadeOpacity : 1 }}
      className={clsx('w-72 z-20 ', className)}
      onClick={onClick}
    >
      <div className="w-full gap-4 flex justify-center items-center cursor-pointer hover:opacity-80 skew-x-1">
        <PicoIconExtendedPulseHome />
        <div className="text-start w-fit flex flex-col">
          <h1 className="text-white m-0 font-calya font-extralight">PICO</h1>
          <h1 className="text-white m-0 font-calya">INVESTIMENTOS</h1>
        </div>
      </div>
    </motion.div>
  );
};

export default HomeLogo;
