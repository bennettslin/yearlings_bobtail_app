
var AudioPlayer = React.createClass({
    render: function() {
        return (
            <li className="audio-player">
                {this.props.currentSongIndex + 1 + ''}. {this.props.currentSongTitle}
            </li>
        );
    }
});

var BennettAvatar = React.createClass({
    render: function() {
        return (
            <li className="bennett-avatar">
                bennett avatar
            </li>
        );
    }
});

var Legend = React.createClass({
    render: function() {
        return (
            <li className="legend">
                legend
            </li>
        );
    }
});

var TopNav = React.createClass({
    render: function() {
        return (
            <ul className="top-nav">
                <AudioPlayer
                    currentSongIndex={this.props.currentSongIndex}
                    currentSongTitle={this.props.currentSongTitle}
                />
                <BennettAvatar />
                <Legend />
            </ul>
        );
    }
});

var SongPoint = React.createClass({
    render: function() {
        var songIndex = isNaN(this.props.songIndex) ? -1 : this.props.songIndex;

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
        var pageButtonLabels = this.props.pageIndex === 0 ?
                ['next page', 'next page'] :
                ['previous page', 'previous page'];

        var pageButtons = pageButtonLabels.map(function(label) {
            return (
                <div className="page-change-button">
                    <button onClick={this.props._changePage}>
                        {label}
                    </button>
                </div>
            );
        }.bind(this));

        var songPoints = this.props.songs.map(function(song, index) {
            var songIndex = this.props.pageStartingIndex + index;
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
            <div className="page">
                {pageButtons[0]}
                <ul className="song-path">
                    {songPoints}
                </ul>
                {pageButtons[1]}
            </div>
        );
    }
});

var App = React.createClass({
    getInitialState: function() {

        return {
            currentPageIndex: 0,
            currentSongIndex: 0
        }
    },

    render: function() {
        var titleBar = (
            <div className="title-bar">
                <h1>Bobtail Yearlings</h1>
                <span>presents</span>
                <h2>Yearlings Bobtail</h2>
            </div>
        );

        var footer = (
            <div className="footer">
                &copy; Copyright 2015. Website designed and developed by Bennett Samuel Lin.
            </div>
        );

        var pageStartingIndex = this.props.pageStartingIndices[this.state.currentPageIndex];
        var pageSongs;
        // if this is the last page...
        if (this.state.currentPageIndex === this.props.pageStartingIndices.length - 1) {
            pageSongs = this.props.songs.slice(pageStartingIndex);
        // otherwise...
        } else {
            var nextPageStartingIndex = this.props.pageStartingIndices[this.state.currentPageIndex + 1];
            pageSongs = this.props.songs.slice(pageStartingIndex, nextPageStartingIndex);
        }

        return (
            <div className="app">
                {titleBar}
                <TopNav
                    currentSongIndex={this.state.currentSongIndex}
                    currentSongTitle={this.props.songs[this.state.currentSongIndex].title}
                />
                <Page
                    key={this.state.currentPageIndex}
                    songs={pageSongs}
                    pageStartingIndex={pageStartingIndex}
                    _changePage={this._changePage}
                    _changeSong={this._changeSong}
                    pageIndex={this.state.currentPageIndex}
                />
                {footer}
            </div>
        );
    },

    _changePage: function() {
        var currentPageIndex = (this.state.currentPageIndex + 1) % this.props.pageStartingIndices.length;
        this.setState({
            currentPageIndex
        });
    },

    _changeSong: function(currentSongIndex) {
        this.setState({
            currentSongIndex
        });
    }
});
