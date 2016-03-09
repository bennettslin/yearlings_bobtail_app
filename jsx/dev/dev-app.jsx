var DevApp = React.createClass({

    getDefaultProps: function() {
        return {
            songs: [],
            speechBubbles: []
        };
    },

    getInitialState: function() {
        return {
            playedSongIndex: -1,
            annotationMappedTextElement: null
        };
    },

    _changeSong: function(playedSongIndex) {
        if (playedSongIndex >= -1 && playedSongIndex < this.props.songs.length) {
            this.setState({
                playedSongIndex: playedSongIndex,
                annotationMappedTextElement: null
            });
        }
    },

    _handleAnnotationSelect: function(annotationKey) {
        var annotationContentObject = this.props.songs[this.state.playedSongIndex].annotations[annotationKey].description,
            annotationMappedTextElement = TextFormatter.getMappedTextElement(annotationContentObject);

        this.setState({
            annotationMappedTextElement: annotationMappedTextElement
        });
    },

    render: function() {
        var playedSongIndex = this.state.playedSongIndex,
            playedSongTitle = this.state.playedSongIndex >= 0 ?
                this.props.songs[this.state.playedSongIndex].title : null,
            playedSongSpeechBubbles = this.state.playedSongIndex >= 0 ?
                this.props.songs[this.state.playedSongIndex].speechBubbles :
                this.props.speechBubbles,
            playedSongLyrics = this.state.playedSongIndex >= 0 ?
                this.props.songs[this.state.playedSongIndex].lyrics : null;

        return (
            <div className="dev-app">
                <div className="dev-column songs-column">
                    <h1>{'Yearling\'s Bobtail'}</h1>
                    <DevSongList
                        songs={this.props.songs}
                        playedSongIndex={playedSongIndex}
                        _changeSong={this._changeSong}
                    />
                </div>
                <div className="dev-column notes-column no-padding">
                    {this.state.annotationMappedTextElement ?
                        <div className="notes-row annotation-row">
                            <h2>annotation</h2>
                            <DevAnnotation
                                annotationMappedTextElement={this.state.annotationMappedTextElement}
                            />
                        </div> : null
                    }
                    <div className="notes-row speech-bubbles-row">
                        <DevSpeech
                            playedSongSpeechBubbles={playedSongSpeechBubbles}
                        />
                    </div>
                </div>
                {playedSongIndex > -1 ?
                     <div className="dev-column lyrics-column">
                        <DevLyrics
                            playedSongLyrics={playedSongLyrics}
                            _handleAnnotationSelect={this._handleAnnotationSelect}
                        />
                    </div> : null
                }
            </div>
        );
    }
});