/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event';
import { useState, useEffect } from 'react';
import microApp from '@micro-zoe/micro-app';
import { connect } from 'umi';
import { Spin } from 'antd';
import Loading from '@/components/Loading';
import config, { LOGOUT_PATH } from '../../config';

let userInfo;

function SwiftScreen(props) {
  const [showLoading, setLoading] = useState(true);

  function handleData(data) {
    const { payload, type } = data || {};
    const { dispatch } = props;
    if (type === 'setCurrentUser') {
      const { name, profile_image_url } = payload;
      const newPayload = {
        ...payload,
        userName: name,
        avatar: profile_image_url,
      };
      dispatch({
        type: 'user/setCurrentUser',
        payload: newPayload,
      });
      userInfo = newPayload;
    }
  }

  useEffect(() => {
    microApp.addDataListener('swiftScreen', handleData);
    return function clearup() {
      microApp.removeDataListener('swiftScreen', handleData);
      microApp.clearDataListener('swiftScreen');
    };
  }, []);

  return (
    <div style={{ height: '100%' }}>
      <Loading loading={showLoading} />
      <micro-app
        name="swiftScreen"
        url={config.swiftScreen}
        onMounted={() => setLoading(false)}
        onAftershow={() => {
          userInfo &&
            props.dispatch({
              type: 'user/setCurrentUser',
              payload: userInfo,
            });
          setLoading(false);
        }}
        baseRoute="/swift-screen"
        keep-alive
        data={{ logoutUrl: LOGOUT_PATH }}
      />
    </div>
  );
}

export default connect(({ user }) => ({
  currentUser: user.currentUser,
}))(SwiftScreen);
