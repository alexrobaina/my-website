import { FC, ReactElement } from 'react';
import { motion } from 'framer-motion';
import Head from '../../Head';
import Header from '../Header';
import { VARIANTS_OPACITY } from '../../../constants/animation';
import styles from './Layout.module.scss';

interface Props {
  testID: string;
  children?: ReactElement;
}

const Layout: FC<Props> = ({ children, testID }) => {
  return (
    <>
      <Head />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={VARIANTS_OPACITY}
        className={styles.layout}
        transition={{ ease: 'easeOut', delay: 0.2 }}
      >
        <Header />
        <div data-testid={`layout-${testID}`} className={styles.row}>
          {children}
        </div>
      </motion.div>
    </>
  );
};

export default Layout;
