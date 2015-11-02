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

var Page = React.createClass({
    render: function() {

        // FIXME: To be modular, this should not know page number
        var pageButtonLabels = this.props.pageIndex === 0 ?
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
                var songIndex = this.props.startingIndex + index;
                return (
                    <SongPoint
                        key={songIndex}
                        songIndex={songIndex}
                        songTitle={song.title}
                        _changeSong={this.props._changeSong}
                    />
                );
            }.bind(this)),
            visibilityClass;

        if (this.props.pageIndex < this.props.viewedPageIndex) {
            visibilityClass = "hidden previous";
        } else if (this.props.pageIndex > this.props.viewedPageIndex) {
            visibilityClass = "hidden next";
        } else {
            visibilityClass = "viewed"
        }

        return (
            <div className={'book-page-' + this.props.pageIndex + ' ' + visibilityClass}>
                {pageButtons[0]}
                <ul className="song-path">
                    {songPoints}
                </ul>
                {pageButtons[1]}
            </div>
        );
    }
});
