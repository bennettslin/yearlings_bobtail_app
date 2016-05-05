
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
        var overviews = (
                <ul className="speech-bubbles">
                    {overviewNames.map(function(bubbleName, index) {
                        return this._getPopup('bubble', index, this.props.playedSongOverviews[overviewNames[index]], bubbleName);
                    }.bind(this))}
                </ul>
            ),
            className = 'nav-component synopsis-bar' + (this.props.isShown ? '' : ' unshown');

        return (
            <div className={className}>
                <div className="avatar">
                </div>
                {overviews}
            </div>
        );
    },

    updateShownPopupIndex: function(index) {
        this.setState({
            shownPopupIndex: index
        });
    }
});