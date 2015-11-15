var speechBubbleNames = ['narrative', 'personal'];
var SynopsisBar = React.createClass({
    mixins: [PopupMixin],

    getInitialState: function() {
        var state = {
            shownPopupIndex: 0
        };

        this._addToStateForPopup(state);
        return state;
    },

    componentWillReceiveProps: function(newProps) {
        // call if nav bar is getting stuck
        if (this.props.popupsAlwaysShown !== 'none' && newProps.popupsAlwaysShown === 'none') {
            this.resetUserInteractionWithPopups();
        }
    },

    render: function() {
        var speechBubbles = (
                <ul className="speech-bubbles">
                    {speechBubbleNames.map(function(bubbleName, index) {
                        return this._getPopup('bubble', index, this.props.playedSongSpeechBubble[speechBubbleNames[index]], speechBubbleNames);
                    }.bind(this))}
                </ul>
            );

        return (
            <li className="synopsis-bar">
                {speechBubbles}
                <div className="avatar">
                </div>
            </li>
        );
    }
});