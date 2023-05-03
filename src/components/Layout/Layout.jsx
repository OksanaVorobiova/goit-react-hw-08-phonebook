import { Outlet } from 'react-router-dom';
//import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import { Navigation } from 'components/Layout/Navigation/Navigation';
import { Header } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};
