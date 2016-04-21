import React from 'react';
import ProgressSection from './progress-section.jsx';
import SpeechBubblesSection from './speech-bubbles-section.jsx';
import StatsSection from './stats-section.jsx';

const defaultProps = {
    selectedSongAnnotations: {},
    selectedSongSpeechBubbles: {},
    selectedSongTasks: {}
};

class NotesField extends React.Component {

    render() {
        const props = this.props;

        return (
            <div className="notes-field">
                <StatsSection
                    annotations={props.selectedSongAnnotations}
                />
                <SpeechBubblesSection
                    selectedSongSpeechBubbles={props.selectedSongSpeechBubbles}
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