import {List, Map} from 'immutable';

import * as loadActions from '../actions/loadActions';
import * as routerActions from '../actions/routerActions';
import * as articleActions from '../actions/articleActions';

export function load(state=Map(), action) {
	switch (action.type) {
		case loadActions.PULL_LOADING:
			return state.set('status', 'loading');
		case loadActions.PULL_COMPLETED:
			return state.set('status', 'completed');
		default:
			return state;
	}
};

export function router(state=Map(), action) {
	switch (action.type) {
		case routerActions.TO_PAGE: {
			const { pageName, preload } = action;
			window.scrollTo(0,0);
			return state
							.set('pageName', pageName)
							.set('pagePreload', preload);
		}
    case routerActions.TO_COMPOSITION: {
      const { compositionName=null, preload={} } = action;
      return state
              .set('compositionName', compositionName)
              .set('compositionPreload', preload);
    }
		default:
			return state;
	}
};

export function article(state = Map({currentArticle: null}), action) {
		switch(action.type) {
			case articleActions.SET_ARTICLE_LIST:
				return state.set('articleList', action.articleList);
			case articleActions.SET_ACTIVITY_LIST:
				return state.set('activityList', action.activityList);
			default:
				return state;
		}
};
