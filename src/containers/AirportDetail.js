import React, {PureComponent} from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import _ from 'lodash/object'

import './AirportDetail.scss';
import DetailData from '../components/DetailData';

class AirportDetail extends PureComponent{

    updatelist = () => {
        const keyword = _.get(this.props, 'match.params.id', '');
        const { airportlist } = this.props;
        let filteredlist = airportlist.filter(
            (list) => list.airportCode === keyword);
        return filteredlist;

    }
   

    onBackToList = () => {
        this.props.history.goBack();
    }

   


    render(){
        const detailList = this.updatelist();
        return(
            <div className="airport-detail">
                <h1>Airport Details</h1>
                <DetailData detailList={detailList}/>
                <button className="back-btn" onClick={this.onBackToList}> Back to Airport List</button>
            </div>
        )
    }

}

AirportDetail.propTypes = {
	airportlist: PropTypes.array,
};

const mapStateToProps = state => {
    return {
      airportlist: _.get(state.airportList, 'list', ''),
    };
  };

export default connect(mapStateToProps)(AirportDetail);