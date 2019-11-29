import {getCurrencyAbbreviation} from 'country-currency-map';

export function reformatAirportList(detailList){
    const newList = detailList
        .map(x => {
            const currencyValue = getCurrencyAbbreviation(x.country.countryName);
            
            return {CurrencyTitle: 'Currency', cvalue:currencyValue, TimezoneTitle: 'Timezone', timeZonevalue: x.city.timeZoneName, LoctionTitle: 'Location', locationValue: x.location};
        });
        

    return newList
}
