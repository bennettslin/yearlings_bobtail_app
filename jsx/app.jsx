// FIXME: Uncomment or delete.

// var isNode = (typeof module !== 'undefined') && module.exports,
//     React = isNode ? require('react') : window.React,
//     ReactDOM = isNode ? require('react') : window.ReactDOM;

var App = React.createClass({
    getInitialState: function() {
        return {
            viewedPageIndex: 0,
            playedSongIndex: -1,
            topNavWidthName: 'full',
            topNavIsStuck: false,
            lyricsColumnsAreStuck: false
        }
    },

    componentDidMount: function() {
        if (window) {
            window.addEventListener('scroll', this._handleWindowScroll);
        }
    },

    componentWillUnmount: function() {
        if (window) {
            window.removeEventListener('scroll', this._handleWindowScroll);
        }
    },

    render: function() {
        var playedSongIndex = this.state.playedSongIndex,
            playedSongTitle = this.state.playedSongIndex >= 0 ? this.props.songs[this.state.playedSongIndex].title : null,
            playedSongNarrative = this.state.playedSongIndex >= 0 ? this.props.songs[this.state.playedSongIndex].narrative : this.props.narrative,
            playedSongPersonal = this.state.playedSongIndex >= 0 ? this.props.songs[this.state.playedSongIndex].personal : this.props.personal,
            playedSongLyrics = this.state.playedSongIndex >= 0 ? this.props.songs[this.state.playedSongIndex].lyrics : null,
            playedSongPageIndex = -1,
            footer;

        // get page of currently played song
        if (this.state.playedSongIndex >= 0) {
            playedSongPageIndex = this.props.pageStartingIndices.reduce(function(currentStartingIndex, startingIndex, index) {
                return this.state.playedSongIndex >= startingIndex ? index : currentStartingIndex;
            }.bind(this), 0);
        }

        footer = (
            <div className="footer">
                &copy; Copyright 2015. Website designed, illustrated, and developed by Bennett Samuel Lin.
            </div>
        );

        return (
            <div className="app">
                <TopNav
                    isStuck={this.state.topNavIsStuck}
                    playedSongIndex={playedSongIndex}
                    playedSongTitle={playedSongTitle}
                    playedSongNarrative={playedSongNarrative}
                    playedSongPersonal={playedSongPersonal}
                    playedSongPageIndex={playedSongPageIndex}
                    songsLength={this.props.songs.length}
                    widthName={this.state.topNavWidthName}
                    _changeSong={this._changeSong}
                />
                <Book
                    lyricsColumnsAreStuck={this.state.lyricsColumnsAreStuck}
                    viewedPageIndex={this.state.viewedPageIndex}
                    pageStartingIndices={this.props.pageStartingIndices}
                    songs={this.props.songs}
                    playedSongIndex={playedSongIndex}
                    playedSongTitle={playedSongTitle}
                    playedSongLyrics={playedSongLyrics}
                    _changePage={this._changePage}
                    _changeSong={this._changeSong}
                />
                {footer}
            </div>
        );
    },

    _changePage: function() {
        var viewedPageIndex = (this.state.viewedPageIndex + 1) % this.props.pageStartingIndices.length;
        this.setState({
            viewedPageIndex: viewedPageIndex
        });
    },

    _changeSong: function(playedSongIndex) {
        if (playedSongIndex >= -1 && playedSongIndex < this.props.songs.length) {
            var playedSongLyrics = playedSongIndex >= 0 ? this.props.songs[playedSongIndex].lyrics : null,
                lyricsKeys = playedSongLyrics ? Object.keys(playedSongLyrics) : [],
                lyricsColumnsStatus = 0;

            lyricsColumnsStatus += (lyricsKeys.indexOf('left') !== -1) ? 1 : 0;
            lyricsColumnsStatus += (lyricsKeys.indexOf('right') !== -1) ? 2 : 0;
            this._adjustTopNavWidth(lyricsColumnsStatus);

            this.setState({
                playedSongIndex: playedSongIndex
            });
        }
    },

    _adjustTopNavWidth: function(lyricsColumnsStatus) {
        /**
         * lyrics columns status:
         * 0: none, 1: left, 2: right, 3: both
         */
        var widthName;
        switch (lyricsColumnsStatus) {
            case 1:
                widthName = 'right';
                break;
            case 2:
                widthName = 'left';
                break;
            case 3:
                widthName = 'centre';
                break;
            default:
                widthName = 'full';
                break;
        }

        this.setState({
            topNavWidthName: widthName
        });
    },

    _handleWindowScroll: function() {
        var topNavIsStuck = window.pageYOffset > 384 / 2,
            lyricsColumnsAreStuck = window.pageYOffset > 384;

        this.setState({
            topNavIsStuck: topNavIsStuck,
            lyricsColumnsAreStuck: lyricsColumnsAreStuck
        });
    }
});
