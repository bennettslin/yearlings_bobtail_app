var NarrativeBar = React.createClass({
    render: function() {
        var content;
        if (this.props.playedSongNarrative) {
            content = (
                <div className={'narrative-' + this.props.playedSongIndex}>
                    <h1>Book {this.props.playedSongPageIndex + 1}</h1>
                    <h2>{this.props.playedSongIndex + 1 + ''}. {this.props.playedSongTitle}</h2>
                    <span>{this.props.playedSongNarrative}</span>
                </div>
            );
        } else {
            content = (
                <div className="album-title">
                    <h1>Bobtail Yearlings</h1>
                    <span>presents</span>
                    <h2>Yearlings Bobtail</h2>
                </div>
            );
        }

        return (
            <li className="narrative-bar">
                {content}
            </li>
        );
    }
});

var AnnotationLegend = React.createClass({
    render: function() {
        return (
            <li className="annotation-legend">
                Annotation Legend
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

var BennettAvatar = React.createClass({
    render: function() {
        return (
            <li className="bennett-avatar">
                {this.props.playedSongPersonal}
            </li>
        );
    }
});

var TopNav = React.createClass({
    render: function() {
        return (
            <ul className="top-nav">
                <NarrativeBar
                    playedSongPageIndex={this.props.playedSongPageIndex}
                    playedSongIndex={this.props.playedSongIndex}
                    playedSongTitle={this.props.playedSongTitle}
                    playedSongNarrative={this.props.playedSongNarrative}
                />
                <AnnotationLegend />
                <AudioPlayer
                    playedSongIndex={this.props.playedSongIndex}
                    playedSongTitle={this.props.playedSongTitle}
                    songsLength={this.props.songsLength}
                    _changeSong={this.props._changeSong}
                />
                <BennettAvatar
                    playedSongPersonal={this.props.playedSongPersonal}
                />
            </ul>
        );
    }
});
