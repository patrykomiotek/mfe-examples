import { createMemoryRouter, Outlet, RouterProvider } from 'react-router-dom';

import { SettingsContainer } from './SettingsContainer';
import { SettingsAddress } from './SettingsAddress';
import { SettingsEmail } from './SettingsEmail';
import useSyncGlobalRouter from '../hooks/useSyncGlobalRouter';

// workaround to sync navigation state between host and remote
const RouteHandler = () => {
  useSyncGlobalRouter({ basename: '/settings' });
  return <Outlet />;
};

const router = createMemoryRouter(
  [
    {
      path: '/', // not "settings" because this route is set in host app
      element: <RouteHandler />,
      children: [
        {
          index: true,
          element: <SettingsContainer />,
        },
        {
          path: 'address',
          element: <SettingsAddress />,
        },
        {
          path: 'email',
          element: <SettingsEmail />,
        },
      ],
    },
  ],
  {
    initialEntries: [window.location.pathname.replace('/settings', '') || '/'],
  }
);

const SettingsPanel = () => {
  return <RouterProvider router={router} />;
};

export default SettingsPanel;
