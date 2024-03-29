import { Button, Result } from 'antd';
import { history } from '@umijs/max';

const NoFoundPage = () => (
  <Result
    status="404"
    title="404"
    subTitle="抱歉，当前页面不存在"
    extra={
      <Button type="primary" onClick={() => history.push('/')}>
        返回首页
      </Button>
    }
  />
);

export default NoFoundPage;
