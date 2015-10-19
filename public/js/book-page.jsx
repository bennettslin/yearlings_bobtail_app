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

var BookPage = React.createClass({
    render: function() {

        // FIXME: To be modular, this should not know page number
        var pageButtonLabels = this.props.viewedPageIndex === 0 ?
                ['skip to Book II', 'continue to Book II'] :
                ['back to Book I', 'return to Book I'],

            pageButtons = pageButtonLabels.map(function(label) {
                return (
                    <div className="page-change-button">
                        <button onClick={this.props._changePage}>
                            {label}
                        </button>
                    </div>
                );
            }.bind(this)),

            songPoints = this.props.songs.map(function(song, index) {
                var songIndex = this.props.viewedPageStartingIndex + index;
                return (
                    <SongPoint
                        key={songIndex}
                        songIndex={songIndex}
                        songTitle={song.title}
                        _changeSong={this.props._changeSong}
                    />
                );
            }.bind(this));

        return (
            <div className="book-page">
                {pageButtons[0]}
                <ul className="song-path">
                    {songPoints}
                </ul>
                {pageButtons[1]}
            </div>
        );
    }
});
