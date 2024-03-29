/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2022-07-28 18:10:42
 * @LastEditors: 阮旭松
 * @LastEditTime: 2023-02-14 19:55:29
 */

/** 云平台 antd 样式前缀（防止子应用样式污染） */
export const PREFIX_CLASS = 'cloud';

/**
 * 初始化分页数据
 */
export const initialPagination = {
  page: 1,
  pageSize: 10,
};

/** 模板套餐pageSize */
export const PACKAGE_PAGE_SIZE = 100;

export const THROTTLE_INTERVAL = 500;

/** 获取 验证码方式枚举 */
export enum SmsTypeEnum {
  注册 = 0,
  修改密码 = 1,
  登录 = 2,
}

// 后端返回的code
export enum LoginFailure {
  TOKEN缺失 = 60001,
  TOKEN无效 = 60002,
  TOKEN过期 = 60003,
  TOKEN有效但未注册 = 60004,
}

/** 资源类型枚举 */
export enum RESOURCE_TYPE_MAP {
  菜单 = 0,
  按钮 = 1,
}

/**
 * 登录配置
 */
export const LOGIN_CONFIG = Object.freeze({
  /** 应用ID */
  clientId: 'manage-center',
  /** 是否是单点登录 */
  isSSO: true,
  /** 密钥 */
  secret: '',
});

/** 角色状态枚举 */
export enum ROLE_STATUS_MAP {
  禁用 = 0,
  正常 = 1,
}

/** 模板创建状态枚举 */
export enum TEMPLATE_STATUS_MAP {
  未创建 = 0,
  创建中 = 1,
}

/** 模板状态颜色枚举 */
export enum TEMPLATE_STATUS_COLOR_MAP {
  '#45D96E' = 0,
  '#0085FF' = 1,
  '#64B449' = 2,
  '#FF0000' = 3,
}

/** 模板历史状态枚举 */
export enum HISTORY_STATUS_MAP {
  未创建 = 0,
  创建中 = 1,
  成功 = 2,
  失败 = 3,
}

/** 模板子系统枚举 */
export enum TEMPLATE_CLIENT_ENUM {
  数智平台 = 'td-bi',
  敏捷大屏 = 'td-bigscreen',
  敏捷应用 = 'lowcode',
  数融平台 = 'td-data',
}

/** 性别枚举 */
export enum SEX_ENUM {
  女 = 0,
  男 = 1,
}

/** 最大标题长度 */
export const MAX_TITLE_LENGTH = 30;

/** 最大地址/邮箱长度 */
export const MAX_ADDRESS_LENGTH = 100;

/** 最大描述长度 */
export const MAX_DESCRIPTION_LENGTH = 200;

/** 最大长文本长度 */
export const MAX_TEXTAREA_LENGTH = 500;

/** tab 类型 */
export enum TabCloseType {
  line = 'line',
  card = 'card',
  EditableCard = 'editable-card',
}

/** 默认头像地址 */
export const AVATAR_URL =
  'https://td-dev-public.oss-cn-hangzhou.aliyuncs.com/maoyes-app/1658819849135012474.png';
