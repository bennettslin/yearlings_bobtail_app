import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import LyricsField from './lyrics-field.jsx';
import NotesField from './notes-field.jsx';
import SongsField from './songs-field.jsx';

import { FormattedAnnotationPopup,
         FormattedLyricsColumn } from './text-formatter.jsx';

const GlobalHelpers = require('../helpers/global-helpers.js');

const defaultProps = {
    title: 'Yearling\'s Bobtail',
    songs: [],
    speechBubbles: []
};

class App extends React.Component {

    constructor(props) {
        super(props);

        this.handleSongChange = this.handleSongChange.bind(this);
        this.handleAnnotationSelect = this.handleAnnotationSelect.bind(this);
        this._handleBodyClick = this._handleBodyClick.bind(this);

        // Retrieve stored song index, if there is one. Song indices start at 1.
        this.handleSongChange(window.sessionStorage.playedSongIndex);

        // Retrieve stored annotation key, if there is one.
        this.handleAnnotationSelect(window.sessionStorage.annotationKey);

        this.state = {
            playedSongIndex: parseInt(window.sessionStorage.playedSongIndex) || 0,
            annotationKey: window.sessionStorage.annotationKey
        };
    }

    componentDidMount() {
        document.body.addEventListener('click', this._handleBodyClick);
    }

    componentWillUnmount() {
        document.body.removeEventListener('click', this._handleBodyClick);
    }

    _handleBodyClick(e) {
        var annotation = document.getElementById('annotation');

        /**
         * Close annotation if anywhere outside annotation is clicked, with the
         * exception of another annotation link.
         */
        if (annotation && annotation !== e.target && !annotation.contains(e.target) && !GlobalHelpers.hasParentWithTagName(e.target, 'a')) {

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
                    playedSongIndex: playedSongIndex
                });
            }
        }
    }

    handleAnnotationSelect(annotationKey, setState) {
        window.sessionStorage.annotationKey = annotationKey ? annotationKey : '';

        if (setState) {
            this.setState({
                annotationKey: annotationKey
            });
        }
    }

    render() {
        var props = this.props,
            state = this.state,
            playedSongIndex = state.playedSongIndex,
            playedSong = playedSongIndex ? props.songs[playedSongIndex - 1] : null,
            playedSongTitle = playedSongIndex ? playedSong.title : null,
            playedSongSpeechBubbles = playedSongIndex ?
                playedSong.speechBubbles : props.speechBubbles,
            playedSongTasks = playedSongIndex ? playedSong.tasks : null,
            playedSongLyrics = playedSongIndex ? playedSong.lyrics : null,
            playedSongAnnotations = playedSongIndex ? playedSong.annotations : null,
            annotationDescription = (playedSongIndex && !!state.annotationKey) ?
                playedSong.annotations[state.annotationKey].description : null,

            // The transition group is wrapped in a span element.
            transitionGroupStyle = {
                position: 'fixed',
                zIndex: 1
            };

        return (
            <div className="app">
                <div className="app-column songs-column">
                    <h1>{props.title}</h1>
                    <SongsField
                        songs={props.songs}
                        playedSongIndex={playedSongIndex}
                        handleSongChange={this.handleSongChange}
                    />
                </div>
                <div className="app-column notes-column">
                    <CSSTransitionGroup
                        style={transitionGroupStyle}
                        transitionName="annotation-animation"
                        transitionEnterTimeout={100}
                        transitionLeaveTimeout={100}
                    >
                    {!!state.annotationKey ?
                        <div key="annotation" id="annotation" className="notes-field annotation-section">
                            <FormattedAnnotationPopup
                                annotationDescription={annotationDescription}
                            />
                        </div> : null
                    }
                    </CSSTransitionGroup>
                    <NotesField
                        playedSongAnnotations={playedSongAnnotations}
                        playedSongSpeechBubbles={playedSongSpeechBubbles}
                        playedSongTasks={playedSongTasks}
                    />
                </div>
                {playedSongIndex ?
                     <div className="app-column lyrics-column">
                        <LyricsField
                            playedSongLyrics={playedSongLyrics}
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