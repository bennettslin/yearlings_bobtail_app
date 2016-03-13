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
                    {this.props.legendSymbols.map(function(symbol, index) {
                        var content = (
                                <div className="symbol">
                                    <div className="icon"></div>
                                    <div className="description">{symbol.description}</div>
                                </div>
                            );

                        return this._getPopup('symbol', index, content);
                    }.bind(this))}
                </ul>
            ),
            className = 'nav-component annotation-legend' +
                (this.props.isStuck ? ' stuck' : '') +
                (this.props.isShown ? '' : ' unshown') +
                (this.props.popupsAlwaysShown === 'all' ? '' : ' pointer');

        return (
            <div className={className}>
                {symbols}
            </div>
        );
    }
});