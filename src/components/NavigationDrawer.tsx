import React from "react";
import classNames from "classnames";
import { RouteComponentProps, withRouter } from "react-router-dom";

interface Props extends RouteComponentProps<any> {
  onCloseMenu: any;
  isOpen: boolean;
  history: any;
}

const NavigationDrawer: React.FC<Props> = props => {
  const { onCloseMenu, isOpen, history } = props;
  return (
    <div
      className={classNames("navigation-drawer", {
        "navigation-drawer--open": isOpen
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
        <button
          className="navigation-drawer__menu__item"
          onClick={() => {
            onCloseMenu();
            history.push("/");
          }}
        >
          <i className="material-icons">note</i> Notas
        </button>
        <button
          className="navigation-drawer__menu__item"
          onClick={() => {
            onCloseMenu();
            history.push("/about");
          }}
        >
          <i className="material-icons">info</i> Sobre
        </button>
      </div>
    </div>
  );
};

export default withRouter(NavigationDrawer);
