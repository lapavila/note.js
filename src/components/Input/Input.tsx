import React, { Component } from 'react';

interface Props {
  id: number;
  nome: string;
}
interface State {
  value: string;
}

class Input extends Component<Props, State> {
  state = {
    value: 'teste'
  };

  render() {
    const { nome } = this.props;
    return <div></div>;
  }
}

export default Input;
