import { Layout, Menu } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import './style.less';

const { Header, Sider, Content } = Layout;

const ZBasicLayout: React.FC = (aaa) => {
  console.log(aaa);

  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => setCollapsed(!collapsed);

  return (
    <Layout className='basicLayout-component'>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className='logo' />
        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={['1']}
          items={[
            { key: '1', label: 'nav 1', icon: <UserOutlined /> },
            { key: '2', label: 'nav 2', icon: <VideoCameraOutlined /> },
            { key: '3', label: 'nav 3', icon: <UploadOutlined /> }
          ]}
        />
      </Sider>
      <Layout className='site-layout'>
        <Header className='site-layout-background' style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, { className: 'trigger', onClick: toggle })}
        </Header>
        <Content className='site-layout-background' style={{ margin: '24px 16px', padding: 24, height: '100%' }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default () => <ZBasicLayout />;
