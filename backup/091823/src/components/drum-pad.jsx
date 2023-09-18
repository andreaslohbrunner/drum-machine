import React, { Component } from 'react';

class DrumPad extends Component {
    state = {  }

    playAudio = () => {
        let audio = document.getElementById(this.props.audioID);
        audio.play()
    }

    render() { 
        return (
            <div className="drum-pad" id={this.props.drumPadID} onClick={this.playAudio}>
                {this.props.audioID}
                <audio
                    className="clip"
                    id={this.props.audioID}
                    src={"https://s3.amazonaws.com/freecodecamp/drums/" + this.props.audiSRC + ".mp3"}
                ></audio>
            </div>
        );
    }
}
 
export default DrumPad;