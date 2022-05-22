import React from 'react';
import { Button } from 'antd';

const Home: React.FC = () => (
  <div>
    home
    <Button type='primary'>Primary Button</Button>
    <Button type='primary' danger>
      Primary Button
    </Button>
  </div>
);

export default Home;
