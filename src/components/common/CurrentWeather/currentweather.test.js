import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import CurrentWeather from './view';

it('renders correctly', () => {
  const currentweather = shallow(<CurrentWeather/>);
  expect(toJson(currentweather)).toMatchSnapshot();
});