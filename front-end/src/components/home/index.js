import styled from "styled-components";
import Events from "../../features/events/Events";
import Layout from "../ui/layout";

const StyledHeading = styled.h2`
  padding-top: 30px;
`

function Home() {
  return (
    <Layout>
      <StyledHeading>Browse our latest events</StyledHeading>
      <Events />
    </Layout>
  )
}

export default Home;