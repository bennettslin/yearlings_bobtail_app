// General button component.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import ReactTooltip from 'react-tooltip'

import StopPropagationDispatcher from '../../dispatchers/StopPropagation'

import ButtonIcon from './ButtonIcon'
import AccessLetter from '../Access/Letter'

import { populateRefs } from 'helpers/ref'
import { getPropsAreShallowEqual } from 'helpers/general'

import { ENTER } from 'constants/access'
import { CHILD_ACCESS_PREFIX } from 'constants/prefixes'

import {
    getShowButtonIcon,
    getShowTooltip,
    getTooltipPlacement,
    getTooltipText
} from './helper'

class Button extends Component {

    static defaultProps = {
        isAccessed: true
    }

    static propTypes = {
        buttonName: PropTypes.string.isRequired,
        className: PropTypes.string,
        isCustomSize: PropTypes.bool,
        isSmallSize: PropTypes.bool,
        isLargeSize: PropTypes.bool,
        isIndexSelected: PropTypes.bool, // Passed by nav button.
        isDisabled: PropTypes.bool,
        isPopupButton: PropTypes.bool,
        buttonIdentifier: PropTypes.any,
        accessKey: PropTypes.string,
        isAccessed: PropTypes.bool.isRequired,
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
        const { buttonName, isDisabled } = this.props
        logEvent(`Button ${buttonName}`, e)

        if (!isDisabled) {
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
                isAccessed,
                buttonIdentifier,
                accessKey,
                children
            } = this.props,

            isDefaultSize =
                !isLargeSize &&
                !isSmallSize &&
                !isCustomSize,

            isAccessEnter = accessKey === ENTER,

            showIfAccessOn = !isDisabled && (

                // If its access key is not Enter, always show if access is on.
                !isAccessEnter ||

                // If it's Enter, show if it's the one accessed index.
                isAccessed
            ),

            showTooltip = getShowTooltip(buttonName)

        return (
            <div
                {...{
                    className: cx(
                        'Button',
                        `Button__${buttonName}`,
                        isPopupButton && 'Button__popup',
                        isCustomSize && `Button__${buttonName}Size`,

                        isAccessEnter ? {
                            'Button__accessed': showIfAccessOn
                        } : `${CHILD_ACCESS_PREFIX}${accessKey}`,

                        {
                            'Button__indexSelected': isIndexSelected,
                            'Button__enabled': !isDisabled,
                            'Button__defaultSize': isDefaultSize,
                            'Button__smallSize': isSmallSize,
                            'Button__largeSize': isLargeSize
                        },
                        className
                    ),
                    ...showTooltip && {
                        'data-for': buttonName,
                        'data-tip': getTooltipText({ buttonName, buttonIdentifier })
                    },
                    onClick: this._handleClick
                }}
            >
                {showTooltip && (
                    <ReactTooltip
                        {...{
                            id: buttonName,
                            effect: 'solid',
                            delayShow: 750,
                            place: getTooltipPlacement(buttonName)
                        }}
                    />
                )}
                <div className={cx(
                    'ButtonAnimatable',
                    isPopupButton && 'ButtonAnimatable__popup',
                    'abF'
                )}>
                    {children}

                    {getShowButtonIcon(buttonName) && (
                        <ButtonIcon
                            {...{
                                buttonName,
                                buttonIdentifier,
                                showAsDisabled: isDisabled
                            }}
                        />
                    )}

                    {accessKey && (
                        <AccessLetter
                            inButtonOrDotAnchor
                            {...{
                                showIfAccessOn,
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
