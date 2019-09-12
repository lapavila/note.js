import * as React from 'react';

import './button.scss';

interface Props {
  children: React.ReactNode;
  onClick?: any;
}

const Button: React.FC<Props> = props => {
  const { children, onClick } = props;
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
