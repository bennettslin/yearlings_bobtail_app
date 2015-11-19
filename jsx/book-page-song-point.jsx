var SongPoint = React.createClass({
    render: function() {
        var songIndex = this.props.songIndex;

        return (
            <li className={'song-point-' + songIndex}>
                <button onClick={this.props._changeSong.bind(null, songIndex)} data-song-id={songIndex}>
                    {songIndex + 1}. {this.props.songTitle}
                </button>
            </li>
        );
    }
});
