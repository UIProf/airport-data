import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import {PAGE_PATH} from './constants/path';
import AirportList from './containers/AirportList';
import AirportDetail from './containers/AirportDetail';


export default () => {
	return (
		<Switch>
			<Route exact path={PAGE_PATH.Home} component={AirportList} />
			<Route exact path={PAGE_PATH.Detail} component={AirportDetail} />
			<Redirect push={false} to={PAGE_PATH.PageNotFound} />
		</Switch>
	);
};