import { Outlet } from 'react-router-dom';
//import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import { Navigation } from 'components/Layout/Navigation/Navigation';

export const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};
