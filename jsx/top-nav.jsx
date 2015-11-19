var NowPlayingBar = React.createClass({
    render: function() {
        return (
            <div className="now-playing-bar">
                {this.props.playedSongIndex + 1 + ''}. {this.props.playedSongTitle}
            </div>
        );
    }
});

var TopNav = React.createClass({
    render: function() {
        var scrollingTitleBar = (
                <TitleBar
                    device={this.props.device}
                />
            ),
            stickyTitleBar = this.props.device !== 'mobile' ? (
                <TitleBar
                    device={this.props.device}
                    isShown={this.props.isStuck}
                    isInScrolling={false}
                />
            ) : null,

            nowPlayingBar = (
                <NowPlayingBar
                    playedSongIndex={this.props.playedSongIndex}
                    playedSongTitle={this.props.playedSongTitle}
                />
            ),

            audioPlayer = (
                <AudioPlayer
                    playedSongIndex={this.props.playedSongIndex}
                    songsLength={this.props.songsLength}
                    _changeSong={this.props._changeSong}
                />
            ),

            _getSynopsisBar = function(ref, isShown, popupsAlwaysShown) {
                return (
                    <SynopsisBar
                        ref={ref}
                        isShown={isShown}
                        popupsAlwaysShown={popupsAlwaysShown}
                        playedSongSpeechBubbles={this.props.playedSongSpeechBubbles}
                        _enableHoverability={this._enableHoverability.bind(null, ref)}
                        _resetAllOtherPopups={this._resetAllOtherPopups.bind(null, ref)}
                        _updateShownPopupIndex={this._updateShownPopupIndex}
                    />
                );
            }.bind(this),
            scrollingSynopsisBar = _getSynopsisBar('scrolling-synopsis', !this.props.isStuck, 'one'),
            stickySynopsisBar = _getSynopsisBar('sticky-synopsis', this.props.isStuck, 'none'),

            // TODO: Make this more DRY.
            scrollingAnnotationLegend = this.props.device === 'mobile' ? (
                <AnnotationLegend
                    ref="scrolling-legend"
                    isShown={!this.props.isStuck}
                    isStuck={this.props.isStuck}
                    popupsAlwaysShown={'all'}
                    legendSymbols={this.props.legendSymbols}
                />
            ) : null,
            stickyAnnotationLegend = (
                <AnnotationLegend
                    ref="sticky-legend"
                    orientation={this.props.isStuck ? 'right-align' : null}
                    isShown={this.props.device === 'mobile' ? this.props.isStuck : true}
                    isStuck={this.props.isStuck}
                    popupsAlwaysShown={this.props.isStuck ? 'none' : 'all'}
                    legendSymbols={this.props.legendSymbols}
                    _enableHoverability={this.props.isStuck ? this._enableHoverability.bind(null, 'sticky-legend') : null}
                    _resetAllOtherPopups={this.props.isStuck ? this._resetAllOtherPopups.bind(null, 'sticky-legend') : null}
                />
            );

        return (
            <div className="top-nav">
                <ul className={'scrolling-nav' + (this.props.isStuck ? ' unshown' : '')}>
                    {scrollingTitleBar}
                    {scrollingSynopsisBar}
                    {scrollingAnnotationLegend}
                </ul>
                <ul className={'sticky-nav' + (this.props.isStuck ? ' stuck' : '')}>
                    <div className="wrapper-width" data-nav-width={this.props.widthName}>
                        {nowPlayingBar}
                        {stickyTitleBar}
                        {stickySynopsisBar}
                        {audioPlayer}
                        {stickyAnnotationLegend}
                    </div>
                </ul>
            </div>
        );
    },

    _resetAllOtherPopups: function(ref) {
        Object.keys(this.refs).forEach(function(currentRef) {
            // Only reset other popups that are in sticky nav.
            if (currentRef !== ref && currentRef.indexOf('sticky') > -1) {
                this.refs[currentRef].resetUserInteractionWithPopups();
            }
        }.bind(this));
    },

    _enableHoverability: function(ref, hoverable) {
        // If a popup is clicked on, then no other popup can be hoverable.
        Object.keys(this.refs).forEach(function(currentRef) {
            this.refs[currentRef].enableHoverability(hoverable);
        }.bind(this));
    },

    _updateShownPopupIndex: function(index) {
        Object.keys(this.refs).forEach(function(currentRef) {
            /**
             * Update shown popup index of synopsis bars. For example,
             * if user selects personal speech bubble in sticky nav,
             * this change will also be reflected in scrolling nav.
             * As it is, this only gets called by clicks, not hovers.
             */
            if (currentRef.indexOf('synopsis') > -1) {
                this.refs[currentRef].updateShownPopupIndex(index);
            }
        }.bind(this));
    }
});
