import { FC } from 'react';
import BaseTitle from '../BaseTitle';
import ThemeChange from './components/ThemeChange';
import styles from './Header.module.scss';

const Header: FC = () => {
  return (
    <div data-testid="header-app" className={styles.header}>
      <BaseTitle size={35} title="Alex" />
      <ThemeChange />
    </div>
  );
};

export default Header;
