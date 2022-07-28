/**
 * @description 用户详情
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../../../server.config';
import { initRequest } from '@/common';

const backEndUrl = serverConfig()['platform'];

export const init = new defs.platform.TheUserInformation();

export async function fetch(params = {}) {
  const request = await initRequest();
  const result = await request.get(backEndUrl + '/api/user/detail', {
    headers: {
      'Content-Type': 'application/json',
    },
    params,
  });
  if (result) {
    if (!result.success) {
      throw new Error(JSON.stringify(result));
    } else {
      return result.data || new defs.platform.TheUserInformation();
    }
  } else {
    throw new Error(JSON.stringify({ message: '接口未响应' }));
  }
}
