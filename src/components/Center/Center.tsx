import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Center: React.FC<Props> = props => {
  const { children } = props;
  return <div className="center">{children}</div>;
};

export default Center;
