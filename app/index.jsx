import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose, combineReducers} from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRedirect, IndexRoute, hashHistory } from 'react-router';
import thunk from 'redux-thunk';

// 全局数据处理
import AppContainer from './containers/AppContainer.jsx';
// 文章功能 组件
import * as article from './containers/article';
// 广场功能 组件
import * as post from  './containers/post';
// 消息功能 组件
// import Message from  './containers/message';
// 账户功能 组件
// import Account from './containers/account';

import * as reducers from './reducers';

// 创建 Redux 的 store
const store = createStore(
  combineReducers(reducers),
  compose(
    applyMiddleware(thunk),
  	window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

// 获取 token 并注入到 user 中
// store.dispath(fetchUserToken({username: '', password: ''}))
//

// 使用 React-Router, 并挂载 React 渲染后的 DOM
ReactDOM.render(
	<Provider store={store}>
    <Router history={hashHistory}>
        <Route path="/" component={AppContainer} >
          <IndexRedirect to="/article/" />
          <Route path="article" >
            <IndexRoute component={article.ListContainer} />
            <Route path=":articleId" component={article.DetailContainer} />
          </Route>
          <Route path="post">
            <IndexRoute component={post.ListContainer} />
            <Route path=":postId" component={post.DetailContainer} />
          </Route>
          {/*
          <Route path="message" component="Message.FrameContainer">
            <IndexRoute component="Message.ListContainer" />
            <Route path=":messageId" component="Message.DatailContainer" />
            <ROute path="new" component="Message.NewContainer" />
          </Route>
          <Route path="account" component="Account.FrameContainer">
            <IndexRoute component="Account.ListContainer" />
          </Route>
          */}
        </Route>
    </Router>
	</Provider>,
	document.getElementById('app')
);
