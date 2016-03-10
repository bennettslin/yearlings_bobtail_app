var DevApp = React.createClass({

    getDefaultProps: function() {
        return {
            title: 'Yearling\'s Bobtail',
            songs: [],
            speechBubbles: []
        };
    },

    getInitialState: function() {
        return {
            playedSongIndex: -1,
            annotationSpan: null
        };
    },

    handleSongChange: function(newPlayedSongIndex) {
        if (newPlayedSongIndex >= 0 && newPlayedSongIndex < this.props.songs.length) {
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
            playedSongLyrics = playedSongIndex >= 0 ?
                this.props.songs[playedSongIndex].lyrics : null;

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
                    {this.state.annotationSpan ?
                        <div className="notes-row annotation-row">
                            <DevAnnotationField
                                annotationSpan={this.state.annotationSpan}
                            />
                        </div> : null
                    }
                    <div className="notes-row speech-bubbles-row">
                        <DevSpeechBubblesField
                            playedSongSpeechBubbles={playedSongSpeechBubbles}
                        />
                        <DevProgressField
                            tasks={this.props.songs.tasks}
                        />
                    </div>
                </div>
                {playedSongIndex > -1 ?
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