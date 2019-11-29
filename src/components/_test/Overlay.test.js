import React from 'react';
import { shallow } from 'enzyme';
import Overlay from '../Overlay';

describe('OverLayComponent', () => {

    let wrapper;

    beforeEach(() => {

        wrapper = shallow(
            <Overlay />
        );
        jest.clearAllMocks();
    });


    test('it should render without error', () => {
        expect(wrapper.find('.overlay').exists()).toEqual(true);
    });
})