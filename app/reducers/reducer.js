import {List, Map} from 'immutable';

import loadActions from '../actions/loadActions';
import routerActions from '../actions/routerActions';
import articleActions from '../actions/actionActions';

export function loadReducer(state=Map(), action) {
	switch (expression) {
		case loadActions.PULL_PROLOADING:
			return state.set('status', 'pull_proloading');
		case loadActions.PULL_LOADING:
			return state.set('status', 'pull_loading');
		case loadActions.PULL_COMPLETED:
			return state.set('status', 'pull_completed');
		default:
			return state;
}

export function routerReducer(state=Map(), action) {
	switch (action.type) {

		case routerActions.TO_PAGE:
			return state.set('pageCurrent', action.pageName);
		default:
			return state;
}

export function acticleReducer(state = Map({currentArticle: null}), action) {
		switch(action.type) {
			case articleActions.SET_CURRENT_ARTICLE:
				return state.set('currentArticle': action.article);
			case articleActions.CLEAR_CURRENT_ARTICLE:
				return state;
			default:
				return state;
		}
};
