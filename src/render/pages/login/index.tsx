import React, { useState } from 'react';
// import { BrowserHistory } from 'react-router-dom';
import { message, Button, Input } from 'antd';
import { UserOutlined, LockOutlined, PhoneOutlined } from '@ant-design/icons';
import LoginSvg from '@/assets/img/login/login.svg';
import RegisterSvg from '@/assets/img/login/register.svg';
import dayjs from 'dayjs';
import './style.less';

const Login: React.FC = () => {
  // const history = useHistory();
  const [type, setType] = useState(false);
  const [signIn, setSignIn] = useState({ username: '', password: '' });
  const [signUp, setSignUp] = useState({ username: '', phone: '', password: '' });

  // 切换注册按钮
  const signUpBtn = () => {
    setType(true);
    console.log(type);
  };

  // 切换登录按钮
  const signInBtn = () => setType(false);

  // 确认登录
  const signInConfirm = () => {
    // const send_data = { username: state.sign_in.username, password: state.sign_in.password };
    if (signIn.username == 'admin' && signIn.password == '123456') {
      localStorage.info = JSON.stringify({
        expire_time: dayjs(new Date()).unix() + 86400,
        data: { name: signIn.username }
      });
      // history.push({ pathname: '/' });
    } else {
      message.error('用户名或密码错误！');
    }
  };

  // 确认注册
  const signUpConfirm = () => {
    const { username, password } = signIn;
    if (username != '' && password == '') {
      // history.push({ pathname: '/' });
    }
  };

  // 打开外部链接
  const openExternalLinks = (type: string) => {
    switch (type) {
      case 'wechat':
        location.href = 'https://weixin.qq.com/';
        break;
      case 'alipay':
        location.href = 'https://www.alipay.com/';
        break;
      case 'twitter':
        location.href = 'https://www.twitter.com';
        break;
      case 'facebook':
        location.href = 'https://www.facebook.com';
        break;
      default:
        break;
    }
  };

  return (
    <div className='login h100'>
      <div className={`container ${type ? 'sign-up-mode' : null}`}>
        <div className='forms-container'>
          <div className='signin-signup'>
            <form action='#' className='sign-in-form'>
              <h2 className='title'>Sign in</h2>
              <div className='input-field'>
                <div className='row-center col-center'>
                  <UserOutlined className='icon-style' />
                </div>
                <Input bordered={false} placeholder='Username' defaultValue={signIn.username} />
              </div>
              <div className='input-field'>
                <div className='row-center col-center'>
                  <LockOutlined className='icon-style' />
                </div>
                <Input.Password placeholder='Password' bordered={false} onKeyUp={signInConfirm} defaultValue={signIn.password} />
              </div>
              <Button className='btn solid fs16' onClick={signInConfirm}>
                Sign in
              </Button>
              <div v-if='false'>
                <p className='social-text'>Or Sign in with social platforms</p>
                <div className='social-media'>
                  <a className='social-icon' onClick={() => openExternalLinks('wechat')}>
                    <i className='brand-icon iconfont icon-wechat'></i>
                  </a>
                  <a className='social-icon' onClick={() => openExternalLinks('alipay')}>
                    <i className='brand-icon iconfont icon-alipay'></i>
                  </a>
                  <a className='social-icon' onClick={() => openExternalLinks('twitter')}>
                    <i className='brand-icon iconfont icon-twitter'></i>
                  </a>
                  <a className='social-icon' onClick={() => openExternalLinks('facebook')}>
                    <i className='brand-icon iconfont icon-facebook'></i>
                  </a>
                </div>
              </div>
            </form>
            <form action='#' className='sign-up-form'>
              <h2 className='title'>Sign up</h2>
              <div className='input-field'>
                <div className='row-center col-center'>
                  <UserOutlined className='icon-style' />
                </div>
                <Input bordered={false} placeholder='Username' defaultValue={signUp.username} />
              </div>
              <div className='input-field'>
                <div className='row-center col-center'>
                  <PhoneOutlined className='icon-style' />
                </div>
                <Input bordered={false} placeholder='Phone' defaultValue={signUp.phone} />
              </div>
              <div className='input-field'>
                <div className='row-center col-center'>
                  <LockOutlined className='icon-style' />
                </div>
                <Input.Password bordered={false} placeholder='Password' defaultValue={signUp.password} />
              </div>
              <Button className='btn solid fs16' onClick={signUpConfirm}>
                Sign up
              </Button>
              <div v-if='false'>
                <p className='social-text'>Or Sign up with social platforms</p>
                <div className='social-media'>
                  <a className='social-icon' onClick={() => openExternalLinks('wechat')}>
                    <i className='brand-icon iconfont icon-wechat'></i>
                  </a>
                  <a className='social-icon' onClick={() => openExternalLinks('alipay')}>
                    <i className='brand-icon iconfont icon-alipay'></i>
                  </a>
                  <a className='social-icon' onClick={() => openExternalLinks('twitter')}>
                    <i className='brand-icon iconfont icon-twitter'></i>
                  </a>
                  <a className='social-icon' onClick={() => openExternalLinks('facebook')}>
                    <i className='brand-icon iconfont icon-facebook'></i>
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className='panels-container'>
          <div className='panel left-panel'>
            <div className='content'>
              <h3>New here ?</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid!</p>
              <Button className='btn transparent' onClick={signUpBtn}>
                Sign up
              </Button>
            </div>
            <img src={LoginSvg} className='image' alt='' />
          </div>
          <div className='panel right-panel'>
            <div className='content'>
              <h3>One of us ?</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad deleniti.</p>
              <Button className='btn transparent' onClick={signInBtn}>
                Sign in
              </Button>
            </div>
            <img src={RegisterSvg} className='image' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
