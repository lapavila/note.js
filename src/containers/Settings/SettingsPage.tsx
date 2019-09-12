import React from 'react';

import { Header } from '../../components';
import withSettings from './withSettings';

import './settings.scss';

const themes = [
  { key: 'defalt', label: 'Padrão' },
  {
    key: 'classic',
    label: 'Clássico',
    navBar: { backgroundColor: '#795548', color: '#fff' }
  },
  {
    key: 'red',
    label: 'Danger',
    navBar: { backgroundColor: '#fe4400', color: '#fff' }
  },
  {
    key: 'light',
    label: 'Light',
    navBar: { backgroundColor: '#fff', color: '#000' }
  }
];

interface Props {
  theme: any;
  toggleTheme: any;
}

const SettingsPage: React.FC<Props> = props => {
  const { theme: selectedTheme, toggleTheme } = props;
  return (
    <div>
      <Header>Temas</Header>
      <div className="themes">
        {themes.map((theme: any) => (
          <button
            key={theme.key}
            className="themes__item"
            style={theme.navBar}
            onClick={() => {
              toggleTheme(theme);
            }}
          >
            <p>
              {theme.label}
              {theme.key === selectedTheme.key && (
                <i className="material-icons">check</i>
              )}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default withSettings(SettingsPage);
