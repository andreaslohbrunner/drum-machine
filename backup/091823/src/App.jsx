//import { useEffect } from 'react';
import React, { Component } from 'react';
import { soundBank } from './components/sound-bank';
//import DrumPad from "./components/drum-pad";
import Options from "./components/options";

class App extends Component {
  state = { 
    currentPad: soundBank
  }

  playAudio = (keyName) => {
    let audio = document.getElementById(keyName);
    audio.play();
  }

  render() {
    const pads = this.state.currentPad.map(pad => {
      return <div className="drum-pad" id={pad.id} onClick={() => this.playAudio(pad.keyName)} >
        {pad.keyName}
        <audio className="clip" id={pad.keyName} src={pad.url} />
      </div>
    })
    return (
      <div className="App">
        <div id="drum-machine">
          <div id="keyboard">
            {pads}
          </div>
          <Options />
        </div>
      </div>
    );
  }
}
 
export default App;