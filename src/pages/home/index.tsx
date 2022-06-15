import type { NextPage } from 'next';
import Image from 'next/image';
import backgroundImg from '@/assets/img/background.jpeg';
import style from './style.module.scss';

const Home: NextPage = () => {
  return (
    <div className={style.home}>
      <Image src={backgroundImg || ''} alt='background-img' objectFit='cover' layout='fill' quality='100' />
      <div></div>
    </div>
  );
};

export default Home;
