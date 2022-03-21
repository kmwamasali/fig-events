import styled from 'styled-components';
import Navbar from '../navbar';

const Wrapper = styled.div`
  background: #eee;
  padding: 0 15%;
  height: 95vh;
`;

function Layout(props) {
  return (
    <>
      <Navbar />
      <Wrapper>
        {props.children}
      </Wrapper>
    </>
  )
}

export default Layout;