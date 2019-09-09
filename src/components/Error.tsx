import React from "react";

interface Props {
  onRetry: any;
}

interface State {}

class Error extends React.Component<Props, State> {
  render() {
    const { onRetry } = this.props;
    return (
      <div className="error">
        <h1>Ops</h1>
        <p>Deu Ruim</p>
        <button className="error__button" onClick={onRetry}>
          Tente Novamente
        </button>
      </div>
    );
  }
}

export default Error;
