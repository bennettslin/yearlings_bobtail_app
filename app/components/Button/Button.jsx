// General button component.
/* eslint-disable object-shorthand */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Icon from '../Icon/icon'

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
        accessKeysShown: PropTypes.bool,
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

        const { accessHighlighted, accessKey, accessKeysShown,
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
                className={cx(
                    'Button',
                    buttonClass,
                    buttonName && `Button__${buttonName}`,
                    { 'large': isLarge,
                      'small': isSmall,
                      'custom-shape': isCustomShape,
                      'custom-size': isCustomSize,
                      'enabled': isEnabled,
                      'selected': isSelected,
                      'access-highlighted': accessHighlighted,
                      'accessKeysShown': accessKeysShown,
                      'deselected': isDeselected,
                      'overflowShown': isOverflowShown }
                )}
                onClick={handleClick && isEnabled ? this._handleClick : null}
                onTouchStart={handleClick && isEnabled ? this._handleClick : null}
            >

                <Icon
                    className={iconClass}
                    text={iconText}
                />

                {accessKey &&
                    <div className={cx(
                        'access-button-icon',
                        { 'isHidden': !isEnabled }
                    )}>
                        {accessKey}
                    </div>
                }
                {extraChild}
            </a>
        )
    }
}

export default Button
