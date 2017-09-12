// General button component.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class Button extends Component {

    constructor(props) {
        super(props)

        this._handleClick = this._handleClick.bind(this)
    }

    static defaultProps = {
        isEnabled: true
    }

    static propTypes = {
        accessHighlighted: PropTypes.bool,
        accessKey: PropTypes.string,
        buttonClass: PropTypes.string,
        buttonName: PropTypes.string,
        iconClass: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object
        ]),
        iconText: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        isSmall: PropTypes.bool,
        isLarge: PropTypes.bool,
        isCustomShape: PropTypes.bool,
        isCustomSize: PropTypes.bool,
        isDeselected: PropTypes.bool,
        isEnabled: PropTypes.bool,
        isSelected: PropTypes.bool,
        isOverflowShown: PropTypes.bool,
        handleClick: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.func
        ]),
        extraChild: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.element
        ])
    }

    _handleClick(e) {
        this.props.handleClick(e)
    }

    render() {

        const { accessHighlighted, accessKey,
                buttonClass, buttonName,
                iconClass, iconText,
                isSmall, isLarge,
                isCustomShape, isCustomSize,
                isDeselected, isEnabled, isSelected,
                isOverflowShown,
                handleClick,
                extraChild } = this.props

        return (
            <a
                className={classnames(
                    'button',
                    buttonClass,
                    buttonName && `${buttonName}-button`,
                    { 'large': isLarge,
                      'small': isSmall,
                      'custom-shape': isCustomShape,
                      'custom-size': isCustomSize,
                      'enabled': isEnabled,
                      'selected': isSelected,
                      'access-highlighted': accessHighlighted,
                      'deselected': isDeselected,
                      'overflow-shown': isOverflowShown }
                )}
                onClick={handleClick && isEnabled ? this._handleClick : null}
                onTouchStart={handleClick && isEnabled ? this._handleClick : null}
            >
                <div className="icon-canvas-block">
                    <div className={classnames(
                        'icon-canvas',
                        iconClass
                    )}>
                        {iconText}
                    </div>
                </div>
                {accessKey &&
                    <div className="access-button-icon">
                        {accessKey}
                    </div>
                }
                {extraChild}
            </a>
        )
    }
}

export default Button
