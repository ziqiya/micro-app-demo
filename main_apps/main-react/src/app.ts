/*
 * @文件描述: 运行时配置，可以在项目运行过程中执行一些操作。
 * @公司: thundersdata
 * @作者: 陈杰
 * @Date: 2019-10-25 13:43:18
 * @LastEditors: 阮旭松
 * @LastEditTime: 2022-08-31 10:45:34
 */
import { MenuDataItem } from '@ant-design/pro-layout';
import { message } from 'antd';
import { history } from 'umi';
import arrayUtils, { deepFlatten } from '@/utils/array';
import { PrivilegeResource } from './interfaces/common';
import { LOGIN_CONFIG } from './constant';
import convertResourceToMenu from './utils/convertResourceToMenu';

/** 初始化数据 */
export async function getInitialState() {
  let userInfo: defs.platform.TheUserInformation = {};
  let menus: MenuDataItem[] = [];
  const privileges: PrivilegeResource[] = [];
  let authorityList: string[] = [];

  if (LOGIN_CONFIG.isSSO) {
    try {
      userInfo = await API.platform.sysUser.myself.fetch();
      /** 获取菜单资源 */
      const source = (await API.authorization.resource.listUserResourceData.fetch({
        clientKey: LOGIN_CONFIG.clientId,
        userId: `${userInfo.userId}`,
      })) as unknown as PrivilegeResource[];

      const routes: PrivilegeResource[] = arrayUtils.deepOrder({
        data: source,
        childKey: 'children',
        orderKey: 'orderValue',
        type: 'asc',
      });
      const flatRoutes = deepFlatten(routes);
      flatRoutes.forEach((route) => {
        route.privilegeList && privileges.push(...route.privilegeList);
      });
      authorityList = flatRoutes.map((item) => item.apiUrl);
      console.log('authorityList: ', authorityList);
      menus = convertResourceToMenu(routes);
      /** 没有菜单权限时候应该调整到登录页面 */
      if (menus.length === 0) {
        message.warn('您没有访问权限，请联系管理员！');
        history.replace('/404');
      }
    } catch (error) {
      console.error(error);
    }
  }

  return {
    userInfo,
    menus,
    privileges,
    authorityList,
  };
}
