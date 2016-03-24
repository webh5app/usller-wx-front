import {List, Map} from 'immutable';

export default function reducer(state = Map(), action) {
	switch (action.type) {
		case 'PRELOAD':
			return state.set('status', action.status);
		case 'SET_STATE': 
			return resetVote(setState(state, action.state));
		case 'VOTE':
			return vote(state, action.entry);
	}

	return state;
}