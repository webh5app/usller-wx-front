const authorImage = require('../../images/1.jpeg');
const sectionList = [
  {
    id: 0,
    name: '本周消息',
    total: 3,
    datetime: 1460364212258, //时间戳
    articles: [
      {
        id: 0,
        title: '今天是个好天气啊, 好天气, 好天气, 好天气!',
        articleId: 20001,
        imageURL: authorImage,
        meta: {
          view: 10000,
          like: 1000,
          comment: 100,
          datetime: '4月9日上午9时',
        }
      },
      {
        id: 1,
        title: '发工资了, 好高兴, 好高兴',
        articleId: 20002,
        imageURL: authorImage,
        meta: {
          view: 1000,
          like: 1,
          comment: 111,
          datetime: '4月9日上午9时',
        }
      },
      {
        id: 2,
        title: '买买买, 剁剁剁, 吃土算什么',
        articleId: 20003,
        imageURL: authorImage,
        meta: {
          view: 100,
          like: 100000,
          comment: 10000,
          datetime: '4月9日上午9时',
        }
      }
    ]
  },
  {
    id: 1,
    name: '上周消息',
    total: 4,
    datetime: 1460364200000,
    articles: [
      {
        id: 0,
        title: '今天是个好天气啊, 好天气, 好天气, 好天气!',
        articleId: 20004,
        imageURL: authorImage,
        meta: {
          view: 10000,
          like: 1000,
          comment: 100,
          datetime: '4月9日上午9时',
        }
      },
      {
        id: 1,
        title: '发工资了, 好高兴, 好高兴',
        articleId: 20005,
        imageURL: authorImage,
        meta: {
          view: 1000,
          like: 1,
          comment: 111,
          datetime: '4月9日上午9时',
        }
      },
      {
        id: 2,
        title: '买买买, 剁剁剁, 吃土算什么',
        articleId: 20006,
        imageURL: authorImage,
        meta: {
          view: 100,
          like: 100000,
          comment: 10000,
          datetime: '4月9日上午9时',
        }
      },
      {
        id: 3,
        title: 'hahahahahahahahaha 哈哈哈',
        articleId: 20007,
        imageURL: authorImage,
        meta: {
          view: 1000,
          like: 1000,
          comment: 1000,
          datetime: '4月9日上午9时',
        }
      }
    ]
  },
]

export default sectionList;
