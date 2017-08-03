import { compose, pure, withHandlers, withState } from 'recompose';
import SearchBar from './view';

const addQueryState = withState('query', 'setQuery', '');

const addStateHandlers = withHandlers({
  updateQuery: ({ setQuery }) => ({ target: { value } }) => setQuery(() => value),
  onSearchForWeather: ({ query, setQuery, fetchWeather }) => (event) => {
    event.preventDefault();
    fetchWeather(query);
    setQuery(() => '');
  },
});

const PureSearchBar = pure(SearchBar);

export default compose(addQueryState, addStateHandlers)(PureSearchBar);
