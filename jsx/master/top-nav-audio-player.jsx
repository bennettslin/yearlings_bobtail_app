var AudioPlayer = React.createClass({
    getInitialState: function() {
        return {
            playingStatus: 'paused'
        };
    },

    render: function() {

        var stopButton = (
                <li>
                    <div className={'button' + (this.props.playedSongIndex === -1 ? ' disabled' : '')}
                        onClick={this._changePlayingStatus.bind(null, 'home')}
                    >
                        Home
                    </div>
                </li>
            ),
            previousButton = (
                <li>
                    <div className={'button' + (this.props.playedSongIndex <= 0 ? ' disabled' : '')}
                        onClick={this.props._changeSong.bind(null, this.props.playedSongIndex - 1)}
                    >
                        Previous
                    </div>
                </li>
            ),
            playButton = (
                <li>
                    <div className={'button'}
                        onClick={this._changePlayingStatus.bind(null, 'play')}>
                        {this.state.playingStatus === 'playing' ? 'Pause' : 'Play'}
                    </div>
                </li>
            ),
            nextButton = (
                <li>
                    <div className={'button' + (this.props.playedSongIndex >= this.props.songsLength - 1 ? ' disabled' : '')}
                        onClick={this.props._changeSong.bind(null, this.props.playedSongIndex + 1)}
                    >
                        Next
                    </div>
                </li>
            );

        return (
            <div className="nav-component audio-player">
                <ul className="playback-buttons">
                    {stopButton}
                    {previousButton}
                    {playButton}
                    {nextButton}
                </ul>
            </div>
        );
    },

    _changePlayingStatus: function(buttonName) {
        var playingStatus;

        if (buttonName === 'home') {
            playingStatus === 'paused';
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
