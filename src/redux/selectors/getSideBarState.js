import citySelector from './selected_stored_cities';

const getSideBarState = state => ({ storedCities: citySelector(state) });

export default getSideBarState;
