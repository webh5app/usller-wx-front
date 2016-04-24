const settings = {
  url: {
    prefix: '/apis/v1',
  },

  article: {
    pagination: 20,
    timeout: 24*60*60*1000,
  },

  fetchStatus: {
    REQUEST: 'REQUEST',
    SUCCESS: 'SUCCESS',
    FAILURE: 'FAILURE',
  }
}

export default settings;
