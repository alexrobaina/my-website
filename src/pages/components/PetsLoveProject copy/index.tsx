import { TEXTS } from 'constants/strings';
import { FC } from 'react';
import { BsGithub, BsLink } from 'react-icons/bs';
import { IoMdArrowBack } from 'react-icons/io';
import { LottieAnimation } from '../../../components/common/LottieAnimations';
import AstronautProgrammer from '../../../assets/animations/lottie/astronatuteProgrammer.json';
import BaseText from '../../../components/common/BaseText';
import PillsContainer from '../../../components/PillsContainer';
import { PETS_LOVE_PILLS } from '../../../components/Projects/constants/pills';
import Footer from '../../../components/common/Footer';
import BaseTitle from '../../../components/common/BaseTitle';

import styles from './styles.module.scss';

interface Props {
  setShowSection: (value: string) => void;
}

export const PetsLoveProject: FC<Props> = ({ setShowSection }) => {
  const handleLink = (link: string) => {
    window.open(link);
  };

  return (
    <>
      <div className={styles.backButtonContainer} onClick={() => setShowSection('')}>
        <div className={styles.link}>
          <IoMdArrowBack size={35} />
        </div>
        <BaseTitle size={30} title="Pet's Love project" />
      </div>
      <div className={styles.astronautContainer}>
        <LottieAnimation
          animation={AstronautProgrammer}
          styles={styles.astronautProgrammer}
        />
      </div>
      <div className={styles.linksContainer}>
        <div
          className={styles.link}
          onClick={() => handleLink('https://github.com/alexrobaina')}
        >
          <BsGithub size={30} />
        </div>
        <div
          className={styles.link}
          onClick={() => handleLink('https://landing.petslove.app/')}
        >
          <BsLink size={30} />
        </div>
      </div>
      <BaseText thin marginTop={30} text={TEXTS.PETS_LOVE.TEXT_1} />
      <BaseText thin marginTop={30} text={TEXTS.PETS_LOVE.TEXT_2} />
      <BaseText thin marginTop={30} text={TEXTS.PETS_LOVE.TEXT_3} />
      <BaseText thin marginTop={30} text={TEXTS.PETS_LOVE.TEXT_4} />
      <BaseText thin marginTop={30} text={TEXTS.PETS_LOVE.TEXT_5} />
      <BaseText thin marginTop={30} text={TEXTS.PETS_LOVE.TEXT_6} />
      <BaseText bold marginTop={50} text="TECH STACK" />
      <PillsContainer pills={PETS_LOVE_PILLS} />
      <Footer />
    </>
  );
};
