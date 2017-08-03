import selectedForecast from './selected_forecast';

const getWeatherState = state => ({
  weather: state.weather,
  forecast: selectedForecast(state),
});

export default getWeatherState;
