var App = React.createClass({
    getInitialState: function() {
        return {
            viewedPageIndex: 0,
            playedSongIndex: -1
        }
    },

    render: function() {
        var viewedPageStartingIndex = this.props.pageStartingIndices[this.state.viewedPageIndex],
            pageSongs,
            playedSongIndex = this.state.playedSongIndex,
            playedSongTitle = this.state.playedSongIndex >= 0 ? this.props.songs[this.state.playedSongIndex].title : null,
            playedSongNarrative = this.state.playedSongIndex >= 0 ? this.props.songs[this.state.playedSongIndex].narrative : null,
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

        // select the songs to be shown on this page
        if (this.state.viewedPageIndex === this.props.pageStartingIndices.length - 1) {
            pageSongs = this.props.songs.slice(viewedPageStartingIndex);
        } else {
            var nextPageStartingIndex = this.props.pageStartingIndices[this.state.viewedPageIndex + 1];
            pageSongs = this.props.songs.slice(viewedPageStartingIndex, nextPageStartingIndex);
        }

        footer = (
            <div className="footer">
                &copy; Copyright 2015. Website designed and developed by Bennett Samuel Lin.
            </div>
        );

        return (
            <div className="app">
                <TopNav
                    playedSongIndex={playedSongIndex}
                    playedSongTitle={playedSongTitle}
                    playedSongNarrative={playedSongNarrative}
                    playedSongPersonal={playedSongPersonal}
                    playedSongPageIndex={playedSongPageIndex}
                    songsLength={this.props.songs.length}
                    _changeSong={this._changeSong}
                />
                <BookPage
                    key={this.state.viewedPageIndex}
                    songs={pageSongs}
                    viewedPageStartingIndex={viewedPageStartingIndex}
                    viewedPageIndex={this.state.viewedPageIndex}
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
            viewedPageIndex
        });
    },

    _changeSong: function(playedSongIndex) {
        if (playedSongIndex >= -1 && playedSongIndex < this.props.songs.length) {
            this.setState({
                playedSongIndex
            });
        }
    }
});
