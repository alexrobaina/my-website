import { FC } from 'react';
import { BsGithub } from 'react-icons/bs';
import BaseTitle from '../common/BaseTitle';
import BaseText from '../common/BaseText';
import PillsContainer from '../PillsContainer';
import BaseButton from '../common/BaseButton';
import { TEXTS } from '../../constants/strings';
import {
  AFFILIATE_PILLS,
  BIRD_TEMPERATURE_PILLS,
  PETS_LOVE_PILLS,
} from './constants/pills';
import styles from './Projects.module.scss';

const Projects: FC = () => {
  return (
    <div data-testid="project">
      <BaseTitle size={38} marginTop={40} title={TEXTS.PROJECTS.TITLE} />
      <BaseTitle size={20} marginTop={35} title={TEXTS.PROJECTS.PETS_LOVE.TITLE} />
      <BaseText medium marginTop={15} text={TEXTS.PROJECTS.PETS_LOVE.TEXT} />
      <div className={styles.linksContainer}>
        <BaseButton
          isButtonLink
          marginTop={20}
          marginRight={15}
          text={TEXTS.BACK_END}
          icon={<BsGithub size={15} />}
          linkURL="https://github.com/alexrobaina/api-pets-love"
        />
        <BaseButton
          isButtonLink
          marginTop={20}
          marginRight={15}
          text={TEXTS.FRONT_END}
          icon={<BsGithub size={15} />}
          linkURL="https://github.com/alexrobaina/frontend_petsLove"
        />
        <BaseButton
          isButtonLink
          marginTop={20}
          marginRight={15}
          icon={<BsGithub size={15} />}
          text={TEXTS.MOBILE_REPOSITORY}
          linkURL="https://github.com/alexrobaina/mobile-pets-love"
        />
      </div>
      <PillsContainer pills={PETS_LOVE_PILLS} />
      <BaseTitle size={20} marginTop={40} title={TEXTS.PROJECTS.AFFILIATE.TITLE} />
      <BaseText marginTop={15} text={TEXTS.PROJECTS.AFFILIATE.TEXT} />
      <div className={styles.linksContainer}>
        <BaseButton
          isButtonLink
          marginTop={20}
          marginRight={15}
          text={TEXTS.BACK_END}
          icon={<BsGithub size={15} />}
          linkURL="https://github.com/adieltapari/api-home-file"
        />
        <BaseButton
          isButtonLink
          marginTop={20}
          marginRight={15}
          text={TEXTS.FRONT_END}
          icon={<BsGithub size={15} />}
          linkURL="https://github.com/adieltapari/frontend-home-file"
        />
      </div>
      <PillsContainer pills={AFFILIATE_PILLS} />
      <BaseTitle size={20} marginTop={40} title={TEXTS.PROJECTS.NEST_BIRD_SENSOR.TITLE} />
      <BaseText marginTop={15} text={TEXTS.PROJECTS.NEST_BIRD_SENSOR.TEXT} />
      <BaseButton
        isButtonLink
        marginTop={20}
        marginRight={15}
        text={TEXTS.CODE_REPOSITORY}
        icon={<BsGithub size={15} />}
        linkURL="https://github.com/alexrobaina/birdNestTemperature"
      />
      <PillsContainer pills={BIRD_TEMPERATURE_PILLS} />
    </div>
  );
};

export default Projects;
