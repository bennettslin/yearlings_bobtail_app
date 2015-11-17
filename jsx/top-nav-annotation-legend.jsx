// FIXME: Get this from config object
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
    mixins: [PopupMixin],

    getDefaultProps: function() {
        return {
            isShown: true
        };
    },

    getInitialState: function() {
        var state = {
            shownPopupIndex: -1
        };

        this._addToStateForPopup(state);
        return state;
    },

    componentWillReceiveProps: function(newProps) {
        // call if nav bar is getting unstuck
        if (this.props.isShown && !newProps.isShown) {
            this.resetUserInteractionWithPopups();
            this.enableHoverability(true);
        }
    },

    render: function() {
        var symbolsClassName = 'symbols' +
            (this.props.orientation ? ' ' + this.props.orientation : ''),
            symbols = (
                <ul className={symbolsClassName}>
                    {symbolDetails.map(function(symbol, index) {
                        var content = (
                                <ul>
                                    <li className="icon"></li>
                                    <li className="text">{symbol.text}</li>
                                </ul>
                            );

                        return this._getPopup('symbol', index, content);
                    }.bind(this))}
                </ul>
            ),
            className = 'annotation-legend' +
                (this.props.isShown ? '' : ' unshown') +
                (this.props.popupsAlwaysShown === 'all' ? '' : ' pointer');

        return (
            <li className={className}>
                {symbols}
            </li>
        );
    }
});