import type { NextPage } from 'next';
import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import { message } from 'antd';
import style from './style.module.scss';
import _ from 'lodash';

const NavigationComponent: NextPage = () => {
  // 滑动前当前滑动高度
  let beforeScrollTop = 0;

  const [navTransform, setNavTransform] = useState({});

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
  const getScollDirection = function () {
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
      setNavAnimation(scrollTop <= beforeScrollTop ? 'up' : 'down');
      setTimeout(() => (beforeScrollTop = scrollTop), 0);
    };
    return bindHandleScroll();
  };

  // 设置滑动动画
  const setNavAnimation = (type: 'up' | 'down') => {
    const style = {
      transform: `translateY(${type == 'up' ? '0' : '-60'}px)`,
      backgroundColor: beforeScrollTop > 100 ? 'rgba(255, 255, 255, 0.8)' : 'unset',
      color: beforeScrollTop > 100 ? '#4b4948' : '#fff',
      transition: '0.5s'
    };
    setNavTransform(style);
  };
  useEffect(() => {
    // TODO: 动画设置还有问题，调试
    window.addEventListener(
      'scroll',
      _.throttle(() => getScollDirection(), 100)
    );
  }, []);
  return (
    <div className={style.NavigationComponent} style={navTransform}>
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
