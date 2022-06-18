import type { NextPage } from 'next';
import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import { message } from 'antd';
import style from './style.module.scss';
import _ from 'lodash';

const NavigationComponent: NextPage = () => {
  // 滑动前当前滑动高度
  let beforeScrollTop = 0;
  let state = {
    scrollWag: 'up'
  };
  const [navTransform, setNavTransform] = useState('unset');

  // 路由转跳
  const routeChange = (type: string) => {
    Router.push('/');
  };

  // 搜索按钮
  const handleSearch = () => {
    message.error('功能暂未开放');
  };

  // 菜单按钮
  const handleMenu = () => {
    message.error('功能暂未开放');
  };

  // 获取页面滑动方向
  const getScollDirection = () => {
    const getScollTop = () => {
      let scrollTop = 0;
      if (document?.documentElement && document?.documentElement?.scrollTop) {
        scrollTop = document?.documentElement.scrollTop;
      } else if (document?.body) {
        scrollTop = document?.body.scrollTop;
      }
      return scrollTop;
    };
    const bindHandleScroll = () => {
      const scrollTop = getScollTop();
      if (scrollTop <= beforeScrollTop) {
        if (!(state.scrollWag === 'up')) {
          state.scrollWag = 'up';
          _.debounce(() => setNavTransform('translateY(-60px)'), 0);
        }
      } else {
        if (!(state.scrollWag === 'down')) {
          state.scrollWag = 'down';
          _.debounce(() => setNavTransform('translateY(0px)'), 0);
        }
      }
      setTimeout(() => (beforeScrollTop = scrollTop), 0);
    };
    return bindHandleScroll();
  };
  useEffect(() => {
    // TODO:
    // window.addEventListener('scroll', () => {
    //   getScollDirection();
    // });
  });
  return (
    <div className={style.NavigationComponent} style={{ transform: navTransform }}>
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
