/**
 * 延时器
 * @param delay number delay time
 */
export const Delay = (delay: number = 0) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
};
