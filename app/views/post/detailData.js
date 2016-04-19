const imageURL = require('../../images/banner.jpg');

export const labelList = [
  {
    name: 'talk',
    cnName: '闲聊',
    icon: 'home',
    description: '欢迎PO各种好玩的东东啦',
    imageURL: imageURL,
  },
  {
    name: 'car',
    cnName: '车辆',
    icon: 'car',
    description: '车辆检测,维修,保险 等等...',
    imageURL: imageURL,
  },
  {
    name: 'user',
    cnName: '反馈',
    icon: 'user',
    description: '有什么问题尽管来问小步步呀',
    imageURL: imageURL,
  },
  {
    name: 'activity',
    cnName: '活动',
    icon: 'gift',
    description: '各种福利出没,请注意!!!',
    imageURL: imageURL,
  }
];

const cardData = {
  author: {
    name: 'Kim Montls',
    imageURL: 'http://img.wxcha.com/file/201603/28/2722e3ab4c.jpg'
  },
  datetime: '27时前',
  content: {
    title: '早上吃什么呢?',
    body: '吃吃吃吃吃吃吃, 狂吃,狂吃, 哈哈哈哈哈哈哈哈哈哈哈'
  },
  imageList:  [],
  meta: {
    like: 122,
    comment: 200,
    view: 1000,
    cataIcon: 'bullhorn',
    cataText: '热门'
  }
}

export const cardObj = {
  talk: {
    meta: {
      datetime: 1220023,
    },
    posts: [
      cardData,
      cardData,
      cardData,
      cardData,
      cardData,
      cardData,
      cardData
    ]
  },
  car: {
    meta: {
      datetime: 1231241,
    },
    posts: [
      cardData,
      cardData,
    ]
  },
  user: {
    meta: {
      datetime: 12314,
    },
    posts: [
      cardData,
      cardData,
      cardData,
      cardData,
      cardData,
      cardData,
    ]
  },
  activity: {
    meta: {
      datetime: 1231231,
    },
    posts: [
      cardData,
      cardData,
      cardData,
      cardData,
      cardData,
      cardData,
      cardData,
    ]
  }
}
