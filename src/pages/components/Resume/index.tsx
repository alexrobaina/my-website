import { TEXTS } from 'constants/strings';
import { FC } from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { LottieAnimation } from '../../../components/common/LottieAnimations';
import BaseText from '../../../components/common/BaseText';
import PillsContainer from '../../../components/PillsContainer';
import { PILLS_SKILS } from '../../../components/Projects/constants/pills';
import Astronaut from '../../../assets/animations/lottie/astronaut.json';
import Footer from '../../../components/common/Footer';
import BaseTitle from '../../../components/common/BaseTitle';

import styles from './styles.module.scss';

interface Props {
  setShowSection: (value: string) => void;
}

export const Resume: FC<Props> = ({ setShowSection }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div onClick={() => setShowSection('')} className={styles.backButtonContainer}>
            <IoMdArrowBack size={35} />
          </div>
          <BaseTitle size={30} title="Resume" />
        </div>
        <div className={styles.astronautContainer}>
          <LottieAnimation styles={styles.astronaut} animation={Astronaut} />
        </div>
        <div className={styles.resumeContainer}>
          <BaseText thin marginTop={30} text={TEXTS.MY_PRESENTATION.TITLE} />
          <BaseText thin marginTop={30} text={TEXTS.MY_PRESENTATION.TEXT_1} />
          <BaseText thin marginTop={30} text={TEXTS.MY_PRESENTATION.TEXT_2} />
          <BaseText thin marginTop={30} text={TEXTS.MY_PRESENTATION.TEXT_3} />
          <BaseText thin marginTop={30} text={TEXTS.MY_PRESENTATION.TEXT_4} />
          <BaseText thin marginTop={30} text={TEXTS.MY_PRESENTATION.TEXT_5} />
          <BaseText thin marginTop={30} text={TEXTS.MY_PRESENTATION.TEXT_6} />
          <BaseText thin text={TEXTS.MY_PRESENTATION.TEXT_7} />
          <BaseText bold marginTop={50} text="MY STACK" />
          <PillsContainer pills={PILLS_SKILS} />
        </div>
      </div>
      <Footer />
    </>
  );
};
