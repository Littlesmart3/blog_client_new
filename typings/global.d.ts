/**
 * 设备唯一标识
 */
declare const __APP_DEVICE_ID__: string;

/**
 * 项目环境
 * @type dev 开发环境
 * @type test 测试环境
 * @type prod 线上环境
 */
declare const __APP_ENV__: { ENV: string; BASE_URL: string };

/**
 * 接口域名
 * @type dev 开发环境接口
 * @type test 测试环境接口
 * @type prod 线上环境接口
 */
declare const __APP_BASE_URL__: string;

declare module '*.svg' {
  const content: string;
  export default content;
}
