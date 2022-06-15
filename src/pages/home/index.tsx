import type { NextPage } from 'next';
import React, { useEffect } from 'react';
import Router from 'next/router';
import BaseLayout from '@/components/layout/baseLayout';
import style from './style.module.scss';

const Home: NextPage = () => {
  useEffect(() => {
    const { pathname } = Router;
    if (pathname == '/home') Router.push('/');
  });
  return (
    <div className={style.home}>
      <BaseLayout />
    </div>
  );
};

export default Home;
