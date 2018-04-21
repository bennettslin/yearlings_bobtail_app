// General button component.
/* eslint-disable */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

class Button2 extends Component {

    static defaultProps = {
        showAccessKeyIfAccessed: true
    }

    static propTypes = {
        buttonName: PropTypes.string.isRequired,
        isLargeSize: PropTypes.bool,
        isDisabled: PropTypes.bool,
        showAccessKeyIfAccessed: PropTypes.bool.isRequired,
        accessKey: PropTypes.string,
        children: PropTypes.any,
        handleButtonClick: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this._handleClick = this._handleClick.bind(this)
    }

    _handleClick(e) {
        const { isDisabled } = this.props

        if (!isDisabled) {
            this.props.handleButtonClick(e)
        }
    }

    render() {

        const { buttonName,
                isDisabled,
                isLargeSize,
                accessKey,
                children } = this.props,

            isDefaultSize = !isLargeSize

        return (
            <div
                className={cx(
                    'Button2',
                    `Button2__${buttonName}`,

                    { 'Button2__enabled': !isDisabled,
                      'Button2__defaultSize': isDefaultSize,
                      'Button2__largeSize': isLargeSize }
                )}
                onClick={this._handleClick}
                onTouchStart={this._handleClick}
            >

                {children}

                {accessKey && (
                    <div className={cx(
                        'AccessIcon',
                        { 'isHidden': isDisabled }
                    )}>
                        {accessKey}
                    </div>
                )}

            </div>
        )
    }
}

export default Button2
