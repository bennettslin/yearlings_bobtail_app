import React, { memo, forwardRef, useRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import getDidMountHoc from '../../hocs/DidMountHoc'
import StopPropagationDispatcher from '../../dispatchers/StopPropagation'
import ButtonAnimatable from './Animatable'
import ButtonCharacter from './Character'
import ButtonIcon from './Icon'
import ButtonTitle from './Title'
import Tooltip from './Tooltip'
import AccessLetter from '../Access/Letter'
import { ENTER } from '../../constants/access'
import { CHILD_ACCESS_PREFIX } from '../../constants/prefixes'
import {
    getIsTooltipEnabled,
    getTooltipText,
} from './helper'
import './style'

const Button = forwardRef(({
    didMount,
    buttonName,
    className,
    isPulsateAnimated,
    isCustomSize,
    isSmallSize,
    isLargeSize,
    isDisabled,
    isSelectedDisabled,
    isPopupButton,
    isPlaceholderCharacter,
    isAccessed,
    isBrightHover,
    buttonOption,
    handleButtonClick,
    // handleTooltipHide,
    hasCharacterShadowLight,
    buttonCharacter,
    hasTitleShadowLight,
    accessKey,
    buttonTitle,
    buttonIdentifier,
    children,

}, ref) => {
    const
        stopPropagation = useRef(),
        isAccessEnter = accessKey === ENTER,
        showIfAccessOn = !isDisabled && (

            // If its access key is not Enter, always show if access is on.
            !isAccessEnter ||

            // If it's Enter, show if it's the one accessed index.
            isAccessed
        ),

        isTooltipEnabled = getIsTooltipEnabled(buttonName) && !isDisabled

    const onClick = e => {
        if (!isDisabled) {
            stopPropagation.current(e)

            if (!isSelectedDisabled) {
                logEvent(
                    `Button`,
                    buttonName,
                    buttonIdentifier,
                )

                handleButtonClick(e)
            }
        }
    }

    return didMount && (
        <div
            {...{
                ref,
                className: cx(
                    'Button',
                    `Button__${buttonName}`,
                    isPopupButton && 'Button__popup',
                    isCustomSize && `Button__${buttonName}Size`,
                    isAccessEnter && showIfAccessOn && 'Button__accessed',
                    !isDisabled && !isSelectedDisabled && [
                        accessKey && `${CHILD_ACCESS_PREFIX}${accessKey}`,
                        'Button__enabled',
                    ],
                    {
                        Button__selectDisabled: isSelectedDisabled,
                        Button__defaultSize:
                            !isLargeSize && !isSmallSize && !isCustomSize,
                        Button__smallSize: isSmallSize,
                        Button__largeSize: isLargeSize,
                    },
                    isPulsateAnimated && 'pulsateAnimated',
                    isPlaceholderCharacter && 'Button__isPlaceholderCharacter',
                    className,
                ),
                ...isTooltipEnabled && {
                    'data-for': `${buttonName}${buttonIdentifier || ''}`,
                    'data-tip': getTooltipText({
                        buttonName,
                        buttonOption,
                    }),
                },
                onClick,
            }}
        >
            <ButtonTitle
                {...{
                    buttonName,
                    isSelected: isSelectedDisabled,
                    hasTitleShadowLight,
                    title: buttonTitle,
                }}
            />
            <ButtonAnimatable
                {...{
                    isAccessEnter,
                    showIfAccessOn,
                    isDisabled,
                    isSelectedDisabled,
                    isBrightHover,
                    buttonTitle,
                }}
            >
                <ButtonIcon
                    {...{
                        buttonName,
                        buttonOption,
                        isPlaceholderCharacter,
                    }}
                />
                <ButtonCharacter
                    {...{
                        buttonName,
                        isSelected: isSelectedDisabled,
                        hasCharacterShadowLight,
                        character: buttonCharacter,
                    }}
                />
                {children}
                {accessKey && !isDisabled && !isSelectedDisabled && (
                    <AccessLetter
                        inButtonOrDotAnchor
                        {...{
                            showIfAccessOn,
                            accessKey,
                        }}
                    />
                )}
            </ButtonAnimatable>
            {isTooltipEnabled && (
                <Tooltip
                    {...{
                        buttonName,
                        buttonIdentifier,
                        // handleTooltipHide,
                    }}
                />
            )}
            <StopPropagationDispatcher {...{ ref: stopPropagation }} />
        </div>
    )
})

Button.propTypes = {
    didMount: PropTypes.bool.isRequired,
    buttonName: PropTypes.string.isRequired,
    className: PropTypes.string,
    isPulsateAnimated: PropTypes.bool,
    isCustomSize: PropTypes.bool,
    isSmallSize: PropTypes.bool,
    isLargeSize: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isSelectedDisabled: PropTypes.bool,
    isPlaceholderCharacter: PropTypes.bool,
    isPopupButton: PropTypes.bool,
    isAccessed: PropTypes.bool,
    isBrightHover: PropTypes.bool,
    buttonOption: PropTypes.any,
    accessKey: PropTypes.string,
    hasCharacterShadowLight: PropTypes.bool,
    buttonCharacter: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    hasTitleShadowLight: PropTypes.bool,
    buttonTitle: PropTypes.any,
    buttonIdentifier: PropTypes.any,
    handleButtonClick: PropTypes.func.isRequired,
    // handleTooltipHide: PropTypes.func,
    children: PropTypes.any,
}

export default memo(getDidMountHoc(Button))
