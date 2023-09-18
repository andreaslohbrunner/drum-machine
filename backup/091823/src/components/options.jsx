import React, { Component } from 'react';

class Options extends Component {
    state = {  } 
    render() { 
        return (
            <div id="options">
                <div id="switch">
                    <div id="switch-name">Power</div>
                    <div id="switch-box">
                        <div id="switch-button"></div>
                    </div>
                </div>
                <div id="display">Heater 1</div>
                <div id="volume">
                    <div id="volume-control"></div>
                    <div id="volume-button"></div>
                </div>
            </div>
        );
    }
}
 
export default Options;