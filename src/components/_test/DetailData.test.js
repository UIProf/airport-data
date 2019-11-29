import React from 'react';
import DetailData from '../DetailData';

describe('DetailDataComponent', () => {

    let wrapper;

    const detaildata = {CurrencyTitle: "Currency", cvalue: "AUD", TimezoneTitle: "Timezone", timeZonevalue: "Australia/Brisbane", LoctionTitle: "Location"}

    beforeEach(() => {

        wrapper = shallow(
            <DetailData 
            detailList= {detaildata}
            />
        );
        jest.clearAllMocks();
    });


    test('it should render without error', () => {
        expect(wrapper.find('.details').exists()).toEqual(true);
    });
})