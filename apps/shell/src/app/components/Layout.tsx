import { Outlet } from 'react-router-dom';

import { Footer } from '@mfexample/common-ui';

import { NavMenu } from './NavMenu';

export const Layout = () => {
  return (
    <div>
      <div>
        <NavMenu />
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};