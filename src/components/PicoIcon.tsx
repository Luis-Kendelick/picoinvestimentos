// import { EMenuItems } from '@/lib/utils';
import { motion, Transition, Variants } from 'framer-motion';
import { useState } from 'react';

export const PicoIconExtendedPulseHome = () => {
  const animation: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  const transition: Transition = {
    duration: 1.2,
    ease: 'linear',
    delay: 1.1,
  };
  return (
    <div className="w-full gap-4 flex justify-center items-center cursor-pointer hover:opacity-80 skew-x-1">
      <motion.svg
        xmlns={'http://www.w3.org/2000/svg'}
        width={'100%'}
        height={'100%'}
        viewBox={'0 0 1600 1300'}
        variants={animation}
        initial="hidden"
        animate="visible"
        transition={transition}
      >
        <path
          fill={'rgba(255, 255, 255, 1)'}
          d="m21.77,981.15l112.64,108.6c15.24,14.99 40.06,15.04 55.41,0.16l157.88,-153.18c15.24,-14.83 35.77,-18.89 51.01,-4.07l181.27,175.93c15.3,14.83 40.01,14.83 55.25,0l346.24,-331.57c15.24,-14.83 15.24,-38.91 0,-53.79l-149.29,-145.2c-15.3,-14.88 -40.06,-14.83 -55.3,0l-169.98,160.46c-15.24,14.88 -37.91,16.91 -53.16,2.09l-144.07,-139.8c-15.3,-14.83 -33.73,-16.86 -49.03,-1.98l-344.81,325.52c-15.19,14.83 -9.19,41.91 5.94,56.73l0,0.11z"
        />
        <path
          fill={'rgba(255, 255, 255, 1)'}
          d="m441.75,576.69l111.87,110.9c15.3,14.88 40.17,14.83 55.41,-0.16l169.76,-162.76c15.24,-14.93 37.91,-17.07 53.27,-2.25l180.44,174.69c15.24,14.72 39.84,14.77 55.08,0.05l110.17,-106.03c15.41,-14.83 15.46,-39.02 0.11,-53.95l-348.06,-335.9c-15.3,-14.88 -31.26,-15.15 -46.5,-0.21l-341.68,321.93c-15.19,14.88 -15.13,38.86 0.11,53.68z"
        />
        <path
          fill={'rgba(255, 255, 255, 1)'}
          d="m864.38,985.27l116.11,112.93c15.3,14.88 33.9,14.83 49.14,-0.16l171.91,-164.79c15.24,-14.93 37.91,-17.07 53.27,-2.25l169.93,164.47c15.24,14.72 37.69,16.81 52.99,2.14l110.17,-106.03c15.41,-14.83 17.55,-39.02 2.2,-53.95l-337.55,-325.68c-15.3,-14.88 -40.12,-14.83 -55.36,0.11l-332.87,319.58c-15.19,14.88 -15.13,38.86 0.11,53.68l-0.06,-0.05z"
        />
      </motion.svg>
      <div className="text-start w-fit flex flex-col text-2xl md:text-7xl">
        <h1 className="text-white m-0 font-calya font-extralight">PICO</h1>
        <h1 className="text-white m-0 font-calya">INVESTIMENTOS</h1>
      </div>
    </div>
  );
};

export const PicoIconPulse = () => {
  const [animation, _] = useState({
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: 'rgba(255, 255, 255, 0)',
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: 'rgba(255, 255, 255, 1)',
    },
  });

  return (
    <div className="w-full flex justify-center items-center cursor-pointer hover:opacity-80 skew-x-1">
      <motion.svg
        xmlns={'http://www.w3.org/2000/svg'}
        viewBox={'0 0 1600 1300'}
        width={'100%'}
        height={'100%'}
      >
        <motion.path
          variants={animation}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 1.5, // Duração de um ciclo completo da pulsação
            repeat: Infinity, // Repetir infinitamente
            ease: 'easeInOut', // Suavização da animação
            repeatType: 'mirror', // Tipo de repetição
          }}
          className="cls-1"
          d="m21.77,981.15l112.64,108.6c15.24,14.99 40.06,15.04 55.41,0.16l157.88,-153.18c15.24,-14.83 35.77,-18.89 51.01,-4.07l181.27,175.93c15.3,14.83 40.01,14.83 55.25,0l346.24,-331.57c15.24,-14.83 15.24,-38.91 0,-53.79l-149.29,-145.2c-15.3,-14.88 -40.06,-14.83 -55.3,0l-169.98,160.46c-15.24,14.88 -37.91,16.91 -53.16,2.09l-144.07,-139.8c-15.3,-14.83 -33.73,-16.86 -49.03,-1.98l-344.81,325.52c-15.19,14.83 -9.19,41.91 5.94,56.73l0,0.11z"
        />
        <motion.path
          variants={animation}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 1.5, // Duração de um ciclo completo da pulsação
            repeat: Infinity, // Repetir infinitamente
            ease: 'easeInOut', // Suavização da animação
            repeatType: 'mirror', // Tipo de repetição
            delay: 0.2,
          }}
          className="cls-1"
          d="m441.75,576.69l111.87,110.9c15.3,14.88 40.17,14.83 55.41,-0.16l169.76,-162.76c15.24,-14.93 37.91,-17.07 53.27,-2.25l180.44,174.69c15.24,14.72 39.84,14.77 55.08,0.05l110.17,-106.03c15.41,-14.83 15.46,-39.02 0.11,-53.95l-348.06,-335.9c-15.3,-14.88 -31.26,-15.15 -46.5,-0.21l-341.68,321.93c-15.19,14.88 -15.13,38.86 0.11,53.68z"
        />
        <motion.path
          variants={animation}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 1.5, // Duração de um ciclo completo da pulsação
            repeat: Infinity, // Repetir infinitamente
            ease: 'easeInOut', // Suavização da animação
            repeatType: 'mirror', // Tipo de repetição
            delay: 0.4,
          }}
          className="cls-1"
          d="m864.38,985.27l116.11,112.93c15.3,14.88 33.9,14.83 49.14,-0.16l171.91,-164.79c15.24,-14.93 37.91,-17.07 53.27,-2.25l169.93,164.47c15.24,14.72 37.69,16.81 52.99,2.14l110.17,-106.03c15.41,-14.83 17.55,-39.02 2.2,-53.95l-337.55,-325.68c-15.3,-14.88 -40.12,-14.83 -55.36,0.11l-332.87,319.58c-15.19,14.88 -15.13,38.86 0.11,53.68l-0.06,-0.05z"
        />
      </motion.svg>
    </div>
  );
};

