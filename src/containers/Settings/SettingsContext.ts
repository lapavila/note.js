import React from 'react';
type ContextProps = {
  theme: any;
  toggleTheme?: any;
};

const SettingsContext = React.createContext<Partial<ContextProps>>({});

export default SettingsContext;
