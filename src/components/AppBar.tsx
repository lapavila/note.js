import React from "react";

interface Props {
  isLoading: boolean;
  isSaveError: boolean;
  saveRetry: any;
  onOpenMenu: any;
}

const AppBar: React.FC<Props> = props => {
  const { isLoading, isSaveError, saveRetry, onOpenMenu } = props;
  return (
    <div className="app-bar">
      <div className="app-bar__container">
        <button className="app-bar__action" onClick={onOpenMenu}>
          <i className="material-icons">menu</i>
        </button>
        <span className="app-bar__brand">Note.js</span>
        {isLoading && (
          <button className="app-bar__action app-bar__action--rotation">
            <i className="material-icons">refresh</i>
          </button>
        )}
        {isSaveError && (
          <button
            className="app-bar__action app-bar__action--danger"
            onClick={saveRetry}
          >
            <i className="material-icons">cloud_off</i>
          </button>
        )}
      </div>
    </div>
  );
};

export default AppBar;
