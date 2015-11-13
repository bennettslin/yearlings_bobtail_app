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

var symbolDetails = [
        {
            icon: 'symbol 1',
            text: 'explanation of symbol 1'
        },
        {
            icon: 'symbol 2',
            text: 'explanation of symbol 2'
        },
        {
            icon: 'symbol 3',
            text: 'explanation of symbol 3'
        },
    ];
var AnnotationLegend = React.createClass({
    getDefaultProps: function() {
        return {
            isShown: true,
            isInScrolling: true
        };
    },

    getInitialState: function() {
        return {
            isHoverShown: symbolDetails.map(function(symbol) {
                return false;
            })
        };
    },

    render: function() {

        // FIXME: Eventually icon image will replace placeholder.
        return (
            <li className={'annotation-legend' + (this.props.isShown ? '' : ' unshown')}>
                {symbolDetails.map(function(symbol, index) {
                    return (
                        <ul className={'symbol-' + index} key={'symbol-' + index}>
                            <li className="icon"
                                onMouseEnter={this.props.isInScrolling ? null : this._handleIconHover.bind(null, index, true)}
                                onMouseLeave={this.props.isInScrolling ? null : this._handleIconHover.bind(null, index, false)}
                            >
                            </li>
                            <li className={'text' + (this.props.isInScrolling || this.state.isHoverShown[index] ? '' : ' unshown')}>
                                {symbol.text}
                            </li>
                        </ul>
                    );
                }.bind(this))}
            </li>
        );
    },

    _handleIconHover: function(index, indexIsHoverShown) {
        var isHoverShown = this.state.isHoverShown;
        isHoverShown[index] = indexIsHoverShown;
        this.setState({
            isHoverShown: isHoverShown
        });
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
                    playedSongPageIndex={this.props.playedSongPageIndex}
                    playedSongIndex={this.props.playedSongIndex}
                    playedSongTitle={this.props.playedSongTitle}
                    playedSongNarrative={this.props.playedSongNarrative}
                    playedSongPersonal={this.props.playedSongPersonal}
                />
            );

        return (
            <div className="top-nav">
                <ul className={'scrolling-nav' + (this.props.isStuck ? ' unshown' : '')}>
                    <TitleBar />
                    <AnnotationLegend isStuck={false} />
                </ul>
                <ul className={'sticky-nav' + (this.props.isStuck ? ' stuck' : '')}>
                    <div className="wrapper-width" data-nav-width={this.props.widthName}>
                        <TitleBar
                            isShown={this.props.isStuck}
                            isInScrolling={false}
                        />
                        {audioPlayer}
                        <AnnotationLegend
                            isShown={this.props.isStuck}
                            isInScrolling={false}
                        />
                        {synopsisBar}
                    </div>
                </ul>
            </div>
        );
    }
});
