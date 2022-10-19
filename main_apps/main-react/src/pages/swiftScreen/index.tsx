// @ts-ignore
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event';
import { useEffect } from 'react';
import microApp from '@micro-zoe/micro-app';
import { connect } from '@umijs/max';
import config, { LOGOUT_PATH } from '../../config';
import { ROUTE_PATH } from '@/constant';
import Loading from '@/components/Loading';
import useLoading from '@/hooks/useLoading';

function SwiftScreen(props: any) {
  const { loading } = useLoading(ROUTE_PATH.SWIFT_SCREEN);
  function handleData(data: any) {
    const { payload, type } = data || {};
    const { dispatch } = props;
    if (type === 'changeHeaderCollapsed') {
      dispatch({
        type: 'global/changeHeaderCollapsed',
        payload,
      });
    }
  }

  useEffect(() => {
    microApp.addDataListener(ROUTE_PATH.SWIFT_SCREEN, handleData);
    return function clearup() {
      microApp.removeDataListener(ROUTE_PATH.SWIFT_SCREEN, handleData);
      microApp.clearDataListener(ROUTE_PATH.SWIFT_SCREEN);
    };
  }, []);

  return (
    <div style={{ height: '100%' }}>
      <Loading loading={loading} />
      <micro-app
        name={ROUTE_PATH.SWIFT_SCREEN}
        baseRoute={`/${ROUTE_PATH.SWIFT_SCREEN}`}
        url={`${config['smart-visualization']}`}
        keep-alive
        data={{ logoutUrl: LOGOUT_PATH }}
      />
    </div>
  );
}

export default connect(({ global }: any) => ({
  headerCollapsed: global.headerCollapsed,
}))(SwiftScreen);