export const PicoIconNoPulse = () => {
  return (
    <div className="w-full flex justify-center items-center skew-x-1">
      <svg
        xmlns={'http://www.w3.org/2000/svg'}
        viewBox={'0 0 1600 1300'}
        preserveAspectRatio="xMidYMid meet"
        width={'100%'}
        height={'100%'}
      >
        <path
          d="m21.77,981.15l112.64,108.6c15.24,14.99 40.06,15.04 55.41,0.16l157.88,-153.18c15.24,-14.83 35.77,-18.89 51.01,-4.07l181.27,175.93c15.3,14.83 40.01,14.83 55.25,0l346.24,-331.57c15.24,-14.83 15.24,-38.91 0,-53.79l-149.29,-145.2c-15.3,-14.88 -40.06,-14.83 -55.3,0l-169.98,160.46c-15.24,14.88 -37.91,16.91 -53.16,2.09l-144.07,-139.8c-15.3,-14.83 -33.73,-16.86 -49.03,-1.98l-344.81,325.52c-15.19,14.83 -9.19,41.91 5.94,56.73l0,0.11z"
        />
        <path
          d="m441.75,576.69l111.87,110.9c15.3,14.88 40.17,14.83 55.41,-0.16l169.76,-162.76c15.24,-14.93 37.91,-17.07 53.27,-2.25l180.44,174.69c15.24,14.72 39.84,14.77 55.08,0.05l110.17,-106.03c15.41,-14.83 15.46,-39.02 0.11,-53.95l-348.06,-335.9c-15.3,-14.88 -31.26,-15.15 -46.5,-0.21l-341.68,321.93c-15.19,14.88 -15.13,38.86 0.11,53.68z"
        />
        <path
          d="m864.38,985.27l116.11,112.93c15.3,14.88 33.9,14.83 49.14,-0.16l171.91,-164.79c15.24,-14.93 37.91,-17.07 53.27,-2.25l169.93,164.47c15.24,14.72 37.69,16.81 52.99,2.14l110.17,-106.03c15.41,-14.83 17.55,-39.02 2.2,-53.95l-337.55,-325.68c-15.3,-14.88 -40.12,-14.83 -55.36,0.11l-332.87,319.58c-15.19,14.88 -15.13,38.86 0.11,53.68l-0.06,-0.05z"
        />
      </svg>
    </div>
  );
};

export const ArrowIcon = ({classNames}: {classNames?: string}) => {
  return (
    <div
      // onClick={() => navigate(EMenuItems.HOME)}
      className={"w-full flex justify-center items-center cursor-pointer hover:opacity-80 " + classNames}
    >
      <motion.svg
        xmlns={'http://www.w3.org/2000/svg'}
        width='100%'
        height='100%'
        viewBox={'420 180 780 540'}
      >
        <path
          className="cls-1"
          d="m441.75,576.69l111.87,110.9c15.3,14.88 40.17,14.83 55.41,-0.16l169.76,-162.76c15.24,-14.93 37.91,-17.07 53.27,-2.25l180.44,174.69c15.24,14.72 39.84,14.77 55.08,0.05l110.17,-106.03c15.41,-14.83 15.46,-39.02 0.11,-53.95l-348.06,-335.9c-15.3,-14.88 -31.26,-15.15 -46.5,-0.21l-341.68,321.93c-15.19,14.88 -15.13,38.86 0.11,53.68z"
        />
      </motion.svg>
    </div>
  );
};

