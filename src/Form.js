import React from 'react';
import styled from 'styled-components';
import { Button } from "./components/button";
import { TabBodyContainer } from "./components/tab-body-container";
import { FormModal } from "./FormModal";

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
    this.state = { text: '', showModal: false }
  }
  submitForm(e) {
    e.preventDefault();
    this.setState({ showModal: true });
  }

  render() {
    const { text, showModal } = this.state;
    const { onAddLang } = this.props;
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
        {
          showModal &&
            <FormModal
              confirm={() => onAddLang(text)}
              cancel={() => this.setState({ showModal: false })}
            />
        }
      </TabBodyContainer>
    )
  }
}
