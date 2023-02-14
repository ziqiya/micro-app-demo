let config = {
  'smart-bi': 'http://localhost:8887',
  'smart-data': 'http://127.0.0.1:8000/',
  'smart-lowcode': 'http://localhost:3001/',
  'smart-visualization': 'http://localhost:8889',
  'smart-iot': 'http://127.0.0.1:8000/',
};
const isEnvPro = process.env.NODE_ENV === 'production';

if (isEnvPro) {
  config = {
    'smart-bi': 'http://smart-bi.platform.jxas.ac.cn:82/smart-bi',
    'smart-data': 'http://smart-data.platform.jxas.ac.cn:82/smart-data',
    'smart-lowcode': 'http://lowcode.platform.jxas.ac.cn:82',
    'smart-visualization': 'http://smart-visualization.platform.jxas.ac.cn:82/smart-visualization',
    'smart-iot': 'http://smart-iot.platform.jxas.ac.cn:82/smart-iot',
  };
}

/** 退出登录跳转页 */
export const LOGOUT_PATH =
  'http://platform-frontend.platform.jxas.ac.cn:82/logout?redirect_url=http://platform-frontend.platform.jxas.ac.cn:82/';

export default config;
