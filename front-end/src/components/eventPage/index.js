import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { fetchEventData, selectEvent } from '../../features/events/eventSlice';
import Layout from '../ui/layout';

const StyledHeading = styled.div`
  font-size: 26px;
  padding: 30px;
`;

const StyledText = styled.p`
  padding-bottom: 20px;
`;

const StyledEventLabel = styled.div`
  display: flex;
  border-bottom: 1px solid #fff;
  padding: 5px 0;
`;

const StyledEventItem = styled.div`
  width: 50%;
`;

function EventPage() {
  const event = useSelector(selectEvent);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchEventData(id))
  }, [])

  return (
    <Layout>
      {event.title ? (
        <>
          <StyledHeading>{event.title}</StyledHeading>
          <StyledEventLabel>
            <StyledText>{event.description}</StyledText>
          </StyledEventLabel>
          <StyledEventLabel>
            <StyledEventItem><strong>Date:</strong> {event.date.slice(0, 10)}</StyledEventItem>
            <StyledEventItem><strong>Time:</strong> {event.date.slice(11,16)}</StyledEventItem>
          </StyledEventLabel>
          <StyledEventLabel>
            <StyledEventItem><strong>Category:</strong> {event.category}</StyledEventItem>
            <StyledEventItem><strong>Location:</strong> {event.address}</StyledEventItem>
          </StyledEventLabel>
          <StyledEventLabel>
            <StyledEventItem><strong>Type:</strong> {event.isVirtual ? 'Virtual' : 'In Person'}</StyledEventItem>
          </StyledEventLabel>
        </>
      ) : 'Loading ....'}
    </Layout>
  )
}

export default EventPage;