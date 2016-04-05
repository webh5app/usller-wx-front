const articleList = [
  {
    timeline: '本周',
    articles: [
      {
        id: 0,
        author: 'montls',
        datetime: '29日1点',
        title: '今天 Uber 打折',
        viewed: 1000,
        type: '活动',
        imageUrl: 'http://img10.3lian.com/sc6/show02/67/27/02.jpg',
      },
      {
        id: 1,
        author: 'montls',
        datetime: '29日1点',
        title: '今天 Uber 免费',
        viewed: 1020,
        type: '优惠',
        imageUrl: 'http://img10.3lian.com/sc6/show02/67/27/02.jpg',
      },
    ]
  },
  {
    timeline: '上一周',
    articles: [
      {
        id: 0,
        author: 'montls',
        datetime: '29日1点',
        title: '今天 Uber 有一个重要的活动就是有一个重要的活动就是一个重要的活动',
        viewed: 1020000,
        type: '活动',
        imageUrl: 'http://img10.3lian.com/sc6/show02/67/27/02.jpg',
      },
      {
        id: 1,
        author: 'montls',
        datetime: '29日1点',
        title: '发布一个重要的额通知, 真的是一个重要的通知, 我也不知道通知什么',
        viewed: 10000,
        type: '通知',
        imageUrl: 'http://img10.3lian.com/sc6/show02/67/27/02.jpg',
      }
    ]
  },
  {
    timeline: '去年3月',
    articles: [
      {
        id: 0,
        author: 'montls',
        datetime: '29日1点',
        title: '今天 Uber 有一个重要的活动就是有一个重要的活动就是一个重要的活动',
        viewed: 1020000,
        type: '活动',
        imageUrl: 'http://img10.3lian.com/sc6/show02/67/27/02.jpg',
      },
      {
        id: 1,
        author: 'montls',
        datetime: '29日1点',
        title: '发布一个重要的额通知, 真的是一个重要的通知, 我也不知道通知什么',
        viewed: 10000,
        type: '通知',
        imageUrl: 'http://img10.3lian.com/sc6/show02/67/27/02.jpg',
      }
    ]
  },
  {
    timeline: '去年2月',
    articles: [
      {
        id: 0,
        author: 'montls',
        datetime: '29日1点',
        title: '今天 Uber 有一个重要的活动就是有一个重要的活动就是一个重要的活动',
        viewed: 1020000,
        type: '活动',
        imageUrl: 'http://img10.3lian.com/sc6/show02/67/27/02.jpg',
      },
      {
        id: 1,
        author: 'montls',
        datetime: '29日1点',
        title: '发布一个重要的额通知, 真的是一个重要的通知, 我也不知道通知什么',
        viewed: 10000,
        type: '通知',
        imageUrl: 'http://img10.3lian.com/sc6/show02/67/27/02.jpg',
      }
    ]
  },
  {
    timeline: '3月',
    articles: [
      {
        id: 0,
        author: 'montls',
        datetime: '29日1点',
        title: '今天 Uber 有一个重要的活动就是有一个重要的活动就是一个重要的活动',
        viewed: 1020000,
        type: '活动',
        imageUrl: 'http://img10.3lian.com/sc6/show02/67/27/02.jpg',
      },
      {
        id: 1,
        author: 'montls',
        datetime: '29日1点',
        title: '发布一个重要的额通知, 真的是一个重要的通知, 我也不知道通知什么',
        viewed: 10000,
        type: '通知',
        imageUrl: 'http://img10.3lian.com/sc6/show02/67/27/02.jpg',
      }
    ]
  },
  {
    timeline: '2月',
    articles: [
      {
        id: 0,
        author: 'montls',
        datetime: '29日1点',
        title: '今天 Uber 有一个重要的活动就是有一个重要的活动就是一个重要的活动',
        viewed: 1020000,
        type: '活动',
        imageUrl: 'http://img10.3lian.com/sc6/show02/67/27/02.jpg',
      },
      {
        id: 1,
        author: 'montls',
        datetime: '29日1点',
        title: '发布一个重要的额通知, 真的是一个重要的通知, 我也不知道通知什么',
        viewed: 10000,
        type: '通知',
        imageUrl: 'http://img10.3lian.com/sc6/show02/67/27/02.jpg',
      }
    ]
  },
];

