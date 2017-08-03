import React from 'react';
import SideBar from '../redux/containers/SideBarContainer';
import Weather from '../redux/containers/WeatherContainer';
import DefaultPageLayout from './layouts/DefaultPageLayout';

export const App = () => (
  <DefaultPageLayout>
    <SideBar />
    <Weather />
  </DefaultPageLayout>
);

export default App;
