import React from 'react';
import FormatUtility from '../utilities/format-utility.jsx';

const SPEECH_BUBBLE_NAMES = ['narrative', 'music'];
const defaultProps = {
    speechBubbleRichText: '',
    selectedSpeechBubbleKey: '',
    handleSpeechBubbleSelect() {}
};

class SpeechBubblesSection extends React.Component {

    _getSpeechBubbleSelectButton(key) {
        const props = this.props,
            disabled = key === props.selectedSpeechBubbleKey,
            className = 'select-button' + (disabled ? ' disabled' : '');

        return (
            <div key={key} className={className}>
                <h2>
                    <a disabled={disabled}
                        onClick={disabled ? null : props.handleSpeechBubbleSelect.bind(null, key)}
                    >
                        {key}
                    </a>
                </h2>
            </div>
        );
    }

    render() {
        return (
            <div className="section speech-bubbles-section">
                <div className="button-block">
                    {SPEECH_BUBBLE_NAMES.map(key => {
                        return this._getSpeechBubbleSelectButton(key);
                    })}
                </div>
                <div className={'speech-bubble'}>
                    {FormatUtility.getFormattedSpan(this.props.speechBubbleRichText)}
                </div>

            </div>
        );
    }
}

SpeechBubblesSection.defaultProps = defaultProps;
export default SpeechBubblesSection;