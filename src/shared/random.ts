const NUMBER_CHAR =
  "0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
/**
 * 产生随机[nim, max]
 * @param min 最小值
 * @param max 最大值
 */
export const randomClose = (min: number = 0, max: number = 1) => {
  const random = () => Math.random() * (max + 1 - min) + min;
  let result: number = Math.ceil(random());
  while (result > max) {
    result = Math.ceil(random());
  }
  return result;
};

/**
 * 产生随机(nim, max)
 * @param min 最小值
 * @param max 最大值
 */
export const randomOpen = (min: number = 0, max: number = 1) => {
  const random = () => Math.random() * (max - min) + min;
  let result: number = Math.ceil(random());
  while (result === min) {
    result = Math.ceil(random());
  }
  return result;
};

/**
 * 产生随机(nim, max]
 * @param min 最小值
 * @param max 最大值
 */
export const randomLeftOpen = (min: number = 0, max: number = 1): number => {
  const random = () => Math.random() * (max + 1 - min) + min - 1;
  let result: number = Math.ceil(random());
  while (result < min) {
    result = Math.ceil(random());
  }
  return result;
};

/**
 * 获取随机字符串
 * @param len 长度
 * @example randomChar(6) '1AS23V'
 */
export const randomChar = (len: number = 4): string => {
  const chars = NUMBER_CHAR;
  let res = "";
  for (let i = 0; i < len; i++) {
    let id = Math.floor(Math.random() * 36);
    res += chars[id];
  }
  return res;
};
