import React, { Component } from 'react';

import SettingsContext from './SettingsContext';

interface Props {}
interface State {
  theme: any;
}

export default class SettingsProvider extends Component<Props, State> {
  state = { theme: {} };

  handleToggleTheme = (theme: any) => {
    this.setState({ theme });
  };

  render() {
    const { theme } = this.state;
    return (
      <div>
        <SettingsContext.Provider
          value={{ theme, toggleTheme: this.handleToggleTheme }}
        >
          {this.props.children}
        </SettingsContext.Provider>
      </div>
    );
  }
}
