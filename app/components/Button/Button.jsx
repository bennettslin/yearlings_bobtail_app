// General button component.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

// TODO: Inherit from this class.
import ButtonIcon from '../Button/ButtonIcon'
import AccessIcon from '../AccessIcon/AccessIcon'

class Button extends Component {

    static defaultProps = {
        showAccessIconIfAccessOn: true
    }

    static propTypes = {
        buttonName: PropTypes.string.isRequired,
        className: PropTypes.any,
        isCustomSize: PropTypes.bool,
        isSmallSize: PropTypes.bool,
        isLargeSize: PropTypes.bool,

        // Passed by nav button.
        isIndexSelected: PropTypes.bool,

        isDisabled: PropTypes.bool,
        showAccessIconIfAccessOn: PropTypes.bool.isRequired,
        accessKey: PropTypes.string,
        temporaryText: PropTypes.any,
        handleButtonClick: PropTypes.func.isRequired,
        children: PropTypes.any
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
                className,
                isIndexSelected,
                isCustomSize,
                isSmallSize,
                isLargeSize,
                isDisabled,
                showAccessIconIfAccessOn,
                temporaryText,
                accessKey,
                children } = this.props,

            isDefaultSize = !isLargeSize && !isSmallSize && !isCustomSize,

            showIfAccessed = showAccessIconIfAccessOn && !isDisabled

        return (
            <div
                className={cx(
                    'Button',
                    `Button__${buttonName}`,

                    { 'Button__indexSelected': isIndexSelected,
                      'Button__enabled': !isDisabled,
                      'Button__defaultSize': isDefaultSize,
                      'Button__smallSize': isSmallSize,
                      'Button__largeSize': isLargeSize },

                    className
                )}
                onClick={this._handleClick}
                onTouchStart={this._handleClick}
            >

                <ButtonIcon
                    temporaryName={buttonName}
                    temporaryText={temporaryText}
                    showDisabled={isDisabled}
                />

                {children}

                {accessKey && (
                    <AccessIcon
                        inButton
                        showIfAccessed={showIfAccessed}
                        accessKey={accessKey}
                    />
                )}

            </div>
        )
    }
}

export default Button
