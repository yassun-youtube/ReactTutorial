import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Modal } from "./components/modal";
import { Button } from "./components/button";
import { ThemeContext,THEMES } from "./contexts/ThemeContext";

const Container = styled.div`
  width: 240px;
  border-radius: 10px;
  padding: 24px 36px;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.backgroundColor};
  border: ${({ theme }) => theme === THEMES.dark ? '2px solid white' : 'none'};
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`

export class FormModal extends React.Component {
  render() {
    const { cancel, confirm } = this.props;
    return (
      <Modal>
        <ThemeContext.Consumer>
          {
            ([theme]) => (
              <Container theme={theme}>
                <div>本当に作成しますか？</div>
                <ButtonWrapper>
                  <Button onClick={cancel}>Cancel</Button>
                  <Button onClick={confirm}>OK</Button>
                </ButtonWrapper>
              </Container>
            )
          }
        </ThemeContext.Consumer>
      </Modal>
    )
  }
}
