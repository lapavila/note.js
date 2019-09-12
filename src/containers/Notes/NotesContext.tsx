import React from 'react';

type ContextProps = {};

const NotesContext = React.createContext<Partial<ContextProps>>({});

export default NotesContext;
