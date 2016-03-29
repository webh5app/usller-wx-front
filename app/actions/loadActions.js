// 通信状态
export const PULL_LOADING = 'PULL_LOADING';
export const PULL_COMPLETED = 'PULL_COMPLETED';

export function setDataLoad() {
  return {
    type: PULL_LOADING,
  }
};

export function setDataReceived() {
  return {
    type: PULL_COMPLETED,
  }
};