const pureTextArticle = {
  id: '123331',
  title: '纯文本测试文章',
  meta: {
    author: 'montlsC',
    datetime: '2016-3-30',
    type: '活动',
    viewed: '1222',
    shared: '1112',
    readed: '12万3千',
    imageUrl: 'http://img10.3lian.com/sc6/show02/67/27/02.jpg',
  },
  content: `
  <div class="show-content"><div class="image-package imagebubble" widget="ImageBubble">
  <img src="http://upload-images.jianshu.io/upload_images/685980-2b6de893d81dab3a.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/685980-2b6de893d81dab3a.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" class="imagebubble-image"><br><div class="image-caption">《文字生涯》</div>
  </div><p>这本书其实是某逊图书打折满200减80时为了凑金额而买的。</p><p>事实证明，有时的精挑细选反而买到一些无用，不经意的选择却会带来诸多惊喜，这本书就带给了大叔无限惊喜。</p><p>这是一本不同于以往的自传，薄薄的159页写满了法国作家萨特对自我的剖析和童年秩事。每一页每一行每一句无不是脑洞大开的想像和无穷无尽的跳跃，大叔好多时候看起来非常吃力。</p><p>与其说他是萨特童年的自传，不如说他通过童年这件外衣传递了自己的思考和人生哲学，是本非常值得一读书，相信它能引起你的共鸣。</p><p>除去萨特天马行空的想像，跳跃时空的掌控和朴实无华的技巧，这本书引发了大叔对于选择、影响、勤奋和梦想的思考。</p><h2>选 择</h2><p>萨特把人生的选择放置在了一段非常长的时期内检验，三千年，是的，他检验今天的选择是否正确有道理放在了三千年后他的后代如何看待自己的问题。正是由于他的这种想法，导致他走上了思想、哲学之路。为什么要考虑自己死后两千年的事情？人既然死去，即使拥有成吉思汗的丰功伟绩又有什么意义？</p><p>萨特认为这是生命意义在于：只要人类不消亡，生者会一直承载他前面数十代死者的生命。</p><p>这种说法看起来荒诞不经，但却意义非凡。史铁生在其《病隙笔记》中也有类似的阐释，只是他更进了一步，将这种意义置于整个人类之上。</p><p>对于我们来说，不可能人人都能成为伟大的哲学家著书立说，但却可以用他所提供的方法来过好我们的生活。在生活中，我们常常为自己一时的选择或得失而懊悔不以，实际上是庸人自扰。例如今晚吃什么菜，穿什么衣服这些选择如果放在一年时间里看，其实微不足道；同样的道理，这一年多赚两万和下一年少赚两万，这一年多去一个地方旅行和下一步少去一个地方旅行……——放在一生之中，并没有多大差别。</p><p>真正产生质变的是来自于重复选择的不断积累。例如乔布斯连续几个月只吃胡萝卜，结果成功的将皮肤染成了胡萝卜色，还带着胡萝卜的口气，成为了兔见兔爱的萝卜人，最终生产出了苹果产品。同样的道理，如果我们日复一日的选择做同样的事情，那么我们必然会在这件事情上有所结果，这就是所谓的“10万小时成为专家”的言论。我们的人生也是如此，如果一直选择做一个好人，这种选择不断重复不断积累，到时候想做坏人都难。</p><p>所以相比一时的选择，方向更为重要，如何定位自己的人生，如何让人生更有意义或者干脆没有意义才是指引人生方向最为重要的选择。</p><h2>影 响</h2><p>本书主要讲了父辈和环境对萨特的影响。首先是父辈的影响。在萨特幼年父亲便已离世，对他产生巨大的影响的是外祖父和母亲。外祖父是位教育家，虽然他并没有直接对萨特展开教育，但他正统的文学观和一屋子的文学圣经对萨特产生了极为重要的影响。而母亲对萨特的影响更多来自于她努力挣脱却又无法脱离的现实，当然更重要的她对萨特的爱。正是外公和母亲对萨特的影响，才让他开始思考人生，开始走入了哲学之路。</p><p>其次是环境的影响。出生于小资产阶级让萨特没有生活压力得以萌发写作的禁止，同时小时候经历第一次和第二次世界大战，特别是在第二次世界大战他直接参战并被俘虏，让萨特在自身被环境影响的同时，通过观察人们的变化来获得了更深层次的思考。</p><p>第三，并非所有的影响都会让被影响者走上预想的道路。例如在宗教的影响上，萨特出生在一个笃信宗教的家族，按理说他即使不像外公的弟弟一样走上宗教之路，至少会信教，可他却完全背离了宗教，成为无神论者。换句唯心的话来说，这其实也是一种影响——反面的影响。</p><h2>勤 奋</h2><p>萨特从来不认为自己是个天才，他相信只有依靠勤奋才能写出比昨天还要好的作品。所以他终生笔耕不断，直到双目失明再放弃了写作。</p><p>勤奋是人们经常提到的一个词，无论是形容一个人还是下定决心做某事时，往往会把它请出来。它确定是一个非常有用的词语，并不仅仅是它的词义，更为重要的是它所形容的过程。</p><p>对于勤奋的表述向来不少。例如爱迪生的天才是九十九分汗水加上一分灵感，</p><p>一年一天一时一分一秒，只有不断的努力和坚持才能够用勤奋到达自己的理想之地，才能换得那碗甘甜或冷冽的美酒。</p><h2>梦 想</h2><p>梦想不能当吃饭，这是萨特十岁那年，外祖父夏尔和他进行的一场男人之间对话的核心。当时萨特开始展露其写作天份（他自认为是东抄一些西抄一些东西），母亲和她的朋友们认为萨特从此可以走上大作家之路，然而外公夏尔却告诉萨特光靠写作不能吃饭，需要找一个诸如教师、文学研究员之类的第二职业才行。</p><p>虽然最终萨特走上了职业作家之路，并没有从事外公建议的第二职业，可是外公的话却深刻在他的心中。寻求生存之道是为了更好的向上探索。</p><p>夏尔的话或许对萨特来说没有什么用，但对于每一个有梦想的我们来说，有非常重要的意义。毕竟不是每个人都能幸运的选择自己梦想的工作，如果说有第二职业作为基本物质的支撑，以此为基础扬帆远行才更加有底气，才不会“被金钱踢了屁股。”</p><p><br></p><p>（全文完，谢谢你的阅读。）</p></div>
  `,
}

const activityList = [
  {
      title: '今天来测试吧',
      imageUrl: '#',
  },
  {
      title: '再测试一次吧',
      imageUrl: '#',
  },
];

const articleData = {
  articleList: articleList,
  activityList: activityList,
  pureTextArticle: pureTextArticle,
};

export default articleData;
