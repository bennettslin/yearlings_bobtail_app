import React from 'react';

var SPEECH_BUBBLE_NAMES = ['narrative', 'backstory'];

export default class DevSpeechBubblesField extends React.Component {

    // getDefaultProps() {
    //     return {
    //         playedSongSpeechBubbles: {}
    //     };
    // }

    constructor(props) {
        super(props);
    }

    render() {
        var speechBubbles = SPEECH_BUBBLE_NAMES.map(function(bubbleName, index) {
                return (
                    <div
                        key={index}
                        className={'speech-bubble ' + bubbleName}
                    >
                        <h2>{bubbleName}</h2>
                        {TextFormatter.getFormattedSpan(this.props.playedSongSpeechBubbles[SPEECH_BUBBLE_NAMES[index]])}
                    </div>
                );
            }, this);

        return (
            <div className="dev-speech-bubbles-field">
                {speechBubbles}
            </div>
        );
    }
}