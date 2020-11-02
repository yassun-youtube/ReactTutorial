import styled from "styled-components";

const Container = styled.div`
  padding: 12px 64px;
`

export const TabBodyContainer = ({ children, title }) => {
  return (
    <Container>
      <h4>{ title }</h4>
      { children }
    </Container>
  )
}
