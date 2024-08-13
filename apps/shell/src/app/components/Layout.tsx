import { Outlet } from 'react-router-dom';

import { Footer } from '@mfexample/common-ui';
import { NavMenu } from '@mfexample/shared';
import { Legend } from './Legend';

export const Layout = () => {
  return (
    <div>
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
