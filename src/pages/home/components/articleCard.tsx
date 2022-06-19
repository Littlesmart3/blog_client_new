import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import CardComponent from '@/components/card/index';
import style from './style.module.scss';

const ArticleCardComponent: NextPage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(!loading), 1000);
  });
  return (
    <div className={style['card-component']}>
      <CardComponent />
    </div>
  );
};

export default ArticleCardComponent;
