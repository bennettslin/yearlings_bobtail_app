import React from 'react';
import ProgressSection from './progress-section.jsx';
import SpeechBubblesSection from './speech-bubbles-section.jsx';
import StatsSection from './stats-section.jsx';

const defaultProps = {
    playedSongAnnotations: {},
    playedSongSpeechBubbles: {},
    playedSongTasks: {}
};

class NotesField extends React.Component {

    render() {
        const props = this.props;

        return (
            <div className="notes-field">
                <StatsSection
                    annotations={props.playedSongAnnotations}
                />
                <SpeechBubblesSection
                    playedSongSpeechBubbles={props.playedSongSpeechBubbles}
                />
                {props.playedSongTasks ?
                    <ProgressSection
                        tasks={props.playedSongTasks}
                    /> : null
                }
            </div>
        );
    }
}

NotesField.defaultProps = defaultProps;
export default NotesField;