import React from 'react';
import {reformatAirportList} from '../Utills/Utills'

const DetailData = ({detailList}) => {
    const list = reformatAirportList(detailList);
    let renderdata;
    let timeData;
    let locData;
    if(list !== undefined){
        renderdata = list.map((item, i) => {
            return(
                <div className="details" key={i}>
                    <div className="title"> {item.CurrencyTitle}</div>
                    <div className="titlevalue"> {item.cvalue}</div>
                </div>
               
            )
        });
        timeData = list.map((item, i) => {
            return(
                <div className="details" key={i}>
                    <div className="title"> {item.TimezoneTitle}</div>
                    <div className="titlevalue"> {item.timeZonevalue}</div>
                </div>
               
            )
        });
        locData = list.map((item, i) => {
            return(
                <div className="details" key={i}>
                    <div className="title"> {item.LoctionTitle}</div>
                    <div className="titlevalue"> <span><strong>Latitude :</strong> {item.locationValue.latitude}</span> <span><strong>Longitude : </strong>{item.locationValue.longitude}</span></div>
                </div>
               
            )
        })
    }
    return (
        <React.Fragment>
            {renderdata}
            {timeData}
            {locData}
        </React.Fragment>
    )
}

export default DetailData;