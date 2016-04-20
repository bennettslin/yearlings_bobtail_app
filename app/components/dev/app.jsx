import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import LyricsField from './lyrics-field.jsx';
import NotesField from './notes-field.jsx';
import SongsField from './songs-field.jsx';
import { FormattedAnnotationPopup,
         FormattedLyricsColumn } from './text-formatter.jsx';
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

        // Retrieve stored song index, if there is one. Song indices start at 1.
        this.handleSongChange(window.sessionStorage.playedSongIndex);

        // Retrieve stored annotation key, if there is one.
        this.handleAnnotationSelect(window.sessionStorage.annotationKey);

        this.state = {
            playedSongIndex: parseInt(window.sessionStorage.playedSongIndex) || 0,
            annotationKey: window.sessionStorage.annotationKey
        };
    }

    _handleBodyClick(e) {
        var annotation = this.refs.annotation;

        /**
         * Close annotation if anywhere outside annotation is clicked, with the
         * exception of another annotation link.
         */
        if (annotation && annotation !== e.target && !annotation.contains(e.target) && !GlobalHelper.hasParentWithTagName(e.target, 'a')) {

            this.handleAnnotationSelect(null, true);
        }
    }

    handleSongChange(playedSongIndex, setState) {

        if (typeof playedSongIndex === 'string') {
            playedSongIndex = parseInt(playedSongIndex) || 0;
        }

        if (playedSongIndex >= 0 && playedSongIndex < this.props.songs.length) {

            // Store song index in session.
            window.sessionStorage.playedSongIndex = playedSongIndex;

            if (setState) {
                /**
                 * If setting the song index, then also reset the stored
                 * annotation key.
                 */
                this.handleAnnotationSelect(null, true);

                this.setState({
                    playedSongIndex
                });
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
        var props = this.props,
            state = this.state,
            playedSongIndex = state.playedSongIndex,
            playedSong = playedSongIndex ?
                props.songs[playedSongIndex - 1] : {},
            annotationDescription = (playedSongIndex && !!state.annotationKey) ?
                playedSong.annotations[state.annotationKey].description : null;

        return (
            <div ref="app" className="app" onClick={this._handleBodyClick}>
                <div className="app-field-container songs">
                    <h1>{props.title}</h1>
                    <SongsField
                        songs={props.songs}
                        playedSongIndex={playedSongIndex}
                        handleSongChange={this.handleSongChange}
                    />
                </div>
                <div className="app-field-container notes">
                    <CSSTransitionGroup
                        transitionName="annotation-animation"
                        transitionEnterTimeout={100}
                        transitionLeaveTimeout={100}
                    >
                    {!!state.annotationKey ?
                        <div key="annotation" ref="annotation" className="notes-field annotation-section">
                            <FormattedAnnotationPopup
                                annotationDescription={annotationDescription}
                            />
                        </div> : null
                    }
                    </CSSTransitionGroup>
                    <NotesField
                        playedSongAnnotations={playedSong.annotations}
                        playedSongSpeechBubbles={playedSong.speechBubbles || props.speechBubbles}
                        playedSongTasks={playedSong.tasks || null}
                    />
                </div>
                {playedSongIndex ?
                     <div className="app-field-container lyrics">
                        <LyricsField
                            playedSongLyrics={playedSong.lyrics}
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