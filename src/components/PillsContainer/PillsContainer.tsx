import { FC } from 'react';
import BasePill from '../common/BasePill';
import styles from './PillsContainer.module.scss';

interface Props {
  pills: Array<any>;
}

const PillsContainer: FC<Props> = ({ pills }) => {
  return (
    <div data-testid="pills-container" className={styles.containerPills}>
      {pills.map((pill) => {
        return (
          <BasePill
            marginTop={10}
            key={pill.title}
            marginRight={10}
            text={pill.title}
            backgroundColor={pill.backgroundColor}
          />
        );
      })}
    </div>
  );
};

export default PillsContainer;
