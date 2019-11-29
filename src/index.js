import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router';
import configureStore, { history } from './store/configureStore';
import PageNotFound from '../src/components/PageNotFound';
import './index.scss';
import App from './App';


export const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
				<Route exact path={'/404'} component={PageNotFound} />
				<Route component={App} />
			</Switch>
        </ConnectedRouter>
        
    </Provider>, document.getElementById('root'));

