import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';
import { importRemote } from '@module-federation/utilities';
import type AboutModule from 'about/Module';
import type DashboardModuleType from 'mfe-dashboard/Module';
import type AccountsModuleType from 'mfe-accounts/Module';
import type PaymentsModuleType from 'mfe-payments/Module';
import type SettingsModuleType from 'mfe-settings/Module';

// static module loading
// const MfeDashboard = React.lazy(() => import('mfe-dashboard/Module'));

// dynamic module loading
const MfeDashboard = React.lazy(() =>
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

const MfeAccounts = React.lazy(() =>
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
const MfeSettings = React.lazy(() =>
  importRemote<{ default: typeof SettingsModuleType }>({
    url: async () => Promise.resolve('http://localhost:4207'),
    scope: 'mfe-settings',
    module: './Module',
    remoteEntryFileName: 'remoteEntry.js',
    esm: true,
  })
);

// static module loading
// const MfePayments = React.lazy(() => import('mfe-payments/Module'));

// dynamic module loading
const MfePayments = React.lazy(() =>
  importRemote<{ default: typeof PaymentsModuleType }>({
    url: async () => Promise.resolve('http://localhost:4206'),
    scope: 'mfe-payments',
    module: './Module',
    remoteEntryFileName: 'remoteEntry.js',
    esm: true,
  })
);

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/mfe-dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/mfe-accounts">Accounts</Link>
        </li>
        <li>
          <Link to="/mfe-payments">Payments</Link>
        </li>
        <li>
          <Link to="/mfe-settings">Settings</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="shell" />} />
        <Route path="/mfe-settings" element={<MfeSettings />} />
        <Route path="/mfe-payments" element={<MfePayments />} />
        <Route path="/mfe-dashboard" element={<MfeDashboard />} />
        <Route path="/mfe-accounts" element={<MfeAccounts />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
