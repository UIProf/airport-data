import React from 'react';
import { shallow } from 'enzyme';
import ListItem from '../ListItem';

describe('OverLayComponent', () => {

    let wrapper;

    const data = [
        {  
            "airportCode":"AAA",
            "internationalAirport":false,
            "domesticAirport":false,
            "regionalAirport":false,
            "onlineIndicator":false,
            "eticketableAirport":false,
            "location":{
                "aboveSeaLevel":-99999,
                "latitude":17.25,
                "latitudeRadius":-0.304,
                "longitude":145.3,
                "longitudeRadius":-2.5395,
                "latitudeDirection":"S",
                "longitudeDirection":"W"
            },
            "airportName":"Anaa",
            "city":{
                "cityCode":"AAA",
                "cityName":"Anaa",
                "timeZoneName":"Pacific/Tahiti"
            },
            "country":{
                "countryCode":"PF",
                "countryName":"French Polynesia"
            },
            "region":{
                "regionCode":"SP",
                "regionName":"South Pacific"
            }
        },
        {  
            "airportCode":"AAA",
            "internationalAirport":false,
            "domesticAirport":false,
            "regionalAirport":false,
            "onlineIndicator":false,
            "eticketableAirport":false,
            "location":{
                "aboveSeaLevel":-99999,
                "latitude":17.25,
                "latitudeRadius":-0.304,
                "longitude":145.3,
                "longitudeRadius":-2.5395,
                "latitudeDirection":"S",
                "longitudeDirection":"W"
            },
            "airportName":"Anaa",
            "city":{
                "cityCode":"AAA",
                "cityName":"Anaa",
                "timeZoneName":"Pacific/Tahiti"
            },
            "country":{
                "countryCode":"PF",
                "countryName":"French Polynesia"
            },
            "region":{
                "regionCode":"SP",
                "regionName":"South Pacific"
            }
        }


    ]

    beforeEach(() => {

        wrapper = shallow(
            <ListItem listdata={data}/>
        );
        jest.clearAllMocks();
    });


    test('it should render without error', () => {
        expect(wrapper.find('.list-item').exists()).toEqual(true);
    });
})