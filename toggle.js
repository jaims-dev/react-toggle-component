import React from 'react';
import './toggle.css';

class Toggle extends React.Component {
  state = {
    toggledOn: !!this.props.toggledOn
  };
  manageClick(evt) {
    // console.log('here', evt.target.value); //returns on/off
    const newState = !this.state.toggledOn;
    this.setState({ toggledOn: newState });
    if (this.props.onToggle) {
      this.props.onToggle(newState);
    }
  }

  render() {
    const checked = this.state.toggledOn ? 'checked' : '';
    return (
      <div
        style={{
          //   position: 'relative',
          //   width: '60px',
          //   height: '34px',
          //   marginTop: 'auto',
          //   marginBottom: 'auto',
          display: 'inline-block'
        }}
      >
        <label className="switch">
          <input
            type="checkbox"
            className="input-none"
            checked={checked}
            onChange={this.manageClick.bind(this)}
          />
          <span className="slider round" />
        </label>
      </div>
    );
  }
}

export default Toggle;
