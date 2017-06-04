import { createSelector } from 'reselect';

// grabs the currently stored cities
const storedCities = state => state.storedCities;

// Filters the stored based on selectedTab as well as the current query
const getCities = stored => [...new Set(stored.map(a => a))].reverse();

export default createSelector(
	storedCities,
	getCities,
);
