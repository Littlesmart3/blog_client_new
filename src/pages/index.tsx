import React from 'react';
import HomePage from '@/pages/home';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import { getScreenWidth } from '@/utils/getScreenWidth';

const Index: NextPage = () => {
  useEffect(() => {
    // getScreenWidth((cb) => console.log(cb));
  }, []);
  return <HomePage></HomePage>;
};

export default Index;
