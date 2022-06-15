import type { NextPage } from 'next';
import React from 'react';
import { Layout } from 'antd';
import style from './style.module.scss';

const { Header, Footer, Content } = Layout;

const Index: NextPage = () => {
  return (
    <>
      <Layout className={style.baseLayout}>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
};

export default Index;
