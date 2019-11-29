import React from 'react';
import { shallow } from 'enzyme';
import Loader from '../Loader';

describe('LoaderComponent', () => {

    let wrapper;

    beforeEach(() => {

        wrapper = shallow(
            <Loader />
        );
        jest.clearAllMocks();
    });


    test('it should render without error', () => {
        expect(wrapper.find('.loader').exists()).toEqual(true);
    });
})