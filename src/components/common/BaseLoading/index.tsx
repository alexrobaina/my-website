import { motion } from 'framer-motion';
import styles from './styles.module.scss';

export const BaseLoading = () => {
  const loaderVariants = {
    animationOne: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  };

  return (
    <motion.div
      variants={loaderVariants}
      animate="animationOne"
      className={styles.loading}
    />
  );
};
