import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { motion } from 'framer-motion';
import { IoMdArrowBack } from 'react-icons/io';
import { BsGithub } from 'react-icons/bs';
import { useTheme } from 'next-themes';
import BaseImage from '../components/common/BaseImage';
import avatar from '../assets/images/avatar.jpg';
import Layout from '../components/common/Layout';
import BaseText from '../components/common/BaseText';
import Projects from '../components/Projects';
import Footer from '../components/common/Footer';
import WorkExperience from '../components/WorkExperience';
import { TEXTS } from '../constants/strings';
import { VARIANTS_OPACITY } from '../constants/animation';
import { LottieAnimation } from '../components/common/LottieAnimations';
import Background from '../assets/animations/lottie/background.json';
import { ProgrammingEffect } from '../components/common/ProgrammingEffect';
import BaseButton from '../components/common/BaseButton';
import Astronaut from '../assets/animations/lottie/astronaut.json';
import AstronautProgrammer from '../assets/animations/lottie/astronatuteProgrammer.json';
import PillsContainer from '../components/PillsContainer';
import { PETS_LOVE_PILLS, PILLS_SKILS } from '../components/Projects/constants/pills';

import styles from '../styles/index.module.scss';
import { DarkGallaxyAnimation } from '../components/DarkGallaxyAnimation';
import { Portfolio } from './components/Portfolio';
import { PetsLoveProject } from './components/PetsLoveProject';
import { Resume } from './components/Resume';

const Home: NextPage = () => {
  const { theme } = useTheme();
  const [showSection, setShowSection] = useState('');

  const handleLink = (link: string) => {
    window.open(link);
  };

  useEffect(() => {
    if (showSection) {
      document.body.style.overflowY = 'auto';
      return;
    }
    document.body.style.overflowY = 'hidden';
  }, [showSection]);

  return (
    <Layout testID="home">
      <>
        {theme === 'dark' ? (
          <DarkGallaxyAnimation />
        ) : (
          <LottieAnimation animation={Background} styles={styles.backgroundSpace} />
        )}
        <>
          {!showSection && (
            <div className={styles.content}>
              <BaseImage
                circle
                center
                pointer
                width={100}
                src={avatar}
                height={100}
                alt="portrait"
                marginTop={100}
              />
              <motion.div
                initial="hidden"
                animate="visible"
                className={styles.name}
                variants={VARIANTS_OPACITY}
                transition={{ ease: 'easeOut', delay: 0.2 }}
              >
                <div>
                  <ProgrammingEffect
                    fontSize={30}
                    marginTop={30}
                    text={TEXTS.TITLE_PAGE}
                  />
                </div>
                <div className={styles.actions}>
                  <BaseButton
                    medium
                    marginTop={30}
                    text={`I'm a recruiter`}
                    onClick={() => setShowSection('resume')}
                  />
                  <BaseButton
                    medium
                    marginTop={30}
                    text="Open sourse"
                    onClick={() => setShowSection('pets')}
                  />
                  <BaseButton
                    medium
                    marginTop={30}
                    text="Portfolio"
                    onClick={() => setShowSection('portfolio')}
                  />
                </div>
                <div
                  style={{
                    marginTop: 100,
                  }}
                >
                  <Footer />
                </div>
              </motion.div>
            </div>
          )}
        </>
        {showSection && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={VARIANTS_OPACITY}
            transition={{ ease: 'easeOut', delay: 0.2 }}
          >
            <div>
              {showSection === 'resume' && <Resume setShowSection={setShowSection} />}
              {showSection === 'portfolio' && (
                <Portfolio setShowSection={setShowSection} />
              )}
              {showSection === 'pets' && (
                <PetsLoveProject setShowSection={setShowSection} />
              )}
            </div>
          </motion.div>
        )}
      </>
    </Layout>
  );
};

export default Home;
