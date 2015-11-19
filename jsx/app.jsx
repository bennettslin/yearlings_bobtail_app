// FIXME: Uncomment or delete.

// var isNode = (typeof module !== 'undefined') && module.exports,
//     React = isNode ? require('react') : window.React,
//     ReactDOM = isNode ? require('react') : window.ReactDOM;

var leftLyricsColumn,
    rightLyricsColumn;

var App = React.createClass({
    getDefaultProps: function() {
        return {
            windowWidth: 320,
            windowHeight: 480
        };
    },

    getInitialState: function() {
        return {
            windowWidth: this.props.windowWidth,
            windowHeight: this.props.windowHeight,
            device: this._getDeviceFromWidth(this.props.windowWidth),
            viewedPageIndex: 0,
            playedSongIndex: -1,
            topNavWidthName: 'full',
            topNavIsStuck: false,
            lyricsColumnsAreStuck: false
        };
    },

    componentDidMount: function() {
        if (window) {
            window.addEventListener('scroll', this._handleWindowScroll);
            window.addEventListener('resize', this._handleWindowResize);
        }
    },

    componentWillUnmount: function() {
        if (window) {
            window.removeEventListener('scroll', this._handleWindowScroll);
            window.removeEventListener('resize', this._handleWindowResize);
        }
    },

    render: function() {
        var playedSongIndex = this.state.playedSongIndex,
            playedSongTitle = this.state.playedSongIndex >= 0 ? this.props.songs[this.state.playedSongIndex].title : null,
            playedSongSpeechBubbles = this.state.playedSongIndex >= 0 ? this.props.songs[this.state.playedSongIndex].speechBubbles : this.props.speechBubbles,
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
                    legendSymbols={this.props.legendSymbols}
                    playedSongIndex={playedSongIndex}
                    playedSongTitle={playedSongTitle}
                    playedSongSpeechBubbles={playedSongSpeechBubbles}
                    playedSongPageIndex={playedSongPageIndex}
                    songsLength={this.props.songs.length}
                    device={this.state.device}
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

    _getDeviceFromWidth: function(width) {
        // TODO: make sure that these values are consistent with stylesheet
        if (width <= 420) {
            return 'mobile';
        } else if (width <= 1200) {
            return 'tablet';
        } else {
            return 'desktop';
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
        // TODO: make sure that these values are consistent with stylesheet
        var stuckTopNavHeight,
            stuckLyricsColumnsHeight = window.pageYOffset > 384,
            topNavIsStuck,
            lyricsColumnsAreStuck;

        if (this.state.device === 'mobile') {
            // @mobile-scrolling-nav-height
            stuckTopNavHeight = 192 + 192 + 192;

            // @mobile-top-nav-height:
            stuckLyricsColumnsHeight = 192 + 192 + 192 + 192;
        } else {
            stuckTopNavHeight = 384 / 2;
            stuckLyricsColumnsHeight = 384;
        }

        topNavIsStuck = window.pageYOffset > stuckTopNavHeight,
        lyricsColumnsAreStuck = window.pageYOffset > stuckLyricsColumnsHeight;

        this.setState({
            topNavIsStuck: topNavIsStuck,
            lyricsColumnsAreStuck: lyricsColumnsAreStuck
        });
    },

    _handleWindowResize: function(e) {
        this.setState({
            windowWidth: window.innerWidth,
            device: this._getDeviceFromWidth(window.innerWidth)
        });
    }
});
