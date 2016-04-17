import React from 'react';

import ProgressSection from './progress-section.jsx';
import StatsSection from './stats-section.jsx';
import { FormattedSpeechBubblesSection } from './text-formatter.jsx';

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
                <FormattedSpeechBubblesSection
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