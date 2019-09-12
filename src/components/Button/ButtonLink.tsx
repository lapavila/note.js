import * as React from 'react';
import { Link } from 'react-router-dom';

import './button.scss';

interface Props {
  children: React.ReactNode;
  to: any;
}

const Button: React.FC<Props> = props => {
  const { children, to } = props;
  return (
    <Link className="button" to={to}>
      {children}
    </Link>
  );
};

export default Button;
