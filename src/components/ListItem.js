import React from 'react';
import Overlay from './Overlay';
import {OVERLAY_TYPES} from '../constants/constants';

const ListItem = ({listdata}) => {
    console.log('dddd', listdata)
    let AirportData;
    if(listdata !== 'undefined'){
        AirportData = listdata.map(item => {
            return (
                <li className="list-item" key={item.airportCode}>
                    <a href={`/${item.airportCode}`} className="link-list">
                        <i className="fa fa-chevron-right"></i>
                        <div className="airport-name"> {item.airportName}</div>
                        <div className="country"> {item.country.countryName}</div>
                    </a>
                </li>
            )
        })
    }else{
        AirportData = <Overlay overlayType={OVERLAY_TYPES.LOADER}/>;
    }

    return (
        <React.Fragment>
            {AirportData}
        </React.Fragment>
    );
    
}

export default ListItem;