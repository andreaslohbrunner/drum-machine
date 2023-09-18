//import { useEffect } from 'react';
import React, { Component } from 'react';
import { soundBank } from './components/sound-bank';
//import Options from "./components/options";
import DrumPad from './components/drum-pad';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      power: true,
      currentPad: soundBank,
      display: 'Heater Kit',
      sliderVal: 0.3
    };
    this.powerControl = this.powerControl.bind(this);
    this.updateDisplayName = this.updateDisplayName.bind(this);
    this.clearDisplay = this.clearDisplay.bind(this);
    this.adjustVolume = this.adjustVolume.bind(this);
  }

  powerControl() {
    let name = 'Power on';
    if (this.state.power) name = 'Power off';
    this.setState({
      power: !this.state.power,
      display: name
    })
    setTimeout(() => this.clearDisplay(), 1000);
  }

  updateDisplayName(name) {
    this.setState({
      display: name
    })
  }

  clearDisplay() {
    this.setState({
      display: ' '
    })
  }

  adjustVolume(e) {
    if(this.state.power) {
      this.setState({
        sliderVal: e.target.value,
        display: 'Volume ' + Math.round(e.target.value * 100)
      })
      setTimeout(() => this.clearDisplay(), 1000);
    }
  }

  render() {
    const pads = this.state.currentPad.map((pad, i, PadBankArr) => {
      return (
        <DrumPad 
          drumPadPower={this.state.power}
          drumPadId={PadBankArr[i].id}
          drumPadUrl={PadBankArr[i].url}
          drumPadText={PadBankArr[i].keyName}
          drumPadKeyCode={PadBankArr[i].keyCode}
          updateDisplay={this.updateDisplayName}
          key={'Pad-' + i}
        />
      );
    })
    const clips = [].slice.call(document.getElementsByClassName('clip'));
    clips.forEach(sound => {
      sound.volume = this.state.sliderVal;
    })
    const switchPower = this.state.power
      ? {
        justifyContent: 'flex-end'
        }
      : {
        justifyContent: 'flex-start'
        };
    return (
      <div className="App">
        <div id="drum-machine">
          <div id="keyboard">
            {pads}
          </div>
          <div id="logo">
            <p>FCC </p>
            <i className='fa-brands fa-free-code-camp' />
          </div>
          <div id="options">
            <div id="switch">
                <div id="switch-name">Power</div>
                <div id="switch-box" style={switchPower}>
                    <div id="switch-button" onClick={this.powerControl}></div>
                </div>
            </div>
            <div id="display">{this.state.display}</div>
            <div id="volume">
              <input
                max='1'
                min='0'
                onChange={this.adjustVolume}
                step='0.01'
                type='range'
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default App;