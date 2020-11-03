import React from 'react';
import styled from 'styled-components';
import { ThemeContext } from "../contexts/ThemeContext";

const LoadDiv = styled.div`
  height: 100%;
  padding: 36px;
  color: ${({ theme }) => theme.color};
  background: ${({ theme }) => theme.backgroundColor };
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

      return (
        <ThemeContext.Consumer>
          {
            ([theme]) => data ? <WrappedComponent data={data} /> : <LoadDiv theme={theme}>ロード中...</LoadDiv>
          }

        </ThemeContext.Consumer>
      )
    }
  }
  return HOC;
}
