import React from 'react';

import SettingsContext from './SettingsContext';

interface Props {}

const withSettings = <P extends object>(Component: React.ComponentType<P>) =>
  class WithSettings extends React.Component<P & Props> {
    render() {
      const { ...props } = this.props;
      return (
        <SettingsContext.Consumer>
          {context => <Component {...(props as P)} {...context} />}
        </SettingsContext.Consumer>
      );
    }
  };

export default withSettings;
