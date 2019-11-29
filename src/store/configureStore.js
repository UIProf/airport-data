  
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducer/rootReducer';

export const history = createBrowserHistory();

// prettier-ignore
export default function configureStore() {
	return createStore(
		rootReducer(history), 
		composeWithDevTools(
			applyMiddleware(
				thunk,
				routerMiddleware(history)
			)
		)
	)
}