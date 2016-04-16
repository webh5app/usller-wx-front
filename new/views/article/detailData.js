const url = require('../../images/2.jpeg');

const article = {
  header: {
    articleId: 10001,
    title: '你好啊的说法就是开机费;按时交付',
    banner: url,
    datetime: '16年4月15日上午',
    activity: '优惠',
    info: {
      like: 100,
      view: 1000,
      comment: 10,
    }
  },
  content: `测试的撒发生纠纷;俺看见三个杀几个; 数据的公开;价格低就; 空间;技术的刚开始;感觉;十几个就是打开国际;萨克管理局;就爱国`,
  comments: [
    {
      author: {
        name: '王尼玛',
        image: url,
      },
      comment: '优惠给力啊, 再给力点吧',
      datetime: '16年4月5日',
      like: 100,
      response:  '大头死变态',
    },
    {
      author: {
        name: '王尼妹',
        image: url,
      },
      comment: '楼上的是我哥',
      datetime: '16年4月5日',
      response:  '大头死变态',
      like: 100,
      response: '真的是你哥耶!',
    },
    {
      author: {
        name: '哈啊哈哈哈',
        image: url,
      },
      comment: '啦啦啦啦啦啦啦啦啦',
      datetime: '16年4月5日',
      response:  '大头死变态',
      like: 100,
      response: null,
    }
  ],
}

export default article;
