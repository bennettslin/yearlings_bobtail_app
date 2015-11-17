var speechBubbleNames = ['narrative', 'personal'];
var SynopsisBar = React.createClass({
    mixins: [PopupMixin],

    getDefaultProps: function() {
        return {
            isShown: true
        };
    },

    getInitialState: function() {
        var state = {
            shownPopupIndex: 0
        };

        this._addToStateForPopup(state);
        return state;
    },

    componentWillReceiveProps: function(newProps) {
        // call if nav bar is getting stuck
        if (this.props.isShown && !newProps.isShown) {
            this.resetUserInteractionWithPopups();
            this.enableHoverability(true);
        }
    },

    render: function() {
        var speechBubbles = (
                <ul className="speech-bubbles">
                    {speechBubbleNames.map(function(bubbleName, index) {
                        return this._getPopup('bubble', index, this.props.playedSongSpeechBubble[speechBubbleNames[index]], bubbleName);
                    }.bind(this))}
                </ul>
            ),
            className = 'synopsis-bar' + (this.props.isShown ? '' : ' unshown');

        return (
            <li className={className}>
                <div className="avatar">
                </div>
                {speechBubbles}
            </li>
        );
    },

    updateShownPopupIndex: function(index) {
        this.setState({
            shownPopupIndex: index
        });
    }
});