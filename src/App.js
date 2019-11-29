import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash/object';
import Routes from './Routes';
import { startup } from '../src/actions/AirportListAction';
import {OVERLAY_TYPES} from '../src/constants/constants';
import Overlay from '../src/components/Overlay';

class App extends Component {
  componentDidMount(){
    this.props.startup();
  }

  render(){
    const {loading} = this.props;
    
    return (
      <React.Fragment>
				<React.StrictMode>
					<Routes />
					{loading && <Overlay overlayType={OVERLAY_TYPES.LOADER} />}
				</React.StrictMode>
			</React.Fragment>
    );
  }
}

App.propTypes = {
	loading: PropTypes.bool.isRequired,
	startup: PropTypes.func.isRequired
};

function mapStateToProps(state) {
	return {
		loading: _.get(state.airportList, 'appLoading')
	}
}

function mapDispatchToProps(dispatch) {
	return {
		startup: bindActionCreators(startup, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
