var AudioPlayer = React.createClass({
    getInitialState: function() {
        return {
            playingStatus: 'stopped'
        };
    },

    render: function() {

        var stopButton = (
                <li>
                    <button
                        onClick={this._changePlayingStatus.bind(null, 'home')}
                        disabled={this.state.playingStatus === 'stopped'}
                    >
                        Home
                    </button>
                </li>
            ),
            previousButton = (
                <li>
                    <button
                        onClick={this.props._changeSong.bind(null, this.props.playedSongIndex - 1)}
                        disabled={this.props.playedSongIndex <= 0}
                    >
                        Previous
                    </button>
                </li>
            ),
            playButton = (
                <li>
                    <button onClick={this._changePlayingStatus.bind(null, 'play')}>
                        {this.state.playingStatus === 'playing' ? 'Pause' : 'Play'}
                    </button>
                </li>
            ),
            nextButton = (
                <li>
                    <button
                        onClick={this.props._changeSong.bind(null, this.props.playedSongIndex + 1)}
                        disabled={this.props.playedSongIndex >= this.props.songsLength - 1}
                    >
                        Next
                    </button>
                </li>
            );

        return (
            <li className="audio-player">
                <ul className="playback-buttons">
                    {stopButton}
                    {previousButton}
                    {playButton}
                    {nextButton}
                </ul>
            </li>
        );
    },

    _changePlayingStatus: function(buttonName) {
        var playingStatus;

        if (buttonName === 'home') {
            playingStatus === 'stopped';
            this.props._changeSong(-1);

        } else if (buttonName === 'play') {
            playingStatus = this.state.playingStatus === 'playing' ? 'paused' : 'playing';

            // Pressing play when no song is selected automatically selects first song.
            if (this.props.playedSongIndex === -1) {
                this.props._changeSong(0);
            }
        }

        this.setState({
            playingStatus: playingStatus
        });
    }
});
