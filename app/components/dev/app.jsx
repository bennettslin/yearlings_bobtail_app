import React from 'react';
import TitleSection from './title-section.jsx';
import SongsSection from './songs-section.jsx';
import NotesSection from './notes-section.jsx';
import AnnotationSection from './annotation-section.jsx';
import StatsSection from './stats-section.jsx';
import SpeechBubblesSection from './speech-bubbles-section.jsx';
import TasksSection from './tasks-section.jsx';
import LyricsSection from './lyrics-section.jsx';
import GlobalHelper from '../helpers/global-helper.js';

const defaultProps = {
    title: 'Yearling\'s Bobtail',
    songs: [],
    speechBubbles: []
};

class App extends React.Component {

    constructor(props) {
        super(props);

        this._handleBodyClick = this._handleBodyClick.bind(this);
        this.handleSongChange = this.handleSongChange.bind(this);
        this.handleSpeechBubbleSelect = this.handleSpeechBubbleSelect.bind(this);
        this.handleAnnotationSelect = this.handleAnnotationSelect.bind(this);

        /**
         * Retrieve stored song indices, if any. Song indices start at 1.
         * (Played song index isn't presently being used.)
         */
        this.handleSongChange(window.sessionStorage.playedSongIndex, 'played');
        this.handleSongChange(window.sessionStorage.selectedSongIndex, 'selected');

        // Retrieve stored speech bubble key, if there is one.
        this.handleSpeechBubbleSelect(window.sessionStorage.selectedSpeechBubbleKey);

        // Retrieve stored annotation key, if there is one.
        this.handleAnnotationSelect(window.sessionStorage.selectedAnnotationKey);

        this.state = {
            playedSongIndex: parseInt(window.sessionStorage.playedSongIndex) || 0,
            selectedSongIndex: parseInt(window.sessionStorage.selectedSongIndex) || 0,
            selectedSpeechBubbleKey: window.sessionStorage.selectedSpeechBubbleKey,
            selectedAnnotationKey: window.sessionStorage.selectedAnnotationKey
        };
    }

    _handleBodyClick(e) {
        const annotation = this.refs.annotationSection.refs.annotation;

        /**
         * Close annotation if anywhere outside annotation is clicked, with the
         * exception of another annotation link.
         */
        if (annotation &&
            annotation !== e.target &&
            !annotation.contains(e.target) &&
            !GlobalHelper.hasParentWithTagName(e.target, 'a')) {

            this.handleAnnotationSelect(null, true);
        }
    }

    handleSongChange(songIndex = 0, actionType = 'selected', setState = false) {

        if (typeof songIndex === 'string') {
            songIndex = parseInt(songIndex) || 0;
        }

        if (songIndex >= 0 && songIndex <= this.props.songs.length) {

            // Store song index in session.
            window.sessionStorage[actionType + 'SongIndex'] = songIndex;

            if (setState) {
                /**
                 * Also reset the stored annotation and speech bubble keys if
                 * changing the selected song index.
                 */
                if (actionType === 'selected') {
                    this.handleAnnotationSelect(null, true);
                    this.handleSpeechBubbleSelect(null, true);

                    this.setState({
                        selectedSongIndex: songIndex
                    });

                } else if (actionType === 'played') {
                    this.setState({
                        playedSongIndex: songIndex
                    });
                }
            }
        }
    }

    handleSpeechBubbleSelect(selectedSpeechBubbleKey, setState) {
        selectedSpeechBubbleKey = selectedSpeechBubbleKey || 'narrative';
        window.sessionStorage.selectedSpeechBubbleKey = selectedSpeechBubbleKey;

        if (setState) {
            this.setState({
                selectedSpeechBubbleKey
            });
        }
    }

    handleAnnotationSelect(selectedAnnotationKey, setState) {
        window.sessionStorage.selectedAnnotationKey = selectedAnnotationKey || '';

        if (setState) {
            this.setState({
                selectedAnnotationKey
            });
        }
    }

    render() {
        const props = this.props,
            state = this.state,
            playedSongIndex = state.playedSongIndex,
            selectedSongIndex = state.selectedSongIndex,
            selectedSong = selectedSongIndex ?
                props.songs[selectedSongIndex - 1] : {},
            speechBubbleRichText = (selectedSongIndex && state.selectedSpeechBubbleKey) ?
                selectedSong.speechBubbles[state.selectedSpeechBubbleKey] :
                props.speechBubbles[state.selectedSpeechBubbleKey],
            annotationRichText = (selectedSongIndex && state.selectedAnnotationKey) ?
                selectedSong.annotations[state.selectedAnnotationKey].description : {};

        return (
            <div ref="app" className="app" onClick={this._handleBodyClick}>
                <div className="field songs-field">
                    <TitleSection
                        titleText={props.title}
                        handleSongReset={this.handleSongChange.bind(null, 0, 'selected', true)}
                    />
                    <SongsSection
                        songs={props.songs}
                        selectedSongIndex={selectedSongIndex}
                        handleSongChange={this.handleSongChange}
                    />
                </div>
                <div className="field notes-field">
                    <AnnotationSection
                        ref="annotationSection"
                        annotationRichText={annotationRichText}
                        selectedAnnotationKey={state.selectedAnnotationKey}
                    />
                    {!selectedSongIndex ?
                        <NotesSection /> : null
                    }
                    <StatsSection
                        lyrics={selectedSong.lyrics}
                        annotations={selectedSong.annotations}
                    />
                    <SpeechBubblesSection
                        speechBubbleRichText={speechBubbleRichText}
                        selectedSpeechBubbleKey={state.selectedSpeechBubbleKey}
                        handleSpeechBubbleSelect={this.handleSpeechBubbleSelect}
                    />
                    {selectedSong.tasks ?
                        <TasksSection
                            tasks={selectedSong.tasks}
                        /> : null
                    }
                </div>
                {selectedSongIndex ?
                     <div className="field lyrics-field">
                        <LyricsSection
                            selectedSongLyrics={selectedSong.lyrics}
                            handleAnnotationSelect={this.handleAnnotationSelect}
                        />
                    </div> : null
                }
            </div>
        );
    }
}

App.defaultProps = defaultProps;
export default App;