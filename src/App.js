import React from 'react';
import { List } from "./List";
import { Form } from "./Form";
import styled from 'styled-components';
import { ThemeContext } from "./contexts/ThemeContext";
import { Header } from "./Header";

const Container = styled.div`
  height: 100%;
  color: ${({ theme }) => theme.color};
  background: ${({ theme }) => theme.backgroundColor };
`

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 'list',
      langs: props.data,
    };
  }
  addLang(lang) {
    this.setState({
      langs: [...this.state.langs, lang],
      tab: 'list',
    });
  }
  render() {
    const { tab, langs } = this.state;
    return (
      <ThemeContext.Consumer>
        {
          ([theme]) => (
            <Container theme={theme}>
              <Header tab={tab} changeTab={(tab) => this.setState({ tab })} />
              {
                tab === 'list' ? <List langs={ langs } /> : <Form onAddLang={ (lang) => this.addLang(lang) }/>
              }
            </Container>
          )
        }
      </ThemeContext.Consumer>
    )
  }
}
