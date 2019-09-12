import React from 'react';

import { v1 as uuid } from 'uuid';

import NotesContext from './NotesContext';

import { NoteModel } from '../../model/NoteModel';
import { NoteService } from '../../services/NoteService';

export interface Props {}
export interface State {
  notes: NoteModel[];
  isLoading: boolean;
  isReloadError: boolean;
  isSaveError: boolean;
}

export default class NotesProvider extends React.Component<Props, State> {
  state: State = {
    notes: [],
    isLoading: false,
    isReloadError: false,
    isSaveError: false
  };

  componentDidMount() {
    this.handleReload();
  }

  componentDidCatch() {
    this.setState({ isReloadError: true });
  }

  handleAddNote = (text: string) => {
    this.setState(prevState => {
      const notes = prevState.notes.concat({ id: uuid(), text });
      this.handleSave(notes);
      return { notes };
    });
  };

  handleMove = (direction: string, index: number) => {
    this.setState(prevState => {
      const newNotes = prevState.notes.slice();
      const removedNote = newNotes.splice(index, 1)[0];
      if (direction === 'up') {
        newNotes.splice(index - 1, 0, removedNote);
      } else {
        newNotes.splice(index + 1, 0, removedNote);
      }
      this.handleSave(newNotes);
      return { notes: newNotes };
    });
  };

  handleDelete = (id: string) => {
    this.setState(prevState => {
      const newNotes = prevState.notes.slice();
      const index = newNotes.findIndex(note => note.id === id);
      newNotes.splice(index, 1);
      this.handleSave(newNotes);
      return { notes: newNotes };
    });
  };

  handleEdit = (id: string, text: string) => {
    this.setState(prevState => {
      const newNotes = prevState.notes.slice();
      const index = newNotes.findIndex(note => note.id === id);
      newNotes[index].text = text;
      this.handleSave(newNotes);
      return { notes: newNotes };
    });
  };

  handleReload = () => {
    this.setState({ isLoading: true, isReloadError: false });
    NoteService.load()
      .then(notes => {
        this.setState({ notes, isLoading: false });
      })
      .catch(() => {
        this.setState({ isLoading: false, isReloadError: true });
      });
  };

  handleSave = (notes: NoteModel[]) => {
    this.setState({ isLoading: true, isSaveError: false });
    NoteService.save(notes)
      .then(() => {
        this.setState({ isLoading: false });
      })
      .catch(() => {
        this.setState({ isLoading: false, isSaveError: true });
      });
  };

  public render() {
    return (
      <NotesContext.Provider
        value={{
          ...this.state,
          onSaveRetry: () => {
            this.handleSave(this.state.notes);
          },
          onRetry: this.handleReload,
          onAddNote: this.handleAddNote,
          onMove: this.handleMove,
          onDelete: this.handleDelete,
          onEdit: this.handleEdit
        }}
      >
        {this.props.children}
      </NotesContext.Provider>
    );
  }
}
