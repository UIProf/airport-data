import React, {PureComponent} from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import _ from 'lodash/object'
import ListItem from '../components/ListItem';
import './AirportList.scss';

class AirportList extends PureComponent{

    render(){
        const { airportlist }  = this.props;
        return(
            <div className="airport-list">
                <h1>List All Airports</h1>
                <ul className="list-group">
                    <ListItem listdata={airportlist} />
                </ul>
            </div>
        )
    }

}

AirportList.propTypes = {
	airportlist: PropTypes.array,
	error: PropTypes.string
};

const mapStateToProps = state => {
    return {
      airportlist: _.get(state.airportList, 'list', ''),
      error: _.get(state.airportList, 'error', '')
    };
  };

export default connect(mapStateToProps)(AirportList);