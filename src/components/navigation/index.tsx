import type { NextPage } from 'next';
import Router from 'next/router';
import React, { useEffect } from 'react';
import { message } from 'antd';
import style from './style.module.scss';

const NavigationComponent: NextPage = () => {
  // 路由转跳
  const routeChange = (type: string) => {
    Router.push('/');
  };
  const handleSearch = () => {
    message.error('功能暂未开放');
  };
  const handleMenu = () => {
    message.error('功能暂未开放');
  };
  return (
    <div className={style.NavigationComponent}>
      <div className={style.left} onClick={() => routeChange('home')}>
        Littlesmart3
      </div>
      <div className={style.right}>
        <i className='iconfont icon-search' onClick={handleSearch}></i>
        <i className='iconfont icon-list' onClick={handleMenu}></i>
      </div>
    </div>
  );
};

export default NavigationComponent;
