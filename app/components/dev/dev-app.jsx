import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import DevLyricsField from './dev-lyrics-field.jsx';
import DevProgressField from './dev-progress-field.jsx';
import DevSongsField from './dev-songs-field.jsx';

import { DevFormattedAnnotationField } from './dev-text-formatter.jsx';
import { DevFormattedSpeechBubblesField } from './dev-text-formatter.jsx';
import { DevFormattedLyricsColumn } from './dev-text-formatter.jsx';

const GlobalManager = require('../helpers/global-manager.js');

export default class DevApp extends React.Component {

    constructor(props) {
        super(props);

        const playedSongIndex = window.sessionStorage.playedSongIndex ?
                parseInt(window.sessionStorage.playedSongIndex) : -1;

        this.handleSongChange = this.handleSongChange.bind(this);
        this.handleAnnotationSelect = this.handleAnnotationSelect.bind(this);
        this._handleBodyClick = this._handleBodyClick.bind(this);

        this.state = {
            playedSongIndex,
            annotationObject: null
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
        if (annotation && annotation !== e.target && !annotation.contains(e.target) && !GlobalManager.hasParentWithTagName(e.target, 'a')) {

            this.setState({
                annotationObject: null
            });
        }
    }

    handleSongChange(newPlayedSongIndex) {
        if (newPlayedSongIndex >= 0 && newPlayedSongIndex < this.props.songs.length) {

            // Store song index in session.
            window.sessionStorage.playedSongIndex = newPlayedSongIndex;

            this.setState({
                playedSongIndex: newPlayedSongIndex,
                annotationObject: null
            });
        }
    }

    handleAnnotationSelect(annotationKey) {
        var annotationObject = this.props.songs[this.state.playedSongIndex].annotations[annotationKey].description;

        this.setState({
            annotationObject: annotationObject
        });
    }

    render() {
        var playedSongIndex = this.state.playedSongIndex,
            playedSongTitle = playedSongIndex >= 0 ?
                this.props.songs[playedSongIndex].title : null,
            playedSongSpeechBubbles = playedSongIndex >= 0 ?
                this.props.songs[playedSongIndex].speechBubbles :
                this.props.speechBubbles,
            playedSongTasks = playedSongIndex >= 0 ?
                this.props.songs[playedSongIndex].tasks : null,
            playedSongLyrics = playedSongIndex >= 0 ?
                this.props.songs[playedSongIndex].lyrics : null,
            annotationIsShown = !!this.state.annotationObject;

        return (
            <div className="dev-app">
                <div className="dev-app-column songs-column">
                    <h1>{this.props.title}</h1>
                    <DevSongsField
                        songs={this.props.songs}
                        playedSongIndex={playedSongIndex}
                        handleSongChange={this.handleSongChange}
                    />
                </div>
                <div className="dev-app-column notes-column">
                    <CSSTransitionGroup
                        transitionName="annotation-animation"
                        transitionEnterTimeout={100}
                        transitionLeaveTimeout={100}
                    >
                        {annotationIsShown ?
                            <div key="annotation" id="annotation" className="notes-row annotation-row">
                                <DevFormattedAnnotationField
                                    annotationObject={this.state.annotationObject}
                                />
                            </div> : null
                        }
                    </CSSTransitionGroup>
                    <div className="notes-row speech-bubbles-row">
                        <DevFormattedSpeechBubblesField
                            playedSongSpeechBubbles={playedSongSpeechBubbles}
                        />
                        {playedSongTasks ?
                            <DevProgressField
                                tasks={playedSongTasks}
                            /> : null
                        }
                    </div>
                </div>
                {playedSongIndex >= 0 ?
                     <div className="dev-app-column lyrics-column">
                        <DevLyricsField
                            playedSongLyrics={playedSongLyrics}
                            handleAnnotationSelect={this.handleAnnotationSelect}
                        />
                    </div> : null
                }
            </div>
        );
    }
}

DevApp.defaultProps = {
    title: 'Yearling\'s Bobtail',
    songs: [],
    speechBubbles: []
}