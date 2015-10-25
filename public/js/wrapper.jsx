var App = React.createClass({
    getInitialState: function() {
        return {
            viewedPageIndex: 0,
            playedSongIndex: -1
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
                <Book
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
