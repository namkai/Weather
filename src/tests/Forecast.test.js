import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import Forecast from '../components/Forecast';

it('renders correctly', () => {
	const forecast = shallow(
		<Forecast />
	);
	expect(toJson(forecast)).toMatchSnapshot();
});