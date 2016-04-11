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

        const playedSongIndex = window.sessionStorage.playedSongIndex ?
                parseInt(window.sessionStorage.playedSongIndex) : -1;

        /**
         * FIXME: Ideally, this should store the key in the window session, not
         * the entire annotation object.
         */
        const annotationObject = window.sessionStorage.annotationObject ?
                JSON.parse(window.sessionStorage.annotationObject) : null;

        this.handleSongChange = this.handleSongChange.bind(this);
        this.handleAnnotationSelect = this.handleAnnotationSelect.bind(this);
        this._handleBodyClick = this._handleBodyClick.bind(this);

        this.state = {
            playedSongIndex,
            annotationObject
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

            window.sessionStorage.annotationObject = null;

            this.setState({
                annotationObject: null
            });
        }
    }

    handleSongChange(newPlayedSongIndex) {
        if (newPlayedSongIndex >= 0 && newPlayedSongIndex < this.props.songs.length) {

            // Store song index in session.
            window.sessionStorage.playedSongIndex = newPlayedSongIndex;
            window.sessionStorage.annotationObject = null;

            this.setState({
                playedSongIndex: newPlayedSongIndex,
                annotationObject: null
            });
        }
    }

    handleAnnotationSelect(annotationKey) {
        var annotationObject = this.props.songs[this.state.playedSongIndex].annotations[annotationKey].description;

        window.sessionStorage.annotationObject = JSON.stringify(annotationObject);

        this.setState({
            annotationObject: annotationObject
        });
    }

    render() {
        var props = this.props,
            state = this.state,
            playedSongIndex = state.playedSongIndex,
            playedSongTitle = playedSongIndex >= 0 ?
                props.songs[playedSongIndex].title : null,
            playedSongSpeechBubbles = playedSongIndex >= 0 ?
                props.songs[playedSongIndex].speechBubbles :
                props.speechBubbles,
            playedSongTasks = playedSongIndex >= 0 ?
                props.songs[playedSongIndex].tasks : null,
            playedSongLyrics = playedSongIndex >= 0 ?
                props.songs[playedSongIndex].lyrics : null,
            playedSongAnnotations = playedSongIndex >= 0 ?
                props.songs[playedSongIndex].annotations : null,
            annotationIsShown = !!state.annotationObject,

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
                    {annotationIsShown ?
                        <div key="annotation" id="annotation" className="notes-field annotation-section">
                            <FormattedAnnotationPopup
                                annotationObject={state.annotationObject}
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
                {playedSongIndex >= 0 ?
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