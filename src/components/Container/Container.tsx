import React from 'react';

import './container.scss';

interface Props {
  children: any;
}

const Container: React.FC<Props> = (props: Props) => {
  return <div className="container">{props.children}</div>;
};

export default Container;
