import { Suspense, lazy } from 'react';

import NxWelcome from './nx-welcome';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { importRemote } from '@module-federation/utilities';

import type DashboardModuleType from 'mfe-dashboard/Module';
import type AccountsModuleType from 'mfe-accounts/Module';
import type PaymentsModuleType from 'mfe-payments/Module';
import type SettingsModuleType from 'mfe-settings/Module';
import type SettingsPanelType from 'mfe-settings/SettingsPanel';

import useSyncAppRouter from './hooks/useSyncAppRouter';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

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
    element: <Layout />,
    children: [
      {
        index: true,
        path: '/',
        element: <Home />,
      },
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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

// @ts-ignore
window.REACT_QUERY_CLIENT = queryClient;

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}

export default App;
