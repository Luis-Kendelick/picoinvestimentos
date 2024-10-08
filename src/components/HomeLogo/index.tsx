import { motion, useScroll, useTransform } from 'framer-motion';
import { PicoIconExtendedPulseHome } from '../PicoIcon';
import { useState } from 'react';

const HomeLogo = () => {
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
      className="w-72 md:w-[800px] z-20"
    >
      <PicoIconExtendedPulseHome />
    </motion.div>
  );
};

export default HomeLogo;
