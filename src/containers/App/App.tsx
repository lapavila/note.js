import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import PageLayout from '../PageLayout/PageLayout';

import Routes, { menu } from '../Routes';
import SettingsProvider from '../Settings/SettingsProvider';
import NotesProvider from '../Notes/NotesProvider';

interface State {
  isMenuOpen: boolean;
}

class App extends React.Component<any, State> {
  state: State = {
    isMenuOpen: false
  };

  handleOpenMenu = () => {
    this.setState({ isMenuOpen: true });
  };
  handleCloseMenu = () => {
    this.setState({ isMenuOpen: false });
  };

  render() {
    const { isMenuOpen } = this.state;
    return (
      <BrowserRouter>
        <SettingsProvider>
          <NotesProvider>
            <PageLayout
              isMenuOpen={isMenuOpen}
              menu={menu}
              onOpenMenu={this.handleOpenMenu}
              onCloseMenu={this.handleCloseMenu}
            >
              <Routes />
            </PageLayout>
          </NotesProvider>
        </SettingsProvider>
      </BrowserRouter>
    );
  }
}

export default App;
