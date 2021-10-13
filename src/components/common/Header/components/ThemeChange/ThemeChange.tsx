import { FC, useEffect } from 'react';
import { FaRegMoon } from 'react-icons/fa';
import { BsFillEmojiSunglassesFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';
import styles from './ThemeChange.module.scss';

const DARK = 'dark';
const LIGHT = 'light';

const Header: FC = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme('dark');
  }, []);

  return (
    <>
      {theme === DARK && (
        <div className={styles.changeTheme} onClick={() => setTheme(LIGHT)}>
          <BsFillEmojiSunglassesFill size={22} />
        </div>
      )}
      {theme === LIGHT && (
        <div className={styles.changeTheme} onClick={() => setTheme(DARK)}>
          <FaRegMoon size={20} />
        </div>
      )}
    </>
  );
};

export default Header;
