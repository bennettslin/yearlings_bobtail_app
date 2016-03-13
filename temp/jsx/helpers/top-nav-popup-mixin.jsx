var PopupMixin = {

    resetUserInteractionWithPopups: function() {
        this.setState({
            clickedOn: false,
            hoveredOn: false,
            touched: false
        });
    },

    enableHoverability: function(hoverable) {
        this.setState({
            hoverable: this.props.popupsAlwaysShown === 'one' ? true : hoverable
        });
    },

    _addToStateForPopup: function(state) {
        state.clickedOn = false;
        state.hoverable = true;
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
        if (this.props.popupsAlwaysShown !== 'all') {
            if (this.state.clickedOn && this.state.shownPopupIndex !== index) {
                this.setState({
                    shownPopupIndex: index
                });

            } else {

                // Clicking synopsis bar in scrolling nav still allows hover.
                var newClickedOn = !this.state.clickedOn;

                if (this.props._enableHoverability) {
                    this.props._enableHoverability(!newClickedOn);
                }

                if (this.props._resetAllOtherPopups) {
                    this.props._resetAllOtherPopups();
                }

                this.setState({
                    clickedOn: newClickedOn,
                    shownPopupIndex: index
                });
            }

            if (this.props._updateShownPopupIndex) {
                this.props._updateShownPopupIndex(index);
            }
            this._handleTouch(false);
        }
    },

    _handlePopupHover: function(index) {
        if (this.props.popupsAlwaysShown !== 'all') {
            if (this.state.hoverable && !this.state.touched) {
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

    _getPopup: function(baseClassName, index, shownContentObject, unshownContentObject) {
        var isShown = this._showPopup(index),
            className = baseClassName + '-' + index +
                ' popup' + (isShown ? ' expanded' : '') +
                ((isShown && (this.props.popupsAlwaysShown !== 'none' || this.state.clickedOn)) ? ' engraved' : ''),
            shownContentMappedTextElement = TextFormatter.getFormattedSpan(shownContentObject),
            unshownContentMappedTextElement = TextFormatter.getFormattedSpan(unshownContentObject);
        return (
            <li
                className={className}
                key={baseClassName + '-' + index}
                onClick={this._handlePopupClick.bind(null, index)}
                onMouseEnter={this._handlePopupHover.bind(null, index)}
                onMouseLeave={this._handlePopupHover.bind(null, false)}
                onTouchStart={this._handleTouch.bind(null, true)}
            >
                {isShown || !unshownContentObject ? shownContentMappedTextElement : unshownContentMappedTextElement}
            </li>
        );
    }
};