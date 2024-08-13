import { Outlet } from 'react-router-dom';

import { Footer } from '@mfexample/common-ui';
import { NavMenu } from '@mfexample/shared';

import { Legend } from './Legend';
import styles from './styles.module.css';

export const Layout = () => {
  return (
    <div className={styles.shellContainer}>
      <div>
        <NavMenu />
        <Outlet />
      </div>
      <div>
        <Legend />
        <Footer />
      </div>
    </div>
  );
};
