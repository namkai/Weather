import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { SideBar } from '../containers/SideBar';

it('renders correctly', () => {
	const sidebar = shallow(<SideBar />);
	expect(toJson(sidebar)).toMatchSnapshot();
});
