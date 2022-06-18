import type { NextPage } from 'next';
import React, { FC, useEffect } from 'react';
import Router from 'next/router';
import BaseLayout from '@/components/layout/baseLayout';
import style from './style.module.scss';

// 网站备案信息
export const RECORD = {
  copyright: '版权所有 © 2021 - 2022 Littlesmart3 保留所有权利。',
  icp: '浙ICP备2021034302号',
  url: 'https://beian.miit.gov.cn'
};

// 图片模块
const BannerSlot: FC = () => {
  return (
    <div className={style['banner-solt']}>
      <div className={style['banner-container']}>
        <div className={style['blog-title']}>Littlesamrt3的博客</div>
        <div className={style['blog-info']}>
          <span>还君明珠双泪垂，恨不相逢未嫁时。</span>
          <span className={style['typed-cursor']}>|</span>
        </div>
      </div>
      <div className={style['scroll-down']}>
        <i className='iconfont icon-xiangxia '></i>
      </div>
    </div>
  );
};

// 内容模块
const ContainerSlot: FC = () => {
  return <div className={style['container-solt']}>开发中...</div>;
};

// 底部网站信息
const FooterSlot: FC = () => {
  return (
    <div className={style['footer-slot']}>
      <div className={style.copyright}>{RECORD.copyright}</div>
      <a className={style.beian} href={RECORD.url}>
        {RECORD.icp}
      </a>
    </div>
  );
};

const Home: NextPage = () => {
  useEffect(() => {
    const { pathname } = Router;
    if (pathname == '/home') Router.push('/');
  });
  return (
    <div className={style.home}>
      <BaseLayout bannerSlot={<BannerSlot />} containerSlot={<ContainerSlot />} footerSlot={<FooterSlot />} />
    </div>
  );
};

export default Home;
