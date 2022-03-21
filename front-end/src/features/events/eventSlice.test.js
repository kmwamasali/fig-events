import eventReducer, { sortEvents } from "./eventSlice";
import events from '../../utils/mockData';

const initialState = {
  events: [],
  event: {}
};

test('Should return empty inital state', () => {
  expect(eventReducer(undefined, {})).toEqual(initialState)
});

test('Should handle sorted events in the list', () => {
  const previousState = {
    ...initialState,
    events
  }

  const sortedEvents = events.sort((a, b) => {
    if (a['title'] < b['title']) {
      return -1;
    }
    if (b['title'] > a['title']) {
      return 1;
    }
    return 0;
  });

  expect(eventReducer(previousState, sortEvents('title'))).toEqual({
    ...previousState,
    events: sortedEvents
  })
});
