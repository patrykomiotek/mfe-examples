import { lazy, Suspense } from 'react';
// FIXME: types
// import type AccountsListType from 'mfe-accounts/AccountsList';
import { importRemote } from '@module-federation/utilities';

import { NotificationsBar } from '@mfexample/shared';
import { Shortcuts } from './Shortcuts';
import { Links } from './Links';
import { Info } from './Info';
import { Products } from './Products';

const MfeRemoteAccountsList = lazy(() =>
  // FIXME: importRemote<{ default: typeof AccountsListType }>({
  importRemote({
    url: async () => Promise.resolve('http://localhost:4204'),
    scope: 'mfe-accounts',
    module: './AccountsList',
    remoteEntryFileName: 'remoteEntry.js',
    esm: true,
  })
);

const MfeRemotePaymentsHistory = lazy(() =>
  // FIXME: importRemote<{ default: typeof AccountsListType }>({
  importRemote({
    url: async () => Promise.resolve('http://localhost:4206'),
    scope: 'mfe-payments',
    module: './PaymentsHistory',
    remoteEntryFileName: 'remoteEntry.js',
    esm: true,
  })
);

export const DashboardPanel = () => {
  return (
    <div>
      <NotificationsBar message="Notification for Dashboard" />
      <div></div>
      <div style={{ display: 'flex' }}>
        <div style={{ width: 200, flexDirection: 'column' }}>
          <Shortcuts />
          <Products />
        </div>
        <div style={{ width: '100%' }}>
          <Suspense fallback={<p>Loading accounts...</p>}>
            <MfeRemoteAccountsList />
          </Suspense>
          <Suspense fallback={<p>Loading payments...</p>}>
            <MfeRemotePaymentsHistory />
          </Suspense>
        </div>
        <div style={{ width: 200, flexDirection: 'column' }}>
          <Links />
          <Info />
        </div>
      </div>
      <div></div>
    </div>
  );
};
