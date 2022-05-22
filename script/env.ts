const setAppEnv = (mode) => {
  const env = mode.NODE_ENV;
  let base_url = '';
  switch (env) {
    case 'dev':
      base_url = 'dev';
      break;
    case 'test':
      base_url = 'test';
      break;
    case 'prod':
      base_url = 'prod';
      break;
    default:
      break;
  }
  return { ENV: env, BASE_URL: base_url };
};

export default setAppEnv;
