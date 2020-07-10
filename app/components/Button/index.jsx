import React, { memo, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import StopPropagationDispatcher from '../../dispatchers/StopPropagation'
import ButtonIcon from './ButtonIcon'
import Tooltip from './Tooltip'
import AccessLetter from '../Access/Letter'
import { ENTER } from '../../constants/access'
import { CHILD_ACCESS_PREFIX } from '../../constants/prefixes'
import {
    getShowButtonIcon,
    getShowTooltip,
    getTooltipText
} from './helper'
import './style'

const Button = ({
    buttonName,
    className,
    isPulsateAnimated,
    isCustomSize,
    isSmallSize,
    isLargeSize,
    isDisabled,
    isClickDisabled,
    isPopupButton,
    isAccessed,
    isBrightHover,
    buttonIdentifier,
    accessKey,
    handleButtonClick,
    inanimateChild,
    children

}) => {
    const
        stopPropagation = useRef(),

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

        showTooltip = getShowTooltip(buttonName) && !isDisabled,

        [didMount, setDidMount] = useState(false)

    const onClick = e => {
        if (!isDisabled) {
            stopPropagation.current(e)

            if (!isClickDisabled) {
                logEvent({
                    e,
                    componentName: `Button`,
                    analyticsIdentifier: buttonName
                })

                handleButtonClick(e)
            }
        }
    }

    useEffect(() => {
        setDidMount(true)
    }, [])

    return didMount && (
        <div
            {...{
                className: cx(
                    'Button',
                    `Button__${buttonName}`,
                    isPopupButton && 'Button__popup',
                    isCustomSize && `Button__${buttonName}Size`,

                    isAccessEnter && showIfAccessOn && 'Button__accessed',

                    `${CHILD_ACCESS_PREFIX}${accessKey}`,

                    {
                        'Button__enabled': !isDisabled && !isClickDisabled,
                        'Button__clickDisabled': isClickDisabled,
                        'Button__defaultSize': isDefaultSize,
                        'Button__smallSize': isSmallSize,
                        'Button__largeSize': isLargeSize
                    },
                    isPulsateAnimated && 'pulsateAnimated',
                    className
                ),
                ...showTooltip && {
                    'data-for': buttonName,
                    'data-tip': getTooltipText({ buttonName, buttonIdentifier })
                },
                onClick
            }}
        >
            {inanimateChild}
            <div className={cx(
                'ButtonAnimatable',

                'dropShadow',

                !isDisabled && (
                    isBrightHover ?
                        'dropShadow__brightHover' :
                        'dropShadow__lightHover'
                ),

                isAccessEnter && showIfAccessOn && 'dropShadow__accessed',
                isPopupButton && 'ButtonAnimatable__popup',
                'abF'
            )}>
                {getShowButtonIcon(buttonName) && (
                    <ButtonIcon
                        {...{
                            buttonName,
                            buttonIdentifier
                        }}
                    />
                )}

                {children}

                {accessKey && !isDisabled && !isClickDisabled && (
                    <AccessLetter
                        inButtonOrDotAnchor
                        {...{
                            showIfAccessOn,
                            accessKey
                        }}
                    />
                )}
            </div>
            {showTooltip && (
                <Tooltip {...{ buttonName }} />
            )}
            <StopPropagationDispatcher {...{ ref: stopPropagation }} />
        </div>
    )
}

Button.propTypes = {
    buttonName: PropTypes.string.isRequired,
    className: PropTypes.string,
    isPulsateAnimated: PropTypes.bool,
    isCustomSize: PropTypes.bool,
    isSmallSize: PropTypes.bool,
    isLargeSize: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isClickDisabled: PropTypes.bool, // Passed by nav button.
    isPopupButton: PropTypes.bool,
    isAccessed: PropTypes.bool,
    isBrightHover: PropTypes.bool,
    buttonIdentifier: PropTypes.any,
    accessKey: PropTypes.string,
    handleButtonClick: PropTypes.func.isRequired,
    inanimateChild: PropTypes.any,
    children: PropTypes.any
}

export default memo(Button)
