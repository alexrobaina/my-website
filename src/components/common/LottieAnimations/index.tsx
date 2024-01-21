import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import { FC } from 'react';

interface LottieAnimationProps {
  delay?: number;
  animation: any;
  styles?: any;
  width?: number | string;
}

const VARIANTS_OPACITY = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const LottieAnimation: FC<LottieAnimationProps> = ({
  styles,
  width,
  animation,
  delay = 0,
}) => {
  return (
    <motion.div
      style={{ width }}
      className={styles}
      initial="hidden"
      animate="visible"
      variants={VARIANTS_OPACITY}
      transition={{ ease: 'easeOut', delay }}
    >
      <Lottie animationData={animation} loop />
    </motion.div>
  );
};
