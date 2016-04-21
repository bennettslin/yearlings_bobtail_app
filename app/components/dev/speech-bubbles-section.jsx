import React from 'react';
import FormatHelper from '../helpers/format-helper.jsx';

const SPEECH_BUBBLE_NAMES = ['narrative', 'backstory'];
const defaultProps = {
    selectedSongSpeechBubbles: {}
};

class SpeechBubblesSection extends React.Component {

    render() {
        const speechBubbles = SPEECH_BUBBLE_NAMES.map(function(bubbleName, index) {
                return (
                    <div
                        key={index}
                        className={'speech-bubble ' + bubbleName}
                    >
                        <h2>{bubbleName}</h2>
                        {FormatHelper.getFormattedSpan(this.props.selectedSongSpeechBubbles[SPEECH_BUBBLE_NAMES[index]])}
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