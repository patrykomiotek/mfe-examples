import { Suspense, lazy } from 'react';

import NxWelcome from './nx-welcome';

import {
  createBrowserRouter,
  Link,
  Outlet,
  Route,
  RouterProvider,
  Routes,
} from 'react-router-dom';
import { importRemote } from '@module-federation/utilities';

import type DashboardModuleType from 'mfe-dashboard/Module';
import type AccountsModuleType from 'mfe-accounts/Module';
import type PaymentsModuleType from 'mfe-payments/Module';
import type SettingsModuleType from 'mfe-settings/Module';
import type SettingsPanelType from 'mfe-settings/SettingsPanel';
import { NavMenu } from './components/NavMenu';
import useSyncAppRouter from './hooks/useSyncAppRouter';

// static module loading
// const MfeDashboard = React.lazy(() => import('mfe-dashboard/Module'));

// dynamic module loading
// NOTE: if you provided changes in remote loaded dynamically, you need to restart host
const MfeDashboard = lazy(() =>
  importRemote<{ default: typeof DashboardModuleType }>({
    url: async () => Promise.resolve('http://localhost:4205'),
    scope: 'mfe-dashboard',
    module: './Module',
    remoteEntryFileName: 'remoteEntry.js',
    esm: true,
  })
);

// static module loading
// const MfeAccounts = React.lazy(() => import('mfe-accounts/Module'));

const MfeAccounts = lazy(() =>
  importRemote<{ default: typeof AccountsModuleType }>({
    url: async () => Promise.resolve('http://localhost:4204'),
    scope: 'mfe-accounts',
    module: './Module',
    remoteEntryFileName: 'remoteEntry.js',
    esm: true,
  })
);

// static module loading
// const MfeSettings = React.lazy(() => import('mfe-settings/Module'));

// dynamic module loading
// this is whole module
// const MfeSettings = React.lazy(() =>
//   importRemote<{ default: typeof SettingsModuleType }>({
//     url: async () => Promise.resolve('http://localhost:4207'),
//     scope: 'mfe-settings',
//     module: './Module',
//     remoteEntryFileName: 'remoteEntry.js',
//     esm: true,
//   })
// );

// this is component from remote
const MfeSettingsPanel = lazy(() =>
  importRemote<{ default: typeof SettingsPanelType }>({
    url: async () => Promise.resolve('http://localhost:4207'),
    scope: 'mfe-settings',
    module: './SettingsPanel', // specified in remote module-federation
    remoteEntryFileName: 'remoteEntry.js',
    esm: true,
  })
);

// static module loading
// const MfePayments = React.lazy(() => import('mfe-payments/Module'));

// dynamic module loading
const MfePayments = lazy(() =>
  importRemote<{ default: typeof PaymentsModuleType }>({
    url: async () => Promise.resolve('http://localhost:4206'),
    scope: 'mfe-payments',
    module: './Module',
    remoteEntryFileName: 'remoteEntry.js',
    esm: true,
  })
);

// sync router between host and remote
// check useSyncAppRouter and useGlobalRouter hooks
const SettingsRouterHandler = () => {
  useSyncAppRouter({ basepath: '/settings' });

  return (
    <Suspense>
      <MfeSettingsPanel />
    </Suspense>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <NavMenu />
        <Outlet />
      </>
    ),
    children: [
      {
        path: '/dashboard',
        element: (
          <Suspense>
            <MfeDashboard />
          </Suspense>
        ),
      },
      {
        path: '/accounts',
        element: (
          <Suspense>
            <MfeAccounts />
          </Suspense>
        ),
      },
      {
        path: '/payments',
        element: (
          <Suspense>
            <MfePayments />
          </Suspense>
        ),
      },
      {
        path: '/settings/*',
        element: <SettingsRouterHandler />,
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}

export default App;
