import React from 'react';
import styled from 'styled-components';
import { Button } from "./components/button";
import { TabBodyContainer } from "./components/tab-body-container";

const Label = styled.label`
  display: flex;
  color: #757575;
  font-size: 14px;
  font-weight: bold;
`
const Input = styled.input`
  border-radius: 3px;
  padding: 4px 8px;
  border: 1px solid black;
`
const ButtonContainer = styled.div`
  margin-top: 24px;
`
const FormButton = styled(Button)`
  width: 120px;
`

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' }
  }
  submitForm(e) {
    e.preventDefault();
    this.props.onAddLang(this.state.text);
  }

  render() {
    const { text } = this.state;
    return (
      <TabBodyContainer title="新しい言語の追加">
        <form onSubmit={(e) => this.submitForm(e)}>
          <div>
            <Label>言語</Label>
            <Input type="text" value={text} onChange={(e) => this.setState({ text: e.target.value })} autoFocus/>
          </div>
          <ButtonContainer>
            <FormButton>追加</FormButton>
          </ButtonContainer>
        </form>
      </TabBodyContainer>
    )
  }
}
