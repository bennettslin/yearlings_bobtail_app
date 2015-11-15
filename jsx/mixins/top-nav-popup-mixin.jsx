var PopupMixin = {

    resetUserInteractionWithPopups: function() {
        this.setState({
            clickedOn: false,
            hoveredOn: false,
            touched: false
        });
    },

    _addToStateForPopup: function(state) {
        state.clickedOn = false;
        state.hoveredOn = false;
        state.touched = false;
        return state;
    },

    _handleTouch: function(touched) {
        // prevent mouse events from being fired from click on mobile devices
        this.setState({
            touched: touched
        });
    },

    _handlePopupClick: function(index) {
        if (this.state.clickedOn && this.state.shownPopupIndex !== index) {
            this.setState({
                shownPopupIndex: index
            });
        } else {
            this.setState({
                clickedOn: !this.state.clickedOn,
                shownPopupIndex: index
            });

            if (this.props._resetAllOtherPopups) {
                this.props._resetAllOtherPopups();
            }
        }

        this._handleTouch(false);
    },

    _handlePopupHover: function(index) {
        if (!this.state.touched) {
            if (typeof index === 'number') {
                this.setState({
                    hoveredOn: true,
                    shownPopupIndex: index
                });

                if (this.props._resetAllOtherPopups) {
                    this.props._resetAllOtherPopups();
                }

            } else {
                this.setState({
                    hoveredOn: false
                });
            }
        }
    },

    _showPopup: function(index) {
        if (this.props.popupsAlwaysShown === 'all') {
            return true;
        } else if (this.state.clickedOn || this.state.hoveredOn || this.props.popupsAlwaysShown === 'one') {
            return this.state.shownPopupIndex === index;
        } else {
            return false;
        }
    },

    _getPopup: function(baseClassName, index, shownContent, unshownContent) {
        var isShown = this._showPopup(index),
            className = baseClassName + '-' + index + (isShown ? ' expanded' : '') +
                    ((isShown && (this.props.popupsAlwaysShown !== 'none' || this.state.clickedOn)) ? ' engraved' : '');
        return (
            <li
                className={className}
                key={baseClassName + '-' + index}
                onClick={this._handlePopupClick.bind(null, index)}
                onMouseEnter={this._handlePopupHover.bind(null, index)}
                onMouseLeave={this._handlePopupHover.bind(null, false)}
                onTouchStart={this._handleTouch.bind(null, true)}
            >
                {isShown || !unshownContent ? shownContent : unshownContent}
            </li>
        );
    }
};