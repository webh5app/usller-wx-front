function commentTemplate(authorName, authorImageURL, content, datetime) {
  return {
    author: {
      name: authorName,
      imageURL: authorImageURL,
    },
    content: content,
    datetime: datetime,
  };
}

const imageURL = 'http://p2.wmpic.me/article/2015/03/16/1426483393_yCesCgkT.jpeg';
export const  commentList = [
  commentTemplate('你好', imageURL, '我是一个评论', '5天前'),
  commentTemplate('你好1231', imageURL, '我是一个评论.的金发科技罚款;圣诞节疯狂就爱上对方空间按时打卡;发;收电费卡;双方就卡死积分卡三等奖发送卡积分;圣诞节疯狂就类似的飞机上对方水电费就开了副书记的饭卡龙卡及收费加速度开就是垃圾尽快发', '16年2月2日'),
  commentTemplate('你好', imageURL, '我是一个评论,asdfjiaksfj;alsk', '16年2月2日'),
  commentTemplate('上点击发送', imageURL, '我是一个评论', '16年2月2日'),
  commentTemplate('你好', imageURL, '我是一个评论asdfjsadfjlasdfj;klasjfklajs;f挫折就卡死了赶紧发烧了;减肥;奥斯卡了解对方', '16年2月2日'),
  commentTemplate('asfa 你好', imageURL, '我是一个评论', '16年2月2日'),
  commentTemplate('你好', imageURL, '我是一个评论', '16年2月2日')
]
