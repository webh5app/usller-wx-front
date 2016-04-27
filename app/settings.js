const settings = {
  url: {
    // prefix: 'http://192.168.42.199:3000/apis/v1',
    prefix: 'http://uberqd.colesmith.space/apis/v1',
  },

  article: {
    pagination: 10,
    timeout: 24*60*60*1000,
  },

  fetchStatus: {
    REQUEST: 'REQUEST',
    SUCCESS: 'SUCCESS',
    FAILURE: 'FAILURE',
  }
}

export default settings;
