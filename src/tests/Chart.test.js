import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import Chart from '../components/common/Chart';

it('renders correctly', () => {
	const chart = shallow(
		<Chart />
	);
	expect(toJson(chart)).toMatchSnapshot();
});
