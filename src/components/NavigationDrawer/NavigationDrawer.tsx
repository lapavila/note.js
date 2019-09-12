import React from 'react';
import classNames from 'classnames';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import './navigation-drawer.scss';
import MenuItem from './MenuItem';
import { MenuModel } from '../../model/MenuModel';

interface Props extends RouteComponentProps<any> {
  onCloseMenu: any;
  isOpen: boolean;
  history: any;
  location: any;
  menu: MenuModel[];
}

const NavigationDrawer: React.FC<Props> = props => {
  const { onCloseMenu, isOpen, history, location, menu } = props;
  return (
    <div
      className={classNames('navigation-drawer', {
        'navigation-drawer--open': isOpen
      })}
    >
      <div className="navigation-drawer__head">
        <button
          className="navigation-drawer__head__button"
          onClick={onCloseMenu}
        >
          <div className="material-icons">close</div>
        </button>
      </div>
      <div className="navigation-drawer__menu">
        {menu.map(item => (
          <MenuItem
            key={item.icon}
            isActive={location.pathname === item.path}
            onClick={() => {
              onCloseMenu();
              history.push(item.path);
            }}
            icon={item.icon}
            label={item.label}
          />
        ))}
      </div>
    </div>
  );
};

export default withRouter(NavigationDrawer);
