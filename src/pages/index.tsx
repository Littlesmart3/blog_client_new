import type { NextPage } from 'next';
import React, { useEffect } from 'react';
import Router from 'next/router';

const Index: NextPage = () => {
  useEffect(() => {
    const { pathname } = Router;
    if (pathname == '/') Router.push('/home');
  });
  return <></>;
};

export default Index;
