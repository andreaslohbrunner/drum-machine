import React, { Component } from 'react';
import { inactiveStyle, activeStyle, activeOffStyle } from './style-types';

class DrumPad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            padStyle: inactiveStyle
        }
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.switchPadToActive = this.switchPadToActive.bind(this);
        this.switchPadToInactive = this.switchPadToInactive.bind(this);
        this.playAudio = this.playAudio.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }
    
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }
    
    handleKeyPress(e) {
        if(e.keyCode === this.props.drumPadKeyCode) {
            this.playAudio();
        }
    }

    switchPadToActive() {
        if (this.props.drumPadPower) {
            this.setState({
                padStyle: activeStyle
            })
        } else {
            this.setState({
                padStyle: activeOffStyle
            })
        }
    }

    switchPadToInactive() {
        this.setState({
            padStyle: inactiveStyle
        })
    }

    playAudio() {
        if (this.props.drumPadPower) {
            let audio = document.getElementById(this.props.drumPadText);
            audio.play()
            this.props.updateDisplay(this.props.drumPadId.replace(/-/g,' '))
            this.switchPadToActive();
            setTimeout(() => this.switchPadToInactive(), 200)
        } else {
            this.switchPadToActive();
            setTimeout(() => this.switchPadToInactive(), 200)
        }
    }

    render() { 
        return (
            <div
                className="drum-pad"
                id={this.props.drumPadId}
                onClick={this.playAudio}
                style={this.state.padStyle}
                >
                {this.props.drumPadText}
                <audio
                    className="clip"
                    id={this.props.drumPadText}
                    src={this.props.drumPadUrl}
                />
            </div>
        );
    }
}
 
export default DrumPad;