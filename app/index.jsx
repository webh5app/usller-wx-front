import "./styles/normalize.scss";

import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import AppContainer from './containers/AppRouterContainer.jsx';

import { article, load, router } from './reducers/reducer';
import { setDataLoad, setDataReceived } from './actions/loadActions';
import { setArticleList, setActivityList } from './actions/articleActions';
import data from './datas/articleData';

const appReducer = combineReducers({
	article,
	load,
	router,
});

const store = createStore(
	appReducer,
	applyMiddleware(
		thunk
	),
	window.devToolsExtension ? window.devToolsExtension() : f => f
);

store.dispatch(setDataLoad());
store.dispatch(setArticleList(data.articleList));
store.dispatch(setActivityList(data.activityList));
store.dispatch(setDataReceived());

// 使用 thunk, 从服务端 异步读取数据

ReactDOM.render(
	<Provider store={store}>
		<AppContainer />
	</Provider>,
	document.getElementById('app')
);
