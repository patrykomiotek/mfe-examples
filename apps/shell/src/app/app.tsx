import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';
import { importRemote } from '@module-federation/utilities';
import type AboutModule from 'about/Module';

// version with static module loading
// const About = React.lazy(() => import('about/Module'));

// version with dynamic module loading
const About = React.lazy(() =>
  importRemote<{ default: typeof AboutModule }>({
    url: async () => Promise.resolve('http://localhost:4203'),
    scope: 'about',
    module: './Module',
    remoteEntryFileName: 'remoteEntry.js',
    esm: true,
  })
);

const Shop = React.lazy(() => import('shop/Module'));

const Cart = React.lazy(() => import('cart/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/shop">Shop</Link>
        </li>

        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="shell" />} />
        <Route path="/about" element={<About />} />

        <Route path="/shop" element={<Shop />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
