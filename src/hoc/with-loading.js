import styled from "styled-components";
import { useState, useEffect } from 'react';

const LoadDiv = styled.div`
  padding: 36px;
`

export const withLoading = (WrappedComponent, fetchData) => {
  return () => {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch();
    }, [])

    const fetch = async () => {
      const data = await fetchData();
      setData(data);
    }

    const Loading = (
      <LoadDiv>ロード中...</LoadDiv>
    )

    return data ? <WrappedComponent data={data} /> : Loading;
  }
}
