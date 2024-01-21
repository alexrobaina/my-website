import { motion } from 'framer-motion';

const VARIANTS_OPACITY = {
  hidden: { opacity: 0, backgroundColor: '#3b0764' },
  visible: { opacity: 1, backgroundColor: '#3b0764' },
};

export const DarkGallaxyAnimation = () => (
  <motion.div
    initial="hidden"
    animate="visible"
    style={{
      top: 0,
      left: 0,
      bottom: 0,
      zIndex: -1,
      position: 'absolute',
    }}
    variants={VARIANTS_OPACITY}
    transition={{ ease: 'easeOut', delay: 0.2 }}
  >
    <div id="stars" />
    <div id="stars2" />
    <div id="stars3" />
    <div id="stars4" />
  </motion.div>
);
