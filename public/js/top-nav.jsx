var TitleBar = React.createClass({
    render: function() {

        return (
            <li className="title-bar">
                <h1>Bobtail Yearlings</h1>
                <span>presents</span>
                <h2>Yearlings Bobtail</h2>
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

var SynopsisBar = React.createClass({
    getInitialState: function() {
        return {
            showPersonal: false
        }
    },

    render: function() {
        var showStyle = {
                display: 'block'
            },
            hideStyle = {
                display: 'none'
            },
            narrative = (
                <div
                    className={'narrative-' + this.props.playedSongIndex}
                    style={this.state.showPersonal ? hideStyle : showStyle}
                >
                    <span>{this.props.playedSongNarrative}</span>
                </div>
            ),
            personal = (
                <div
                    className={'personal-' + this.props.playedSongIndex}
                    style={this.state.showPersonal ? showStyle : hideStyle}
                >
                    <span>{this.props.playedSongPersonal}</span>
                </div>
            ),
            speechBubble = (
                <button
                    className="speech-bubble"
                    onMouseEnter={this._handleSpeechBubbleHover.bind(null, true)}
                    onMouseLeave={this._handleSpeechBubbleHover.bind(null, false)}
                >
                    &hellip;
                </button>
            );


        return (
            <li className="synopsis-bar">
                <ul>
                    <li>
                        <h1>Book {this.props.playedSongPageIndex + 1}</h1>
                        <h2>{this.props.playedSongIndex + 1 + ''}. {this.props.playedSongTitle}</h2>
                        {narrative}
                        {personal}
                    </li>
                    <li>
                        {speechBubble}
                    </li>
                </ul>
            </li>
        );
    },

    _handleSpeechBubbleHover: function(hover) {
        this.setState({
            showPersonal: hover
        });
    }
});

var TopNav = React.createClass({
    render: function() {
        return (
            <div className="top-nav">
                <ul className="scrolling-nav">
                    <TitleBar />
                    <AnnotationLegend />
                </ul>
                <ul className="sticky-nav">
                    <div className="wrapper-width" data-nav-width={this.props.widthName}>
                        <AudioPlayer
                            playedSongIndex={this.props.playedSongIndex}
                            playedSongTitle={this.props.playedSongTitle}
                            songsLength={this.props.songsLength}
                            _changeSong={this.props._changeSong}
                        />
                        <SynopsisBar
                            playedSongPageIndex={this.props.playedSongPageIndex}
                            playedSongIndex={this.props.playedSongIndex}
                            playedSongTitle={this.props.playedSongTitle}
                            playedSongNarrative={this.props.playedSongNarrative}
                            playedSongPersonal={this.props.playedSongPersonal}
                        />
                    </div>
                </ul>
            </div>
        );
    }
});
