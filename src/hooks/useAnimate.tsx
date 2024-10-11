import { useInView } from 'react-intersection-observer';

const useAnimateLeft = (delay = 0, threshold = 0.1) => {
  const { ref, inView } = useInView({ threshold });

  const animation = {
    initial: { x: -100, opacity: 0 },
    animate: inView ? { x: 0, opacity: 1 } : undefined,
    transition: {
      type: 'spring',
      stiffness: 50,
      damping: 20,
      delay,
    },
  };

  return { ref, animation };
};

const useAnimateOpacity = (delay = 0, threshold = 0.1) => {
  const { ref, inView } = useInView({ threshold });

  const animation = {
    initial: { scale: 0.9, opacity: 0 },
    animate: inView ? { scale: 1, opacity: 1 } : undefined,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
      when: 'beforeChildren',
      delay,
    },
  };

  return { ref, animation };
};

export { useAnimateLeft, useAnimateOpacity };
