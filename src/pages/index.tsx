import { useState } from 'react';
import type { NextPage } from 'next';
import { motion } from 'framer-motion';
import { HiCursorClick } from 'react-icons/hi';
import BaseImage from '../components/common/BaseImage';
import avatar from '../assets/images/avatar.jpg';
import Layout from '../components/common/Layout';
import BaseText from '../components/common/BaseText';
import Projects from '../components/Projects';
import Footer from '../components/common/Footer';
import WorkExperience from '../components/WorkExperience';
import BaseTitle from '../components/common/BaseTitle';
import { TEXTS } from '../constants/strings';
import { VARIANTS_OPACITY } from '../constants/animation';
import styles from '../styles/index.module.scss';

const Home: NextPage = () => {
  const [showExperience, setShowExperience] = useState(false);

  return (
    <Layout testID="home">
      <>
        <BaseImage
          circle
          center
          pointer
          width={100}
          height={100}
          alt="portrait"
          marginTop={200}
          src={avatar}
          handleEvent={() => setShowExperience(!showExperience)}
        />
        {!showExperience && (
          <motion.div
            initial="hidden"
            animate="visible"
            className={styles.name}
            variants={VARIANTS_OPACITY}
            transition={{ ease: 'easeOut', delay: 0.2 }}
            onClick={() => setShowExperience(!showExperience)}
          >
            <div>
              <BaseTitle
                center
                pointer
                size={40}
                marginTop={35}
                title={TEXTS.TITLE_PAGE}
              />
            </div>
            <div className={styles.iconClick}>
              <HiCursorClick size={20} />
            </div>
          </motion.div>
        )}
        {showExperience && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={VARIANTS_OPACITY}
            transition={{ ease: 'easeOut', delay: 0.2 }}
          >
            <BaseText thin marginTop={100} text={TEXTS.MY_PRESENTATION} />
            <Projects />
            <WorkExperience />
            <Footer />
          </motion.div>
        )}
      </>
    </Layout>
  );
};

export default Home;
