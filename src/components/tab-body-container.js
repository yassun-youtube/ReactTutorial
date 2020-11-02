import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 12px 64px;
`
export class TabBodyContainer extends React.Component {
  render() {
    const { children, title } = this.props;
    return (
      <Container>
        <h4>{ title }</h4>
        { children }
      </Container>
    )
  }
}
