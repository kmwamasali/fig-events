import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchEvents from './eventApi';

const initialState = {
  events: [],
  event: {}
}

export const fetchEventsData = createAsyncThunk(
  'events/fetchEventsData',
  async () => {
    const response = await fetchEvents();
    return response.data;
  }
)

export const fetchEventData = createAsyncThunk(
  'events/fetchEventData',
  async (name) => {
    const response = await fetchEvents(name);
    return response.data;
  }
)

const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    sortEvents: (state, action) => {
      state.events.sort((a, b) => {
        if (a[action.payload] < b[action.payload]) {
          return -1;
        }
        if (b[action.payload] > a[action.payload]) {
          return 1;
        }
        return 0;
      });
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEventsData.fulfilled, (state, action) => {
        state.events = action.payload
      })
      .addCase(fetchEventData.fulfilled, (state, action) => {
        state.event = action.payload
      })
  }
});

export const { getEvent, sortEvents } = eventSlice.actions;

export const selectEvents = (state) => state.events.events;
export const selectEvent = (state) => state.events.event;

export default eventSlice.reducer;