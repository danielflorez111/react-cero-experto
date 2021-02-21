import React from 'react';
import { shallow } from 'enzyme';

import CounterApp from '../CounterApp';

describe('<CounterApp />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    });

    test('should render <CounterApp />', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should render <CounterApp /> with default value 100', () => {
        const wrapper = shallow(<CounterApp value={100} />);
        const counterText = wrapper.find('h2').text();

        expect(counterText).toBe('100');
    });

    test('should increment counter value when clicking +1 button', () => {
        const addButton = wrapper.find('button').at(0);

        addButton.simulate('click');

        const counterText = wrapper.find('h2').text();

        expect(counterText).toBe('11');
    });

    test('should decrement counter value when clicking -1 button', () => {
        const subtractButton = wrapper.find('button').at(2);

        subtractButton.simulate('click');

        const counterText = wrapper.find('h2').text();

        expect(counterText).toBe('9');
    });

    test('should reset counter value when clicking reset button', () => {
        const wrapper = shallow(<CounterApp value={20} />);
        const subtractButton = wrapper.find('button').at(2);
        const resetButton = wrapper.find('button').at(1);

        subtractButton.simulate('click');
        subtractButton.simulate('click');
        resetButton.simulate('click');

        const counterText = wrapper.find('h2').text();
        expect(counterText).toBe('20');
    });
});
