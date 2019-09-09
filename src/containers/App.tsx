import React from "react";
import { v1 as uuid } from "uuid";
import { BrowserRouter, Route } from "react-router-dom";

import { NoteModel } from "../model/NoteModel";
import { NoteService } from "../services/NoteService";

import AppBar from "../components/AppBar";
import NavigationDrawer from "../components/NavigationDrawer";
import About from "./About";
import Notes from "./Notes";

interface State {
  notes: NoteModel[];
  isMenuOpen: boolean;
  isLoading: boolean;
  isReloadError: boolean;
  isSaveError: boolean;
}

class App extends React.Component<any, State> {
  state: State = {
    notes: [],
    isMenuOpen: false,
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
      if (direction === "up") {
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

  handleOpenMenu = () => {
    this.setState({ isMenuOpen: true });
  };
  handleCloseMenu = () => {
    this.setState({ isMenuOpen: false });
  };

  render() {
    const {
      notes,
      isLoading,
      isReloadError,
      isSaveError,
      isMenuOpen
    } = this.state;
    return (
      <BrowserRouter>
        <div>
          <AppBar
            isLoading={isLoading}
            isSaveError={isSaveError}
            saveRetry={() => {
              this.handleSave(notes);
            }}
            onOpenMenu={this.handleOpenMenu}
          />
          <div className="container">
            <React.Fragment>
              <Route
                path="/"
                exact
                render={() => (
                  <Notes
                    notes={notes}
                    isReloaError={isReloadError}
                    onRetry={this.handleReload}
                    onAddNote={this.handleAddNote}
                    onMove={this.handleMove}
                    onDelete={this.handleDelete}
                    onEdit={this.handleEdit}
                  />
                )}
              />
              <Route path="/about" component={About} />
            </React.Fragment>
          </div>
          <NavigationDrawer
            isOpen={isMenuOpen}
            onCloseMenu={this.handleCloseMenu}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
