import { FC, ReactElement, useEffect } from 'react';
import Head from '../../Head';

import styles from './Layout.module.scss';
import Header from '../Header';

interface Props {
  testID: string;
  children?: ReactElement;
}

const Layout: FC<Props> = ({ children, testID }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      <Header />
      <Head />
      <div data-testid={`layout-${testID}`} className={styles.row}>
        {children}
      </div>
    </>
  );
};

export default Layout;
