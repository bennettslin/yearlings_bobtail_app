var TitleBar = React.createClass({
    getDefaultProps: function() {
        return {
            isShown: true,
            isInScrolling: true
        };
    },

    render: function() {
        var coverTitle;
        if (this.props.isInScrolling) {
            coverTitle = (
                <div className="cover-title">
                    <h1>Bobtail Yearlings</h1>
                    <span>presents</span>
                    <h2>Yearlings Bobtail</h2>
                </div>
            );
        }

        return (
            <li className={'title-bar' + (this.props.isShown ? '' : ' unshown')}>
                <div className="band-logo">
                    Band logo
                </div>
                {coverTitle}
            </li>
        );
    }
});

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

var TopNav = React.createClass({
    render: function() {
        var audioPlayer = (
                <AudioPlayer
                    playedSongIndex={this.props.playedSongIndex}
                    playedSongTitle={this.props.playedSongTitle}
                    songsLength={this.props.songsLength}
                    _changeSong={this.props._changeSong}
                />
            ),
            synopsisBar = (
                <SynopsisBar
                    ref="synopsis"
                    popupsAlwaysShown={this.props.isStuck ? 'none' : 'one'}
                    playedSongSpeechBubble={this.props.playedSongSpeechBubble}
                    _enableHoverability={this._enableHoverability.bind(null, 'synopsis')}
                    _resetAllOtherPopups={this._resetAllOtherPopups.bind(null, 'synopsis')}
                />
            );

        return (
            <div className="top-nav">
                <ul className={'scrolling-nav' + (this.props.isStuck ? ' unshown' : '')}>
                    <TitleBar />
                    <AnnotationLegend
                        isStuck={false}
                        popupsAlwaysShown={'all'}
                    />
                </ul>
                <ul className={'sticky-nav' + (this.props.isStuck ? ' stuck' : '')}>
                    <div className="wrapper-width" data-nav-width={this.props.widthName}>
                        <TitleBar
                            isShown={this.props.isStuck}
                            isInScrolling={false}
                        />
                        {audioPlayer}
                        <AnnotationLegend
                            ref="legend"
                            isShown={this.props.isStuck}
                            popupsAlwaysShown={'none'}
                            _enableHoverability={this._enableHoverability.bind(null, 'legend')}
                            _resetAllOtherPopups={this._resetAllOtherPopups.bind(null, 'legend')}
                        />
                        {synopsisBar}
                    </div>
                </ul>
            </div>
        );
    },

    _resetAllOtherPopups: function(ref) {
        Object.keys(this.refs).forEach(function(currentRef) {
            if (currentRef !== ref) {
                this.refs[currentRef].resetUserInteractionWithPopups();
            }
        }.bind(this));
    },

    _enableHoverability: function(ref, hoverable) {
        // If a popup is clicked on, then no other popup can be hoverable.

        Object.keys(this.refs).forEach(function(currentRef) {
            this.refs[currentRef].enableHoverability(hoverable);
        }.bind(this));
    }
});
