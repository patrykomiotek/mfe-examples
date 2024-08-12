// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { lazy, Suspense } from 'react';
import styles from './app.module.css';
import { HomePage } from './components/HomePage';

import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { NavMenu } from './components/NavMenu';

const AccountsList = lazy(
  () => import('../../../mfe-accounts/src/app/components/AccountsList')
);

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
        index: true,
        element: <HomePage />,
      },
      {
        path: '/accounts',
        element: (
          <Suspense>
            <AccountsList />
          </Suspense>
        ),
      },
    ],
  },
]);

export function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
