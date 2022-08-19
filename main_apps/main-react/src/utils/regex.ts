/**
 * 检验是否是手机号
 */
export const isPhone = (value: string) => {
  const reg = /^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|19[0-9]|14[57])[0-9]{8}$/;
  return reg.test(value);
};

/**
 * 检验用户登录账号是否合规（11位以内的英文数字）
 */
export const isUserAccount = (value: string) => {
  const reg = /^([0-9]|[a-z]|[A-Z]){0,10}$/;
  return reg.test(value);
};

/**
 * 检验企业编码是否合规（以小写字母开头，且只包含小写英文字母和数字，并且长度在20以内）
 */
export const isOrgCode = (value: string) => {
  const reg = /^[a-z]([0-9]|[a-z]|){0,18}$/;
  return reg.test(value);
};

/**
 * 检验是否是座机
 */
export const isTelephone = (value: string) => {
  const reg = /^([0-9]{3,4}-)?[0-9]{7,8}$/;
  return reg.test(value);
};

/**
 * 检验是否是邮箱
 */
export const isEmail = (value: string) => {
  const reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
  return reg.test(value);
};

/**
 * 检验是否是数字
 */
export const isNumber = (value: string) => {
  const reg = /(^([0-9]{1,})(.[0-9]+)?)$/;
  return reg.test(value);
};

/* 校验是否包含数字 */
export const containNumbers = (param: string) => {
  const reg = /\d/;
  return reg.test(param);
};

// 从RegExp中获得reg字符串
export const getRegString = (reg: RegExp) => ('' + reg).substring(1, ('' + reg).length - 1);

/** 是否为一个可用的数字 */
export const isAvailableNumber = (value: number | string) => {
  const reg = /^(-|\+)?\d+(\.\d+)?$/;
  return reg.test('' + value);
};

export default {
  isPhone,
  isTelephone,
  isEmail,
  isNumber,
  containNumbers,
};
