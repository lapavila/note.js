import React from 'react';

import './error.scss';
import Button from '../Button/Button';
import Header from '../Header/Header';
import Center from '../Center/Center';

interface Props {
  onRetry: any;
}

interface State {}

class Error extends React.Component<Props, State> {
  render() {
    const { onRetry } = this.props;
    return (
      <Center>
        <Header centered>Ops</Header>
        <p>Deu Ruim</p>
        <Button onClick={onRetry}>Tente Novamente</Button>
      </Center>
    );
  }
}

export default Error;
