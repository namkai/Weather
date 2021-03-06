import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { App } from '../components/App';

it('renders correctly', () => {
	const app = shallow(<App />);
	expect(toJson(app)).toMatchSnapshot();
});

