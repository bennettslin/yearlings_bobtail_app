import React, { memo, useRef } from 'react'
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
    getShowTooltip,
    getTooltipText,
} from './helper'
import './style'

const Button = ({
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
    isAccessed,
    isBrightHover,
    buttonIdentifier,
    handleButtonClick,
    hasCharacterShadowLight,
    buttonCharacter,
    hasTitleShadowLight,
    accessKey,
    buttonTitle,
    children,

}) => {
    const
        stopPropagation = useRef(),
        isAccessEnter = accessKey === ENTER,
        showIfAccessOn = !isDisabled && (

            // If its access key is not Enter, always show if access is on.
            !isAccessEnter ||

            // If it's Enter, show if it's the one accessed index.
            isAccessed
        ),

        showTooltip = getShowTooltip(buttonName) && !isDisabled

    const onClick = e => {
        if (!isDisabled) {
            stopPropagation.current(e)

            if (!isSelectedDisabled) {
                logEvent(
                    `Button`,
                    buttonName,
                )

                handleButtonClick(e)
            }
        }
    }

    return didMount && (
        <div
            {...{
                className: cx(
                    'Button',
                    `Button__${buttonName}`,
                    isPopupButton && 'Button__popup',
                    isCustomSize && `Button__${buttonName}Size`,
                    isAccessEnter && showIfAccessOn && 'Button__accessed',
                    accessKey && `${CHILD_ACCESS_PREFIX}${accessKey}`,
                    {
                        'Button__enabled': !isDisabled && !isSelectedDisabled,
                        'Button__selectDisabled': isSelectedDisabled,
                        'Button__defaultSize':
                            !isLargeSize && !isSmallSize && !isCustomSize,
                        'Button__smallSize': isSmallSize,
                        'Button__largeSize': isLargeSize,
                    },
                    isPulsateAnimated && 'pulsateAnimated',
                    className,
                ),
                ...showTooltip && {
                    'data-for': buttonName,
                    'data-tip': getTooltipText({
                        buttonName,
                        buttonIdentifier,
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
                <ButtonIcon {...{ buttonName, buttonIdentifier }} />
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
            {showTooltip && (
                <Tooltip {...{ buttonName }} />
            )}
            <StopPropagationDispatcher {...{ ref: stopPropagation }} />
        </div>
    )
}

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
    isPopupButton: PropTypes.bool,
    isAccessed: PropTypes.bool,
    isBrightHover: PropTypes.bool,
    buttonIdentifier: PropTypes.any,
    accessKey: PropTypes.string,
    hasCharacterShadowLight: PropTypes.bool,
    buttonCharacter: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    hasTitleShadowLight: PropTypes.bool,
    buttonTitle: PropTypes.any,
    handleButtonClick: PropTypes.func.isRequired,
    children: PropTypes.any,
}

export default memo(getDidMountHoc(Button))
