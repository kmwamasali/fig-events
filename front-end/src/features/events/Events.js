import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchEventsData, sortEvents ,selectEvents } from './eventSlice';

const StyledEvent = styled.div`
  display: flex;
  border-bottom: 1px solid #fff;
  padding: 5px 0;

  &.header {
    font-weight: bold;
    padding-top: 30px;
    margin-bottom: 10px;
  }
`;

const StyledEventItem = styled.div`
  width: 20%;
`;

function Events() {
  const events = useSelector(selectEvents)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEventsData())
  }, [])

  const eventsList = events.map(event => {
      const url = `/event/${event._id}`;
      return (
        <StyledEvent key={event._id}>
          <StyledEventItem><a href={url}>{event.title}</a></StyledEventItem>
          <StyledEventItem>{event.category}</StyledEventItem>
          <StyledEventItem>{event.date.slice(0,10)}</StyledEventItem>
          <StyledEventItem>{event.isVirtual ? 'Online' : 'In-person'}</StyledEventItem>
          <StyledEventItem>{event.address}</StyledEventItem>
        </StyledEvent>
      )
    }
  );

  return (
    <>
      <StyledEvent className='header'>
        <StyledEventItem onClick={() => dispatch(sortEvents('title'))}>Name</StyledEventItem>
        <StyledEventItem onClick={() => dispatch(sortEvents('category'))}>Category</StyledEventItem>
        <StyledEventItem>Date</StyledEventItem>
        <StyledEventItem onClick={() => dispatch(sortEvents('isVirtual'))}>Is Virtual</StyledEventItem>
        <StyledEventItem>Location</StyledEventItem>
      </StyledEvent>
      {(events.length > 0) ? eventsList : 'Loading ...'}
    </>
  )
}

export default Events;