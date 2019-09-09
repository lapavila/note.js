import React from "react";

import NewNote from "../components/NewNote";
import NoteList from "../components/NoteList";
import Error from "../components/Error";
import { NoteModel } from "../model/NoteModel";

interface Props {
  isReloaError: boolean;
  notes: NoteModel[];
  onRetry: any;
  onAddNote: any;
  onMove: any;
  onDelete: any;
  onEdit: any;
}
const Notes: React.FC<Props> = props => {
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

export default Notes;
