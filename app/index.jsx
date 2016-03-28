import "./styles/normalize.scss";

import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


import reducers from './reducers/reducer';
import AppContainer from './views/AppRouter.jsx';

const appReducer = combineReducers(reducers)
const store = createStore(
	appReducer,
	applyMiddleware(
		thunk
	)
);

// 使用 thunk, 从服务端 异步读取数据

ReactDOM.render(
	<Provider store={store}>
		<AppContainer />
	</Provider>,
	document.getElementById('app')
);
