import React from 'react';

import { Error, NoteList, NewNote } from '../../components';
import withNotes from './withNotes';

import { NoteModel } from '../../model/NoteModel';

interface Props {
  isReloaError: boolean;
  notes: NoteModel[];
  onRetry: any;
  onAddNote: any;
  onMove: any;
  onDelete: any;
  onEdit: any;
}

const NotesPage: React.FC<Props> = props => {
  if (props.isReloaError) {
    return <Error onRetry={props.onRetry} />;
  }

  return (
    <React.Fragment>
      <NewNote onAddNote={props.onAddNote} />
      <NoteList
        notes={props.notes}
        onMove={props.onMove}
        onDelete={props.onDelete}
        onEdit={props.onEdit}
      />
    </React.Fragment>
  );
};

export default withNotes(NotesPage);
