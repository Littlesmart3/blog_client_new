import type { NextPage } from 'next';
import React, { useEffect } from 'react';
import Router from 'next/router';
import Image from 'next/image';
import backgroundImg from '@/assets/img/background.jpeg';
import style from './style.module.scss';

const Home: NextPage = () => {
  useEffect(() => {
    const { pathname } = Router;
    if (pathname == '/home') Router.push('/');
  });
  return (
    <div className={style.home}>
      <Image src={backgroundImg || ''} alt='background-img' objectFit='cover' layout='fill' quality='100' />
      <div></div>
    </div>
  );
};

export default Home;
