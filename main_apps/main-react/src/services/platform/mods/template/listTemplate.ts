/**
 * @description 模板列表
 */
import * as defs from '../../baseClass';
import serverConfig from '../../../../../../../server.config';
import { initRequest } from '@/common';

const backEndUrl = serverConfig()['platform'];

export const init = new defs.platform.Page();

export async function fetch(data = {}) {
  const request = await initRequest();
  const result = await request.post(
    backEndUrl + '/api/template_module/template/list',
    {
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    },
  );
  if (result) {
    if (!result.success) {
      throw new Error(JSON.stringify(result));
    } else {
      return result.data || new defs.platform.Page();
    }
  } else {
    throw new Error(JSON.stringify({ message: '接口未响应' }));
  }
}
