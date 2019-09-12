import React from 'react';
import { Header, ButtonLink, Center } from '../../components';

interface Props {}

const PageNotFound: React.FunctionComponent<Props> = props => {
  return (
    <Center>
      <Header>Ops!</Header>
      <ButtonLink to="/">Voltar</ButtonLink>
    </Center>
  );
};

export default PageNotFound;
