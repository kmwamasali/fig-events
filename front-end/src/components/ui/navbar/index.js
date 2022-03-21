import styled from 'styled-components';

const Nav = styled.div`
  background: #fff;
  padding: 10px 25px;
  display: flex;
`;

const StyledTitle = styled.div`
  flex-grow: 2;
  justify-content: flex-start;
`;

const StyledMenu = styled.div`
  flex-grow: 1;
  justify-content: flex-end;
`;

const StyledList = styled.ul`
  font-size: 16px;
  margin-left: 0;
  display: flex;
  padding: 10px 0;
  list-style: none;
`;

const StyledListItem = styled.li`
  padding: 0 10px;
`;

function Navbar() {
  return (
    <Nav>
      <StyledTitle><h1><a href="/">FigEvents</a></h1></StyledTitle>
      <StyledMenu>
        <StyledList>
          <StyledListItem>About</StyledListItem>
          <StyledListItem>Events</StyledListItem>
          <StyledListItem>Contact</StyledListItem>
        </StyledList>
      </StyledMenu>
    </Nav>
  )
}

export default Navbar;