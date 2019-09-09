import React from "react";

import Note from "./Note";
import { NoteModel } from "../model/NoteModel";

interface Props {
  notes: NoteModel[];
  onMove: any;
  onDelete: any;
  onEdit: any;
}

const NoteList: React.FC<Props> = props => {
  const { notes, onMove, onDelete, onEdit } = props;
  return (
    <div className="note-list">
      {notes.map((note: any, index: number) => (
        <Note
          key={note.id}
          note={note}
          index={index}
          total={notes.length}
          onMove={onMove}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default NoteList;
