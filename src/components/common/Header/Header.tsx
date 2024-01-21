import { FC } from 'react';
import BaseTitle from '../BaseTitle';
import styles from './Header.module.scss';
import ThemeChange from './components/ThemeChange';

const Header: FC = () => {
  return (
    <div data-testid="header-app" className={styles.header}>
      <BaseTitle size={32} title="Alex" />
      <ThemeChange />
    </div>
  );
};

export default Header;
