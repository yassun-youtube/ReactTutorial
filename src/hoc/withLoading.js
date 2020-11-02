import React from 'react';
import styled from 'styled-components';

const LoadDiv = styled.div`
  padding: 36px;
`

export const withLoading = (WrappedComponent, fetchData) => {
  class HOC extends React.Component {
    constructor(props) {
      super(props);
      this.state = { data: null }
    }
    componentDidMount() {
      this.fetch();
    }
    async fetch() {
      const data = await fetchData();
      this.setState({ data });
    }
    render() {
      const { data } = this.state;

      const Loading = (
        <LoadDiv>ロード中...</LoadDiv>
      )

      return data ? <WrappedComponent data={data} /> : Loading;
    }
  }
  return HOC;
}