export const ExtendedLogo = () => {
  return (
    <div className="flex justify-center w-full h-fit">
      <motion.svg
        width="auto"
        height="auto"
        viewBox="0 0 1174 174"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>pico-logo-extended</title>

        <g>
          <title>Layer 1</title>
          <g>
            <desc>Created with Fabric.js 3.6.6</desc>

            <g transform="matrix(1 0 0 1 587.72 87.92)">
              <g>
                <g id="svg_1" transform="matrix(1 0 0 1 -231.07 -47)">
                  <motion.path
                    fillRule="nonzero"
                    fill="rgb(239,239,239)"
                    strokeMiterlimit="4"
                    strokeLinejoin="miter"
                    strokeDashoffset="0"
                    strokeDasharray="none"
                    stroke=" none"
                    strokeLinecap="butt"
                    d="m564.40439,574.01883c6.09,0 11.57,0.46 16.44,1.36c4.87,0.91 9.02,2.26 12.45,4.04c3.43,1.79 6.07,4.01 7.93,6.67c1.85,2.66 2.78,5.78 2.78,9.35s-0.93,6.71 -2.78,9.4c-1.86,2.7 -4.5,4.94 -7.93,6.72c-3.43,1.79 -7.58,3.12 -12.45,3.99c-4.87,0.88 -10.35,1.31 -16.44,1.31l-3.47,0l0,30.88l-16.28,0l0,-61.23c0,-4.14 -0.4,-6.91 -1.21,-8.31c-0.81,-1.4 -1.94,-2.1 -3.41,-2.1l0,-2.1l24.37,0l0,0.02zm23.32,21.43c0,-3.17 -0.44,-5.86 -1.31,-8.08c-0.88,-2.22 -2.01,-4.05 -3.41,-5.49c-1.4,-1.44 -2.96,-2.55 -4.67,-3.33c-1.72,-0.77 -3.43,-1.34 -5.15,-1.69c-1.72,-0.35 -3.36,-0.56 -4.94,-0.63c-1.58,-0.07 -2.85,-0.11 -3.83,-0.11l-3.47,0l0,38.66l3.47,0c0.98,0 2.26,-0.03 3.83,-0.1c1.58,-0.07 3.22,-0.28 4.94,-0.63c1.71,-0.35 3.43,-0.92 5.15,-1.69c1.71,-0.77 3.27,-1.88 4.67,-3.33c1.4,-1.44 2.54,-3.26 3.41,-5.44c0.87,-2.18 1.31,-4.89 1.31,-8.13l0,-0.01z"
                    transform="translate(-572.64 -611.93)"
                  />
                </g>
                <g id="Layer_1" transform="matrix(1 0 0 1 -182.8 -46.97)">
                  <path
                    fillRule="nonzero"
                    fill="rgb(239,239,239)"
                    strokeMiterlimit="4"
                    strokeLinejoin="miter"
                    strokeDashoffset="0"
                    strokeDasharray="none"
                    stroke=" none"
                    strokeLinecap="butt"
                    d="m630.79439,574.01883l0,73.74l-16.28,0l0,-61.03c0,-4.2 -0.42,-7 -1.26,-8.4c-0.84,-1.4 -2,-2.1 -3.47,-2.1l0,-2.21l21.01,0z"
                    transform="translate(-620.91 -611.95)"
                  />
                </g>
                <g id="Layer_1" transform="matrix(1 0 0 1 -131.02 -46.98)">
                  <path
                    fillRule="nonzero"
                    fill="rgb(239,239,239)"
                    strokeMiterlimit="4"
                    strokeLinejoin="miter"
                    strokeDashoffset="0"
                    strokeDasharray="none"
                    stroke=" none"
                    strokeLinecap="butt"
                    d="m704.84439,574.01883l0.1,20.59l0.11,0l0,6.09l-2.1,0c0,-2.73 -0.6,-5.54 -1.79,-8.42c-1.19,-2.88 -2.94,-5.52 -5.25,-7.92c-2.31,-2.39 -5.13,-4.37 -8.46,-5.92c-3.33,-1.55 -7.16,-2.32 -11.5,-2.32c-2.87,0 -5.55,0.68 -8.04,2.05c-2.49,1.37 -4.66,3.47 -6.51,6.31c-1.86,2.84 -3.33,6.45 -4.41,10.84c-1.09,4.38 -1.63,9.56 -1.63,15.52s0.54,11.14 1.63,15.52c1.09,4.38 2.56,8 4.41,10.84c1.85,2.84 4.03,4.96 6.51,6.36c2.49,1.4 5.16,2.1 8.04,2.1c4.34,0 7.95,-0.61 10.82,-1.84c2.87,-1.23 5.2,-2.84 6.99,-4.83c1.79,-1.99 3.13,-4.31 4.04,-6.93c0.91,-2.63 1.61,-5.3 2.1,-8.04l5.15,4.73c-0.91,2.66 -2.21,5.15 -3.89,7.46c-1.68,2.31 -3.73,4.33 -6.15,6.04c-2.42,1.72 -5.22,3.06 -8.4,4.04c-3.19,0.98 -6.74,1.47 -10.66,1.47c-5.11,0 -9.91,-0.96 -14.39,-2.89c-4.48,-1.93 -8.39,-4.55 -11.71,-7.88c-3.33,-3.33 -5.95,-7.23 -7.88,-11.71c-1.93,-4.48 -2.89,-9.28 -2.89,-14.39s0.96,-9.8 2.89,-14.29c1.93,-4.48 4.55,-8.4 7.88,-11.77c3.32,-3.36 7.23,-6 11.71,-7.93c4.48,-1.93 9.28,-2.89 14.39,-2.89c3.57,0 6.72,0.31 9.45,0.95c0.77,0.14 2.1,0.39 3.99,0.73c1.89,0.35 3.82,0.6 5.78,0.73c1.96,0.14 3.69,0.07 5.2,-0.21c1.5,-0.28 2.26,-1.01 2.26,-2.21l2.21,0l0,0.02z"
                    transform="translate(-672.7 -611.94)"
                  />
                </g>
                <g id="Layer_1" transform="matrix(1 0 0 1 -52.75 -46.97)">
                  <path
                    fillRule="nonzero"
                    fill="rgb(239,239,239)"
                    strokeMiterlimit="4"
                    strokeLinejoin="miter"
                    strokeDashoffset="0"
                    strokeDasharray="none"
                    stroke=" none"
                    strokeLinecap="butt"
                    d="m750.33439,574.01883c5.11,0 9.91,0.96 14.39,2.89c4.48,1.93 8.39,4.55 11.71,7.88c3.32,3.33 5.95,7.23 7.88,11.71c1.93,4.48 2.89,9.28 2.89,14.39s-0.96,9.91 -2.89,14.39c-1.93,4.48 -4.55,8.39 -7.88,11.71c-3.33,3.33 -7.23,5.95 -11.71,7.88c-4.48,1.93 -9.28,2.89 -14.39,2.89s-9.91,-0.96 -14.39,-2.89c-4.48,-1.93 -8.39,-4.55 -11.71,-7.88c-3.33,-3.33 -5.95,-7.23 -7.88,-11.71c-1.93,-4.48 -2.89,-9.28 -2.89,-14.39s0.96,-9.91 2.89,-14.39c1.93,-4.48 4.55,-8.39 7.88,-11.71s7.23,-5.95 11.71,-7.88c4.48,-1.93 9.28,-2.89 14.39,-2.89zm0,2.1c-4.13,0 -7.51,0.91 -10.14,2.74s-4.73,4.31 -6.3,7.47c-1.58,3.16 -2.66,6.84 -3.26,11.05c-0.6,4.21 -0.89,8.7 -0.89,13.46s0.26,9.36 0.79,13.57s1.54,7.89 3.05,11.05c1.5,3.16 3.61,5.65 6.3,7.47c2.69,1.82 6.18,2.73 10.45,2.73s7.75,-0.91 10.45,-2.73c2.69,-1.82 4.8,-4.31 6.3,-7.47c1.5,-3.16 2.52,-6.84 3.05,-11.05s0.79,-8.73 0.79,-13.57s-0.3,-9.26 -0.89,-13.46c-0.6,-4.21 -1.68,-7.89 -3.26,-11.05c-1.58,-3.16 -3.69,-5.65 -6.36,-7.47c-2.66,-1.82 -6.02,-2.74 -10.08,-2.74z"
                    transform="translate(-750.96 -611.95)"
                  />
                </g>
                <g id="Layer_1" transform="matrix(1 0 0 1 -252.55 48.67)">
                  <path
                    fillRule="nonzero"
                    fill="rgb(239,239,239)"
                    strokeMiterlimit="4"
                    strokeLinejoin="miter"
                    strokeDashoffset="0"
                    strokeDasharray="none"
                    stroke=" none"
                    strokeLinecap="butt"
                    d="m561.04439,669.65883l0,73.74l-16.28,0l0,-61.03c0,-4.2 -0.42,-7 -1.26,-8.4c-0.84,-1.4 -2,-2.1 -3.47,-2.1l0,-2.21l21.01,0z"
                    transform="translate(-551.16 -707.59)"
                  />
                </g>
                <g id="Layer_1" transform="matrix(1 0 0 1 -200.82 48.66)">
                  <path
                    fillRule="nonzero"
                    fill="rgb(239,239,239)"
                    strokeMiterlimit="4"
                    strokeLinejoin="miter"
                    strokeDashoffset="0"
                    strokeDasharray="none"
                    stroke=" none"
                    strokeLinecap="butt"
                    d="m632.05439,739.98883c1.12,0.88 2.17,1.31 3.15,1.31l0,2.1l-21.01,0l-22.27,-38.45l-10.82,-18.59l0,57.04l-2.1,0l0,-60.72l-3.89,-6.62c-0.63,-1.12 -1.51,-2.1 -2.63,-2.94c-1.12,-0.84 -2.17,-1.26 -3.15,-1.26l0,-2.21l21.01,0l24.27,42.02l10.4,17.86l0,-59.88l2.1,0l0,63.55l2.31,3.89c0.63,1.05 1.51,2.01 2.63,2.89l0,0.01z"
                    transform="translate(-602.89 -707.58)"
                  />
                </g>
                <g id="Layer_1" transform="matrix(1 0 0 1 -135.07 48.67)">
                  <path
                    fillRule="nonzero"
                    fill="rgb(239,239,239)"
                    strokeMiterlimit="4"
                    strokeLinejoin="miter"
                    strokeDashoffset="0"
                    strokeDasharray="none"
                    stroke=" none"
                    strokeLinecap="butt"
                    d="m655.26439,669.65883l22.37,69.96l20.38,-69.96l2.31,0l-21.53,73.64l0,0.1l-19.54,0l-23.53,-73.74l19.54,0z"
                    transform="translate(-668.65 -707.59)"
                  />
                </g>
                <g id="Layer_1" transform="matrix(1 0 0 1 -65.58 48.64)">
                  <path
                    fillRule="nonzero"
                    fill="rgb(239,239,239)"
                    strokeMiterlimit="4"
                    strokeLinejoin="miter"
                    strokeDashoffset="0"
                    strokeDasharray="none"
                    stroke=" none"
                    strokeLinecap="butt"
                    d="m748.65439,720.60883c0,-2.73 -0.3,-5.02 -0.89,-6.88c-0.59,-1.86 -1.34,-3.36 -2.25,-4.52c-0.91,-1.16 -1.92,-1.98 -3.03,-2.47c-1.11,-0.49 -2.23,-0.74 -3.34,-0.74l-9.4,0l0,35.3l12.29,0c3.57,0 6.7,-0.1 9.4,-0.32c2.69,-0.21 4.97,-0.77 6.83,-1.68c1.86,-0.91 3.27,-2.29 4.25,-4.15c0.98,-1.85 1.54,-4.46 1.68,-7.83l0,-1.16l2.1,0.1l-0.21,15.65l0,1.47l-52.63,0l0,-61.12c0,-4.21 -0.42,-7.01 -1.26,-8.41c-0.84,-1.4 -2,-2.11 -3.47,-2.11l0,-2.1l57.36,0l0,1.6l0.21,15.52l-2.1,0.11l0,-1.16c-0.14,-3.36 -0.7,-5.97 -1.68,-7.83c-0.98,-1.85 -2.4,-3.24 -4.25,-4.15c-1.86,-0.91 -4.13,-1.47 -6.83,-1.68c-2.7,-0.21 -5.83,-0.32 -9.4,-0.32l-12.29,0l0,32.14l9.4,0c1.11,0 2.23,-0.24 3.34,-0.73c1.11,-0.49 2.12,-1.31 3.03,-2.47c0.91,-1.16 1.65,-2.68 2.25,-4.57c0.59,-1.89 0.89,-4.2 0.89,-6.93l2.1,0l0,31.41l-2.1,0l0,0.03z"
                    transform="translate(-738.13 -707.57)"
                  />
                </g>
                <g id="Layer_1" transform="matrix(1 0 0 1 4.6 48.65)">
                  <path
                    fillRule="nonzero"
                    fill="rgb(239,239,239)"
                    strokeMiterlimit="4"
                    strokeLinejoin="miter"
                    strokeDashoffset="0"
                    strokeDasharray="none"
                    stroke=" none"
                    strokeLinecap="butt"
                    d="m778.37439,743.39883l-0.21,-26.58l2.1,-0.1l0,1.36c0.07,3.15 0.45,6.13 1.16,8.93c0.7,2.8 2.03,5.25 3.99,7.35c1.96,2.1 4.71,3.78 8.25,5.04c3.53,1.26 8.21,1.89 14.02,1.89c6.51,0 11.34,-1.05 14.5,-3.15c3.15,-2.1 4.73,-4.62 4.73,-7.56c0,-2.52 -0.73,-4.73 -2.21,-6.62c-1.47,-1.89 -3.41,-3.59 -5.83,-5.09c-2.42,-1.5 -5.18,-2.89 -8.3,-4.15c-3.12,-1.26 -6.29,-2.52 -9.51,-3.78c-3.22,-1.26 -6.39,-2.57 -9.51,-3.94c-3.12,-1.36 -5.92,-2.89 -8.4,-4.57c-2.49,-1.68 -4.5,-3.61 -6.04,-5.78c-1.54,-2.17 -2.35,-4.69 -2.42,-7.56c-0.07,-2.59 0.7,-5.06 2.31,-7.41c1.61,-2.35 3.89,-4.41 6.83,-6.2c2.94,-1.79 6.51,-3.2 10.71,-4.26s8.82,-1.58 13.87,-1.58c1.12,0 2.45,0.02 3.99,0.05c1.54,0.04 3.19,0.16 4.94,0.37c1.82,0.21 3.75,0.44 5.78,0.68c2.03,0.25 3.92,0.4 5.67,0.47c1.75,0.07 3.26,0 4.52,-0.21c1.26,-0.21 2,-0.66 2.21,-1.37l2.1,0l0.32,26.58l-2.1,0l0,-1.26c-0.07,-3.15 -0.46,-6.13 -1.16,-8.93c-0.7,-2.8 -2.05,-5.25 -4.04,-7.35c-2,-2.1 -4.76,-3.78 -8.3,-5.04c-3.54,-1.26 -8.18,-1.89 -13.92,-1.89c-3.92,0 -7.27,0.26 -10.03,0.79c-2.77,0.53 -4.96,1.26 -6.57,2.21c-1.61,0.95 -2.71,2.03 -3.31,3.26c-0.6,1.23 -0.68,2.54 -0.26,3.94c0.56,2.03 1.77,3.82 3.62,5.36c1.86,1.54 4.06,2.95 6.62,4.21c2.56,1.26 5.39,2.45 8.51,3.58c3.12,1.12 6.23,2.3 9.35,3.52c3.12,1.23 6.15,2.6 9.09,4.1c2.94,1.51 5.55,3.25 7.83,5.21c2.27,1.96 4.1,4.26 5.46,6.89c1.37,2.63 2.01,5.7 1.94,9.2c0,2.6 -0.79,5.07 -2.36,7.42c-1.58,2.35 -3.82,4.4 -6.72,6.15c-2.91,1.75 -6.37,3.16 -10.4,4.21c-4.03,1.05 -8.53,1.58 -13.5,1.58l-3.99,0c-1.54,0 -3.22,-0.14 -5.04,-0.42c-1.82,-0.21 -3.75,-0.42 -5.78,-0.63c-2.03,-0.21 -3.92,-0.35 -5.67,-0.42c-1.75,-0.07 -3.24,-0.02 -4.46,0.16c-1.23,0.18 -1.98,0.61 -2.26,1.31l-2.1,0l-0.02,0.03z"
                    transform="translate(-808.31 -707.57)"
                  />
                </g>
                <g id="Layer_1" transform="matrix(1 0 0 1 79.08 48.66)">
                  <path
                    fillRule="nonzero"
                    fill="rgb(239,239,239)"
                    strokeMiterlimit="4"
                    strokeLinejoin="miter"
                    strokeDashoffset="0"
                    strokeDasharray="none"
                    stroke=" none"
                    strokeLinecap="butt"
                    d="m851.18439,686.77883l-2,0l0.21,-15.52l0,-1.6l65.55,0l0,1.6l0.21,15.52l-2.1,0l0,-1.05c-0.14,-3.36 -0.7,-5.97 -1.68,-7.83c-0.98,-1.85 -2.4,-3.24 -4.25,-4.15c-1.86,-0.91 -4.13,-1.47 -6.83,-1.68c-2.7,-0.21 -5.83,-0.32 -9.4,-0.32l-0.53,0l0,71.64l-16.28,0l0,-71.64l-0.53,0c-3.59,0 -6.76,0.11 -9.5,0.32s-5.05,0.77 -6.91,1.68c-1.86,0.91 -3.29,2.3 -4.27,4.15c-0.98,1.86 -1.51,4.46 -1.58,7.83l-0.1,1.05l-0.01,0z"
                    transform="translate(-882.79 -707.59)"
                  />
                </g>
                <g id="Layer_1" transform="matrix(1 0 0 1 130.97 48.67)">
                  <path
                    fillRule="nonzero"
                    fill="rgb(239,239,239)"
                    strokeMiterlimit="4"
                    strokeLinejoin="miter"
                    strokeDashoffset="0"
                    strokeDasharray="none"
                    stroke=" none"
                    strokeLinecap="butt"
                    d="m944.56439,669.65883l0,73.74l-16.28,0l0,-61.03c0,-4.2 -0.42,-7 -1.26,-8.4c-0.84,-1.4 -2,-2.1 -3.47,-2.1l0,-2.21l21.01,0z"
                    transform="translate(-934.69 -707.59)"
                  />
                </g>
                <g id="Layer_1" transform="matrix(1 0 0 1 190.19 48.66)">
                  <path
                    fillRule="nonzero"
                    fill="rgb(239,239,239)"
                    strokeMiterlimit="4"
                    strokeLinejoin="miter"
                    strokeDashoffset="0"
                    strokeDasharray="none"
                    stroke=" none"
                    strokeLinecap="butt"
                    d="m952.85439,669.65883l20.9,0l24.37,42.02l18.17,-37.5c-0.35,-0.91 -0.84,-1.52 -1.47,-1.84c-0.63,-0.32 -1.33,-0.47 -2.1,-0.47l0,-2.21l21.01,0l0,73.74l-16.28,0l0,-61.14c0,-1.89 -0.1,-3.54 -0.32,-4.94l-0.94,2.1l-22.69,46.54l-2.63,5.57l-1.37,-2.21l-24.9,-42.96l0,57.04l-2.1,0l0,-60.72l-3.89,-6.62c-0.63,-1.12 -1.51,-2.1 -2.63,-2.94c-1.12,-0.84 -2.17,-1.26 -3.15,-1.26l0,-2.21l0.02,0.01z"
                    transform="translate(-993.91 -707.58)"
                  />
                </g>
                <g id="Layer_1" transform="matrix(1 0 0 1 267.83 48.64)">
                  <path
                    fillRule="nonzero"
                    fill="rgb(239,239,239)"
                    strokeMiterlimit="4"
                    strokeLinejoin="miter"
                    strokeDashoffset="0"
                    strokeDasharray="none"
                    stroke=" none"
                    strokeLinecap="butt"
                    d="m1082.06439,720.60883c0,-2.73 -0.3,-5.02 -0.89,-6.88c-0.59,-1.86 -1.34,-3.36 -2.25,-4.52c-0.91,-1.16 -1.92,-1.98 -3.03,-2.47c-1.11,-0.49 -2.23,-0.74 -3.34,-0.74l-9.4,0l0,35.3l12.29,0c3.57,0 6.7,-0.1 9.4,-0.32c2.69,-0.21 4.97,-0.77 6.83,-1.68c1.86,-0.91 3.27,-2.29 4.25,-4.15c0.98,-1.85 1.54,-4.46 1.68,-7.83l0,-1.16l2.1,0.1l-0.21,15.65l0,1.47l-52.63,0l0,-61.12c0,-4.21 -0.42,-7.01 -1.26,-8.41c-0.84,-1.4 -2,-2.11 -3.47,-2.11l0,-2.1l57.36,0l0,1.6l0.21,15.52l-2.1,0.11l0,-1.16c-0.14,-3.36 -0.7,-5.97 -1.68,-7.83c-0.98,-1.85 -2.4,-3.24 -4.25,-4.15c-1.86,-0.91 -4.13,-1.47 -6.83,-1.68c-2.7,-0.21 -5.83,-0.32 -9.4,-0.32l-12.29,0l0,32.14l9.4,0c1.11,0 2.23,-0.24 3.34,-0.73c1.11,-0.49 2.12,-1.31 3.03,-2.47c0.91,-1.16 1.65,-2.68 2.25,-4.57c0.59,-1.89 0.89,-4.2 0.89,-6.93l2.1,0l0,31.41l-2.1,0l0,0.03z"
                    transform="translate(-1071.54 -707.57)"
                  />
                </g>
                <g id="Layer_1" transform="matrix(1 0 0 1 337.85 48.66)">
                  <path
                    fillRule="nonzero"
                    fill="rgb(239,239,239)"
                    strokeMiterlimit="4"
                    strokeLinejoin="miter"
                    strokeDashoffset="0"
                    strokeDasharray="none"
                    stroke=" none"
                    strokeLinecap="butt"
                    d="m1170.72439,739.98883c1.12,0.88 2.17,1.31 3.15,1.31l0,2.1l-21.01,0l-22.27,-38.45l-10.82,-18.59l0,57.04l-2.1,0l0,-60.72l-3.89,-6.62c-0.63,-1.12 -1.51,-2.1 -2.63,-2.94c-1.12,-0.84 -2.17,-1.26 -3.15,-1.26l0,-2.21l21.01,0l24.27,42.02l10.4,17.86l0,-59.88l2.1,0l0,63.55l2.31,3.89c0.63,1.05 1.51,2.01 2.63,2.89l0,0.01z"
                    transform="translate(-1141.57 -707.58)"
                  />
                </g>
                <g id="Layer_1" transform="matrix(1 0 0 1 404.3 48.66)">
                  <path
                    fillRule="nonzero"
                    fill="rgb(239,239,239)"
                    strokeMiterlimit="4"
                    strokeLinejoin="miter"
                    strokeDashoffset="0"
                    strokeDasharray="none"
                    stroke=" none"
                    strokeLinecap="butt"
                    d="m1176.40439,686.77883l-2,0l0.21,-15.52l0,-1.6l65.55,0l0,1.6l0.21,15.52l-2.1,0l0,-1.05c-0.14,-3.36 -0.7,-5.97 -1.68,-7.83c-0.98,-1.85 -2.4,-3.24 -4.25,-4.15c-1.86,-0.91 -4.13,-1.47 -6.83,-1.68c-2.7,-0.21 -5.83,-0.32 -9.4,-0.32l-0.53,0l0,71.64l-16.28,0l0,-71.64l-0.53,0c-3.59,0 -6.76,0.11 -9.5,0.32s-5.05,0.77 -6.91,1.68c-1.86,0.91 -3.29,2.3 -4.27,4.15c-0.98,1.86 -1.51,4.46 -1.58,7.83l-0.1,1.05l-0.01,0z"
                    transform="translate(-1208.01 -707.59)"
                  />
                </g>
                <g id="Layer_1" transform="matrix(1 0 0 1 477.3 48.67)">
                  <path
                    fillRule="nonzero"
                    fill="rgb(239,239,239)"
                    strokeMiterlimit="4"
                    strokeLinejoin="miter"
                    strokeDashoffset="0"
                    strokeDasharray="none"
                    stroke=" none"
                    strokeLinecap="butt"
                    d="m1280.39439,669.65883c5.11,0 9.91,0.96 14.39,2.89c4.48,1.93 8.39,4.55 11.71,7.88c3.32,3.33 5.95,7.23 7.88,11.71c1.93,4.48 2.89,9.28 2.89,14.39s-0.96,9.91 -2.89,14.39c-1.93,4.48 -4.55,8.39 -7.88,11.71c-3.33,3.33 -7.23,5.95 -11.71,7.88c-4.48,1.93 -9.28,2.89 -14.39,2.89s-9.91,-0.96 -14.39,-2.89c-4.48,-1.93 -8.39,-4.55 -11.71,-7.88c-3.33,-3.32 -5.95,-7.23 -7.88,-11.71c-1.93,-4.48 -2.89,-9.28 -2.89,-14.39s0.96,-9.91 2.89,-14.39c1.93,-4.48 4.55,-8.39 7.88,-11.71s7.23,-5.95 11.71,-7.88c4.48,-1.93 9.28,-2.89 14.39,-2.89zm0,2.1c-4.13,0 -7.51,0.91 -10.14,2.74s-4.73,4.31 -6.3,7.47c-1.58,3.16 -2.66,6.84 -3.26,11.05c-0.6,4.21 -0.89,8.7 -0.89,13.47s0.26,9.36 0.79,13.57s1.54,7.89 3.05,11.05c1.5,3.16 3.61,5.65 6.3,7.47c2.69,1.82 6.18,2.73 10.45,2.73s7.75,-0.91 10.45,-2.73c2.69,-1.82 4.8,-4.31 6.3,-7.47c1.5,-3.16 2.52,-6.84 3.05,-11.05s0.79,-8.73 0.79,-13.57s-0.3,-9.26 -0.89,-13.47c-0.6,-4.21 -1.68,-7.89 -3.26,-11.05c-1.58,-3.16 -3.69,-5.65 -6.36,-7.47c-2.66,-1.82 -6.02,-2.74 -10.08,-2.74z"
                    transform="translate(-1281.02 -707.59)"
                  />
                </g>
                <g id="Layer_1" transform="matrix(1 0 0 1 554.1 48.65)">
                  <path
                    fillRule="nonzero"
                    fill="rgb(239,239,239)"
                    strokeMiterlimit="4"
                    strokeLinejoin="miter"
                    strokeDashoffset="0"
                    strokeDasharray="none"
                    stroke=" none"
                    strokeLinecap="butt"
                    d="m1327.87439,743.39883l-0.21,-26.58l2.1,-0.1l0,1.36c0.07,3.15 0.45,6.13 1.16,8.93c0.7,2.8 2.03,5.25 3.99,7.35c1.96,2.1 4.71,3.78 8.25,5.04c3.53,1.26 8.21,1.89 14.02,1.89c6.51,0 11.34,-1.05 14.5,-3.15c3.15,-2.1 4.73,-4.62 4.73,-7.56c0,-2.52 -0.73,-4.73 -2.21,-6.62c-1.47,-1.89 -3.41,-3.59 -5.83,-5.09c-2.42,-1.5 -5.18,-2.89 -8.3,-4.15c-3.12,-1.26 -6.29,-2.52 -9.51,-3.78c-3.22,-1.26 -6.39,-2.57 -9.51,-3.94c-3.12,-1.36 -5.92,-2.89 -8.4,-4.57c-2.49,-1.68 -4.5,-3.61 -6.04,-5.78c-1.54,-2.17 -2.35,-4.69 -2.42,-7.56c-0.07,-2.59 0.7,-5.06 2.31,-7.41c1.61,-2.35 3.89,-4.41 6.83,-6.2c2.94,-1.79 6.51,-3.2 10.71,-4.26s8.82,-1.58 13.87,-1.58c1.12,0 2.45,0.02 3.99,0.05c1.54,0.04 3.19,0.16 4.94,0.37c1.82,0.21 3.75,0.44 5.78,0.68c2.03,0.25 3.92,0.4 5.67,0.47c1.75,0.07 3.26,0 4.52,-0.21c1.26,-0.21 2,-0.66 2.21,-1.37l2.1,0l0.32,26.58l-2.1,0l0,-1.26c-0.07,-3.15 -0.46,-6.13 -1.16,-8.93c-0.7,-2.8 -2.05,-5.25 -4.04,-7.35c-2,-2.1 -4.76,-3.78 -8.3,-5.04c-3.54,-1.26 -8.18,-1.89 -13.92,-1.89c-3.92,0 -7.27,0.26 -10.03,0.79c-2.77,0.53 -4.96,1.26 -6.57,2.21c-1.61,0.95 -2.71,2.03 -3.31,3.26c-0.6,1.23 -0.68,2.54 -0.26,3.94c0.56,2.03 1.77,3.82 3.62,5.36c1.86,1.54 4.06,2.95 6.62,4.21c2.56,1.26 5.39,2.45 8.51,3.58c3.12,1.12 6.23,2.3 9.35,3.52c3.12,1.23 6.15,2.6 9.09,4.1c2.94,1.51 5.55,3.25 7.83,5.21c2.27,1.96 4.1,4.26 5.46,6.89c1.37,2.63 2.01,5.7 1.94,9.2c0,2.6 -0.79,5.07 -2.36,7.42c-1.58,2.35 -3.82,4.4 -6.72,6.15c-2.91,1.75 -6.37,3.16 -10.4,4.21c-4.03,1.05 -8.53,1.58 -13.5,1.58l-3.99,0c-1.54,0 -3.22,-0.14 -5.04,-0.42c-1.82,-0.21 -3.75,-0.42 -5.78,-0.63c-2.03,-0.21 -3.92,-0.35 -5.67,-0.42c-1.75,-0.07 -3.24,-0.02 -4.46,0.16c-1.23,0.18 -1.98,0.61 -2.26,1.31l-2.1,0l-0.02,0.03z"
                    transform="translate(-1357.81 -707.57)"
                  />
                </g>
                <g id="Layer_1" transform="matrix(1 0 0 1 -497.51 35.21)">
                  <path
                    fillRule="nonzero"
                    fill="rgb(239,239,239)"
                    strokeMiterlimit="4"
                    strokeLinejoin="miter"
                    strokeDashoffset="0"
                    strokeDasharray="none"
                    stroke=" none"
                    strokeLinecap="butt"
                    d="m218.68439,718.82883l20.47,20.29c2.77,2.8 7.28,2.81 10.07,0.03l28.69,-28.62c2.77,-2.77 6.5,-3.53 9.27,-0.76l32.94,32.87c2.78,2.77 7.27,2.77 10.04,0l62.92,-61.95c2.77,-2.77 2.77,-7.27 0,-10.05l-27.13,-27.13c-2.78,-2.78 -7.28,-2.77 -10.05,0l-30.89,29.98c-2.77,2.78 -6.89,3.16 -9.66,0.39l-26.18,-26.12c-2.78,-2.77 -6.13,-3.15 -8.91,-0.37l-62.66,60.82c-2.76,2.77 -1.67,7.83 1.08,10.6l0,0.02z"
                    transform="translate(-306.21 -694.13)"
                  />
                </g>
                <g id="Layer_1" transform="matrix(1 0 0 1 -441.2 -38.45)">
                  <path
                    fillRule="nonzero"
                    fill="rgb(239,239,239)"
                    strokeMiterlimit="4"
                    strokeLinejoin="miter"
                    strokeDashoffset="0"
                    strokeDasharray="none"
                    stroke=" none"
                    strokeLinecap="butt"
                    d="m295.00439,643.25883l20.33,20.72c2.78,2.78 7.3,2.77 10.07,-0.03l30.85,-30.41c2.77,-2.79 6.89,-3.19 9.68,-0.42l32.79,32.64c2.77,2.75 7.24,2.76 10.01,0.01l20.02,-19.81c2.8,-2.77 2.81,-7.29 0.02,-10.08l-63.25,-62.76c-2.78,-2.78 -5.68,-2.83 -8.45,-0.04l-62.09,60.15c-2.76,2.78 -2.75,7.26 0.02,10.03z"
                    transform="translate(-362.52 -620.48)"
                  />
                </g>
                <g id="Layer_1" transform="matrix(1 0 0 1 -365.43 37.41)">
                  <path
                    fillRule="nonzero"
                    fill="rgb(239,239,239)"
                    strokeMiterlimit="4"
                    strokeLinejoin="miter"
                    strokeDashoffset="0"
                    strokeDasharray="none"
                    stroke=" none"
                    strokeLinecap="butt"
                    d="m371.80439,719.59883l21.1,21.1c2.78,2.78 6.16,2.77 8.93,-0.03l31.24,-30.79c2.77,-2.79 6.89,-3.19 9.68,-0.42l30.88,30.73c2.77,2.75 6.85,3.14 9.63,0.4l20.02,-19.81c2.8,-2.77 3.19,-7.29 0.4,-10.08l-61.34,-60.85c-2.78,-2.78 -7.29,-2.77 -10.06,0.02l-60.49,59.71c-2.76,2.78 -2.75,7.26 0.02,10.03l-0.01,-0.01z"
                    transform="translate(-438.29 -696.33)"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </motion.svg>
    </div>
  );
};
