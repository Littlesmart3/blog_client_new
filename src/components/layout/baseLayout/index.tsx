import type { NextPage } from 'next';
import React, { FC, useEffect } from 'react';
import NavigationComponent from '@/components/navigation';
import _ from 'lodash';
import style from './style.module.scss';

interface propsParams {
  model?: 'min' | 'default';
  bannerSlot?: JSX.Element;
  containerSlot?: JSX.Element;
  footerSlot?: JSX.Element;
  footer?: Boolean;
}

const FooterComponent: FC<{ element: JSX.Element | undefined }> = (props) => {
  return props.element ? props.element : <div className={style['footer-default']}>123</div>;
};

const BaseLayoutComponent: NextPage<propsParams> = (props) => {
  const { model = 'default', footer = true, bannerSlot, containerSlot, footerSlot } = props;

  // banner图片的高度
  const [bannerHeight, setBannerHeight] = React.useState(0);

  // 模式配置
  const getConfig = () => {
    // 配置banner图片的高度
    if (model === 'default') setBannerHeight(window.innerHeight);
    else setBannerHeight(300);
  };

  useEffect(() => {
    getConfig();
    window.onresize = () => getConfig();
  });

  return (
    <div className={style['baseLayout-component']}>
      <header>
        <NavigationComponent />
      </header>
      <main>
        <div className={style.banner} style={{ height: bannerHeight }}>
          {bannerSlot ? <>{bannerSlot}</> : null}
        </div>
        <div className={style.container}>{containerSlot ? <>{containerSlot}</> : null}</div>
        <div className={style.footer}>{footer ? <FooterComponent element={footerSlot} /> : null}</div>
      </main>
    </div>
  );
};

export default BaseLayoutComponent;
