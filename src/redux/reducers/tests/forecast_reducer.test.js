import expect from 'expect';
import * as types from '../../constants/actionTypes';
import { forecast as reducer } from '../../roots/rootReducer';

describe('weather reducer', () => {
  it('should return the initial state', () => {
    expect(reducer([], {})).toEqual([]);
  });
  
  it('should handle FETCH_WEATHER', () => {
    expect(
      reducer([], {
        type: types.FETCH_CURRENT_WEATHER_SUCCESS,
        payload: [
          {
            date: '2017-08-03 21:00:00',
            temp: 79.41199999999998,
          },
        ],
      }),
    ).toEqual([{
      date: '2017-08-03 21:00:00',
      temp: 79.41199999999998,
    }]);
    expect(
      reducer(
        [
          {
            date: '2017-08-03 21:00:00',
            temp: 79.41199999999998,
          },
        ],
        {
          type: types.FETCH_CURRENT_WEATHER_SUCCESS,
          payload: [
            {
              date: '2017-08-03 24:00:00',
              temp: 90.0000,
            },
          ],
        },
      ),
    ).toEqual([
      {
        date: '2017-08-03 24:00:00',
        temp: 90.0000,
      },
    ]);
  });
});
