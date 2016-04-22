import React from 'react';
import ProgressSection from './progress-section.jsx';
import SpeechBubblesSection from './speech-bubbles-section.jsx';
import StatsSection from './stats-section.jsx';

const defaultProps = {
    selectedSongLyrics: {},
    selectedSongAnnotations: {},
    selectedSpeechBubbleKey: '',
    speechBubbleRichText: '',
    selectedSongTasks: {},
    handleSpeechBubbleSelect() {}
};

class NotesField extends React.Component {

    render() {
        const props = this.props;

        return (
            <div className="notes-field">
                <StatsSection
                    lyrics={props.selectedSongLyrics}
                    annotations={props.selectedSongAnnotations}
                />
                <SpeechBubblesSection
                    speechBubbleRichText={props.speechBubbleRichText}
                    selectedSpeechBubbleKey={props.selectedSpeechBubbleKey}
                    selectedSongSpeechBubbles={props.selectedSongSpeechBubbles}
                    handleSpeechBubbleSelect={props.handleSpeechBubbleSelect}
                />
                {props.selectedSongTasks ?
                    <ProgressSection
                        tasks={props.selectedSongTasks}
                    /> : null
                }
            </div>
        );
    }
}

NotesField.defaultProps = defaultProps;
export default NotesField;