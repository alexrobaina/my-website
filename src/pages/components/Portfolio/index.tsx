import { TEXTS } from 'constants/strings';
import Image from 'next/image';
import { FC } from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { BsGithub, BsLink } from 'react-icons/bs';
import PillsContainer from '../../../components/PillsContainer';
import { PILLS_SKILS } from '../../../components/Projects/constants/pills';
import BaseText from '../../../components/common/BaseText';
import BaseTitle from '../../../components/common/BaseTitle';
import Footer from '../../../components/common/Footer';
import PetsLove from '../../../assets/images/petsLove.png';
import Range from '../../../assets/images/range.png';

import styles from './styles.module.scss';

interface Props {
  setShowSection: (value: string) => void;
}

export const Portfolio: FC<Props> = ({ setShowSection }) => {
  const handleLink = (link: string) => {
    window.open(link);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header} onClick={() => setShowSection('')}>
          <div className={styles.backButtonContainer}>
            <div className={styles.link}>
              <IoMdArrowBack size={35} />
            </div>
            <BaseTitle size={30} title="Portfolio" />
          </div>
        </div>
        <div className={styles.portfolioContainer}>
          <div>
            <div className={styles.title}>
              <BaseTitle size={30} marginTop={40} title="Range" marginBottom={10} />
              <div
                className={styles.link}
                onClick={() => handleLink('https://app.range.org/')}
              >
                <BsLink size={35} />
              </div>
            </div>
            <BaseText
              thin
              marginTop={30}
              marginBottom={20}
              text={TEXTS.PROTFOLIO.RANGE}
            />
            <div className={styles.portfolioImage}>
              <Image src={Range} alt="range" />
            </div>
            <BaseText bold marginTop={50} text="MY STACK" />
            <PillsContainer pills={PILLS_SKILS} />
          </div>
          <div className={styles.project}>
            <div className={styles.title}>
              <BaseTitle size={30} marginTop={40} title="Pet's Love" marginBottom={10} />
              <div className={styles.containerLinks}>
                <div
                  className={styles.link}
                  onClick={() => handleLink('https://landing.petslove.app/')}
                >
                  <BsLink size={35} />
                </div>
                <div
                  className={styles.link}
                  onClick={() => handleLink('https://landing.petslove.app/')}
                >
                  <BsGithub size={30} />
                </div>
              </div>
            </div>
            <BaseText
              thin
              marginTop={30}
              marginBottom={20}
              text={TEXTS.PROTFOLIO.PETS_LOVE}
            />
            <div className={styles.portfolioImage}>
              <Image src={PetsLove} alt="PetsLove" />
            </div>
            <BaseText bold marginTop={50} text="MY STACK" />
            <PillsContainer pills={PILLS_SKILS} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
