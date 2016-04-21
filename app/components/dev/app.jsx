import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import AnnotationPopup from './annotation-popup.jsx';
import LyricsField from './lyrics-field.jsx';
import NotesField from './notes-field.jsx';
import SongsField from './songs-field.jsx';
import SongPlayerSection from './song-player-section.jsx';
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
        this.handleAnnotationSelect = this.handleAnnotationSelect.bind(this);

        // Retrieve stored song indices, if any. Song indices start at 1.
        this.handleSongChange(window.sessionStorage.playedSongIndex, 'played');
        this.handleSongChange(window.sessionStorage.selectedSongIndex, 'selected');

        // Retrieve stored annotation key, if there is one.
        this.handleAnnotationSelect(window.sessionStorage.annotationKey);

        this.state = {
            playedSongIndex: parseInt(window.sessionStorage.playedSongIndex) || 0,
            selectedSongIndex: parseInt(window.sessionStorage.selectedSongIndex) || 0,
            annotationKey: window.sessionStorage.annotationKey
        };
    }

    _handleBodyClick(e) {
        const annotation = this.refs.annotation;

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

        if (songIndex >= 0 && songIndex < this.props.songs.length) {

            // Store song index in session.
            window.sessionStorage[actionType + 'SongIndex'] = songIndex;

            if (setState) {
                /**
                 * Also reset the stored annotation key if setting the selected
                 * song index.
                 */
                if (actionType === 'selected') {
                    this.handleAnnotationSelect(null, true);
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

    handleAnnotationSelect(annotationKey, setState) {
        window.sessionStorage.annotationKey = annotationKey ? annotationKey : '';

        if (setState) {
            this.setState({
                annotationKey
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
            annotationDescription = (selectedSongIndex && !!state.annotationKey) ?
                selectedSong.annotations[state.annotationKey].description : null;

        return (
            <div ref="app" className="app" onClick={this._handleBodyClick}>
                <div className="app-field-container songs">
                    <h1>{props.title}</h1>
                    <SongPlayerSection
                        songs={props.songs}
                        playedSongIndex={playedSongIndex}
                        handleSongChange={this.handleSongChange}
                        />
                    <SongsField
                        songs={props.songs}
                        selectedSongIndex={selectedSongIndex}
                        handleSongChange={this.handleSongChange}
                    />
                </div>
                <div className="app-field-container notes">
                    <CSSTransitionGroup
                        style={{ position: 'fixed', zIndex: 1 }}
                        transitionName="annotation-animation"
                        transitionEnterTimeout={100}
                        transitionLeaveTimeout={100}
                    >
                    {!!state.annotationKey ?
                        <div key="annotation" ref="annotation" className="notes-field annotation-section">
                            <AnnotationPopup
                                annotationDescription={annotationDescription}
                            />
                        </div> : null
                    }
                    </CSSTransitionGroup>
                    <NotesField
                        selectedSongAnnotations={selectedSong.annotations}
                        selectedSongSpeechBubbles={selectedSong.speechBubbles || props.speechBubbles}
                        selectedSongTasks={selectedSong.tasks || null}
                    />
                </div>
                {selectedSongIndex ?
                     <div className="app-field-container lyrics">
                        <LyricsField
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