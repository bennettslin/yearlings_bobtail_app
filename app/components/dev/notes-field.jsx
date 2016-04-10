import React from 'react';

import ProgressSection from './progress-section.jsx';
import { FormattedSpeechBubblesSection } from './text-formatter.jsx';

const defaultProps = {
    playedSongSpeechBubbles: {},
    playedSongTasks: {}
};

class NotesField extends React.Component {

    render() {
        const props = this.props;

        return (
            <div className="notes-field">
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