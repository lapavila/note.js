import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NotesPage from './Notes/NotesPage';
import AboutPage from './About/AboutPage';
import SettingsPage from './Settings/SettingsPage';
import PageNotFound from './PageNotFound/PageNotFound';

import { NoteModel } from '../model/NoteModel';
import { MenuModel } from '../model/MenuModel';

export const menu: MenuModel[] = [
  { icon: 'note', label: 'Notas', path: '/' },
  { icon: 'settings', label: 'Configurações', path: '/settings' },
  { icon: 'info', label: 'Sobre', path: '/about' }
];

interface Props {}

const Routes: React.FC<Props> = () => (
  <Switch>
    <Route path="/" exact component={NotesPage} />
    <Route path="/settings" component={SettingsPage} />
    <Route path="/about" component={AboutPage} />
    <Route component={PageNotFound} />
  </Switch>
);

export default Routes;
