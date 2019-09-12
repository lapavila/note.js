import React from 'react';

import NotesContext from './NotesContext';

interface Props {}

const withNotes = <P extends object>(Component: React.ComponentType<P>) =>
  class WithNotes extends React.Component<P & Props> {
    render() {
      const { ...props } = this.props;
      return (
        <NotesContext.Consumer>
          {context => <Component {...(props as P)} {...context} />}
        </NotesContext.Consumer>
      );
    }
  };

export default withNotes;
