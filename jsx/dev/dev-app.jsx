var DevApp = React.createClass({

    getDefaultProps: function() {
        return {
            title: 'Yearling\'s Bobtail',
            songs: [],
            speechBubbles: []
        };
    },

    getInitialState: function() {
        var playedSongIndex = window.sessionStorage.playedSongIndex ?
                parseInt(window.sessionStorage.playedSongIndex) : -1;
        return {
            playedSongIndex: playedSongIndex,
            annotationSpan: null
        };
    },

    componentDidMount: function() {
        document.body.addEventListener('click', this._handleBodyClick);
    },

    componentWillUnmount: function() {
        document.body.removeEventListener('click', this._handleBodyClick);
    },

    _handleBodyClick: function(e) {
        var annotation = document.getElementById('annotation');

        /**
         * Close annotation if anywhere outside annotation is clicked, with the
         * exception of another annotation link.
         */
        if (annotation && annotation !== e.target && !annotation.contains(e.target) && !GlobalManager.hasParentWithTagName(e.target, 'a')) {

            this.setState({
                annotationSpan: null
            });
        }
    },

    handleSongChange: function(newPlayedSongIndex) {
        if (newPlayedSongIndex >= 0 && newPlayedSongIndex < this.props.songs.length) {

            // Store song index in session.
            window.sessionStorage.playedSongIndex = newPlayedSongIndex;

            this.setState({
                playedSongIndex: newPlayedSongIndex,
                annotationSpan: null
            });
        }
    },

    handleAnnotationSelect: function(annotationKey) {
        var annotationObject = this.props.songs[this.state.playedSongIndex].annotations[annotationKey].description,
            annotationSpan = TextFormatter.getFormattedSpan(annotationObject);

        this.setState({
            annotationSpan: annotationSpan
        });
    },

    render: function() {
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
            annotationIsShown = !!this.state.annotationSpan;

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
                    <ReactCSSTransitionGroup
                        transitionName="annotation-animation"
                        transitionEnterTimeout={100}
                        transitionLeaveTimeout={100}
                    >
                    {annotationIsShown ?
                        <div key="annotation" id="annotation" className="notes-row annotation-row">
                            <DevAnnotationField
                                annotationSpan={this.state.annotationSpan}
                            />
                        </div> : null
                    }
                    </ReactCSSTransitionGroup>
                    <div className="notes-row speech-bubbles-row">
                        <DevSpeechBubblesField
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
});