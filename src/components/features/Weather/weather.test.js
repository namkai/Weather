import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { Weather } from './index';

it('renders correctly', () => {
	const weather = shallow(<Weather />);
	expect(toJson(weather)).toMatchSnapshot();
});
