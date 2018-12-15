// General button component.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import StopPropagationDispatcher from '../../dispatchers/StopPropagationDispatcher'

import ButtonIcon from './ButtonIcon'
import AccessLetter from '../Access/Letter'

import { populateRefs } from 'helpers/ref'
import { getPropsAreShallowEqual } from 'helpers/general'

import { CHILD_ACCESS_PREFIX } from 'constants/prefixes'

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
        isIndexSelected: PropTypes.bool, // Passed by nav button.
        isDisabled: PropTypes.bool,
        isPopupButton: PropTypes.bool,
        buttonIdentifier: PropTypes.any,
        accessKey: PropTypes.string,
        showAccessIconIfAccessOn: PropTypes.bool.isRequired,
        handleButtonClick: PropTypes.func.isRequired,
        children: PropTypes.any
    }

    shouldComponentUpdate(nextProps) {
        return !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    _handleClick = (e) => {
        if (!this.props.isDisabled) {
            this.dispatchStopPropagation(e)
            this.props.handleButtonClick(e)
        }
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {

        const {
                buttonName,
                className,
                isIndexSelected,
                isCustomSize,
                isSmallSize,
                isLargeSize,
                isDisabled,
                isPopupButton,
                showAccessIconIfAccessOn,
                buttonIdentifier,
                accessKey,
                children
            } = this.props,

            isDefaultSize = !isLargeSize && !isSmallSize && !isCustomSize,
            showIfAccessed = showAccessIconIfAccessOn && !isDisabled

        return (
            <div
                {...{
                    className: cx(
                        'Button',
                        `Button__${buttonName}`,
                        isPopupButton && 'Button__popup',
                        isCustomSize && `Button__${buttonName}Size`,
                        showIfAccessed && `${CHILD_ACCESS_PREFIX}${accessKey}`,
                        {
                            'Button__indexSelected': isIndexSelected,
                            'Button__enabled': !isDisabled,
                            'Button__defaultSize': isDefaultSize,
                            'Button__smallSize': isSmallSize,
                            'Button__largeSize': isLargeSize
                        },
                        className
                    ),
                    onClick: this._handleClick,
                    onTouchStart: this._handleClick
                }}
            >
                <div className={cx(
                    'ButtonAnimatable',
                    isPopupButton && 'ButtonAnimatable__popup',
                    'absoluteFullContainer'
                )}>

                    <ButtonIcon
                        {...{
                            buttonName,
                            buttonIdentifier,
                            showAsDisabled: isDisabled
                        }}
                    />

                    {children}

                    {accessKey && (
                        <AccessLetter
                            inButtonOrDotAnchor
                            {...{
                                showIfAccessed,
                                accessKey
                            }}
                        />
                    )}
                </div>
                <StopPropagationDispatcher {...{ getRefs: this._getRefs }} />
            </div>
        )
    }
}

export default Button
