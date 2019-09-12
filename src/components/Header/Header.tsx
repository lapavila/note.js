import React from 'react';
import classNames from 'classnames';

import './header.scss';

interface Props {
  children: any;
  centered?: boolean;
}

const Header: React.FC<Props> = props => {
  const { children, centered } = props;
  return (
    <h1 className={classNames('header', { 'header--centered': centered })}>
      {children}
    </h1>
  );
};

export default Header;
