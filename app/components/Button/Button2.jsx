// General button component.
/* eslint-disable */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Icon2 from '../Icon/Icon2'

class Button2 extends Component {

    static propTypes = {
        isDisabled: PropTypes.bool,
        backgroundKey: PropTypes.string,
        foregroundKey: PropTypes.string,
        accessKey: PropTypes.string,
        handleClick: PropTypes.func.isRequired
    }

    _handleClick(e) {
        const { isDisabled } = this.props

        if (!isDisabled) {
            this.props.handleClick(e)
        }
    }

    render() {

        const { backgroundKey,
                foregroundKey,
                accessKey } = this.props

        return (
            <div
                className={cx(
                    'Button2'
                )}
                onClick={this._handleClick}
                onTouchStart={this._handleClick}
            >
            {backgroundKey && (
                <Icon2 />
            )}

            {foregroundKey && (
                <Icon2 />
            )}

            {accessKey && (
                <Icon2 />
            )}

            </div>
        )
    }
}

export default Button2
