import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNavigator from '../components/MainNavigator';
import style from './Root.module.css';

const RootLayout = () => {
  return (
    <>
      <main className={style.main}>
        <Outlet />
      </main>

      <footer className={style.footer}>
        <MainNavigator />
      </footer>
    </>
  );
};

export default RootLayout;