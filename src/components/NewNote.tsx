import React from "react";

interface Props {
  onAddNote: any;
}

interface State {
  text: string;
}

class NewNote extends React.Component<Props, State> {
  state: State = {
    text: ""
  };
  render() {
    const { onAddNote } = this.props;
    const { text } = this.state;
    return (
      <div className="new-note">
        <input
          type="text"
          className="new-note__input"
          placeholder="digita sua nota..."
          value={text}
          onChange={event => {
            this.setState({
              text: event.target.value
            });
          }}
          onKeyPress={event => {
            if (event.key === "Enter") {
              onAddNote(this.state.text);
              this.setState({
                text: ""
              });
            }
          }}
        />
      </div>
    );
  }
}

export default NewNote;
