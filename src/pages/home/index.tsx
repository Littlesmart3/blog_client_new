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

const BannerSlot: FC = () => {
  return (
    <div className={style['banner-solt']}>
      <div>风丶宇的个人博客</div>
    </div>
  );
};

const FooterSlot: FC = () => {
  return (
    <div className={style['footer-slot']}>
      <div className={style.beian}>{RECORD.copyright}</div>
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
      <BaseLayout bannerSlot={<BannerSlot />} footerSlot={<FooterSlot />} />
    </div>
  );
};

export default Home;
