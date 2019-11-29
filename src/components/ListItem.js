import React from 'react';

const ListItem = ({listdata}) => {
    let AirportData;

    if(listdata !== undefined){
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
    }else {
        AirportData = null;
    }

    return (
        <React.Fragment>
            {AirportData}
        </React.Fragment>
    );
    
}

export default ListItem;