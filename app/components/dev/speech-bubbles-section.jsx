import React from 'react';

const SPEECH_BUBBLE_NAMES = ['narrative', 'backstory'];
const defaultProps = {
    playedSongSpeechBubbles: {}
};

class SpeechBubblesSection extends React.Component {

    render() {
        var speechBubbles = SPEECH_BUBBLE_NAMES.map(function(bubbleName, index) {
                return (
                    <div
                        key={index}
                        className={'speech-bubble ' + bubbleName}
                    >
                        <h2>{bubbleName}</h2>
                        {this.props.TextFormatter.getFormattedSpan(this.props.playedSongSpeechBubbles[SPEECH_BUBBLE_NAMES[index]])}
                    </div>
                );
            }, this);

        return (
            <div className="speech-bubbles-section">
                {speechBubbles}
            </div>
        );
    }
}

SpeechBubblesSection.defaultProps = defaultProps;
export default SpeechBubblesSection;