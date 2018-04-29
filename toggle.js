import React from 'react';
import './toggle.css';

class Toggle extends React.Component {
  state = {
    toggledOn: !!this.props.toggledOn
  };
  manageClick(evt) {
    const newState = !this.state.toggledOn;
    this.setState({ toggledOn: newState });
    if (this.props.onToggle) {
      this.props.onToggle(newState);
    }
  }

  render() {
    return (
      <div
        style={{
          display: 'inline-block'
        }}
      >
        <label className="switch">
          <input
            type="checkbox"
            className="input-none"
            checked={this.state.toggledOn}
            onChange={this.manageClick.bind(this)}
          />
          <span className="slider round" />
        </label>
      </div>
    );
  }
}

export default Toggle;
