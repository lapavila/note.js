import React from 'react';
import classNames from 'classnames';

interface MenuItemProps {
  isActive: boolean;
  icon: string;
  label: string;
  onClick: any;
}

const MenuItem: React.FunctionComponent<MenuItemProps> = props => {
  const { isActive, icon, label, onClick } = props;
  return (
    <button
      className={classNames('navigation-drawer__menu__item', {
        'navigation-drawer__menu__item--active': isActive
      })}
      onClick={onClick}
    >
      <i className="material-icons">{icon}</i> {label}
    </button>
  );
};

export default MenuItem;
