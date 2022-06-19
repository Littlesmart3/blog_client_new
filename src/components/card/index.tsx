import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { Avatar, Card } from 'antd';
import style from './style.module.scss';

const { Meta } = Card;

const CardComponent: NextPage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(!loading), 1000);
  }, []);
  return (
    <div className={style['card-component']}>
      <Card style={{ width: 300, marginTop: 16 }} loading={loading}>
        <Meta
          avatar={<Avatar src='https://joeschmoe.io/api/v1/random' />}
          title='Card title'
          description='This is the description'
        />
      </Card>
    </div>
  );
};

export default CardComponent;
