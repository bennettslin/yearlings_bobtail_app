var AudioPlayer = React.createClass({
    render: function() {

        var previousButton = (
                <li>
                    <button
                        onClick={this.props._changeSong.bind(null, this.props.playedSongIndex - 1)}
                        disabled={this.props.playedSongIndex <= -1}
                    >
                        {this.props.playedSongIndex <= 0 ? 'Home' : 'Previous'}
                    </button>
                </li>
            ),
            playButton = (
                <li>
                    <button>
                        Play
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
                {this.props.playedSongIndex + 1 + ''}. {this.props.playedSongTitle}
                <ul className="playback-buttons">
                    {previousButton}
                    {playButton}
                    {nextButton}
                </ul>
            </li>
        );
    }
});
