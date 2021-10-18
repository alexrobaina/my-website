import { FC } from 'react';
import BaseTitle from '../common/BaseTitle';
import BaseText from '../common/BaseText';
import { TEXTS } from '../../constants/strings';
import PillsContainer from '../PillsContainer';
import {
  DIG_BANG_PILLS,
  PERSONAL_PAY_PILLS,
  SIMTLIX_PILLS,
} from '../Projects/constants/pills';

const JobExperience: FC = () => {
  return (
    <div data-testid="job-experience">
      <BaseTitle size={40} marginTop={50} title={TEXTS.JOB_EXPERIENCE.TITLE} />
      <BaseTitle
        size={20}
        marginTop={40}
        title={TEXTS.JOB_EXPERIENCE.PERSONAL_PAY.TITLE}
      />
      <BaseText marginTop={15} text={TEXTS.JOB_EXPERIENCE.PERSONAL_PAY.TEXT} />
      <PillsContainer pills={PERSONAL_PAY_PILLS} />
      <BaseTitle size={20} marginTop={40} title={TEXTS.JOB_EXPERIENCE.DIG_BANG.TITLE} />
      <BaseText marginTop={15} text={TEXTS.JOB_EXPERIENCE.DIG_BANG.TEXT} />
      <PillsContainer pills={DIG_BANG_PILLS} />
      <BaseTitle size={20} marginTop={40} title={TEXTS.JOB_EXPERIENCE.SIMTLIX.TITLE} />
      <BaseText marginTop={15} text={TEXTS.JOB_EXPERIENCE.SIMTLIX.TEXT} />
      <PillsContainer pills={SIMTLIX_PILLS} />
    </div>
  );
};

export default JobExperience;
