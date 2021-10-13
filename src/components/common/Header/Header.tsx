import { FC } from 'react';
import ThemeChange from './components/ThemeChange';
import styles from './Header.module.scss';

const Header: FC = () => {
  return (
    <div data-testid="header-app" className={styles.header}>
      <div className={styles.name}>Alex</div>
      <ThemeChange />
    </div>
  );
};

export default Header;
