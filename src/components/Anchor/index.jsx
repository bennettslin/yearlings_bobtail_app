import React, { forwardRef, memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import getDidMountHoc from '../../hocs/DidMountHoc'
import AnchorDot from './AnchorDot'
import AnchorText from './AnchorText'
import DotSequenceParent from '../DotSequence/Parent'
import { IS_USER_AGENT_DESKTOP } from '../../constants/device'
import './style'

const Anchor = forwardRef(({
    didMount,
    className,
    isSelected,
    isAccessed: isAccessedBeforeDesktop,
    isWikiAnchor,
    canBePlainText,
    showDotSequence,
    hasSelectedDot,
    dotsBit,
    firstDotKey,
    text,
    textConfig,
    internalLink,
    externalLink,
    analyticsLabel,
    handleAnchorClick = () => {},
    handleAnchorMouse = () => {},

}, ref) => {
    const
        /**
         * Don't show access if in mobile, even though access behaviour is
         * still technically possible.
         */
        isAccessed = isAccessedBeforeDesktop && IS_USER_AGENT_DESKTOP,
        link = internalLink || externalLink

    const onClick = e => {
        if (isSelected) {
            return
        }

        logEvent(
            'Anchor',
            analyticsLabel,
        )

        handleAnchorClick(e)
    }

    const onMouseEnter = () => {
        handleAnchorMouse(true)
    }

    const onMouseLeave = () => {
        handleAnchorMouse(false)
    }

    return (
        <a
            {...{
                ref,
                ...didMount && {
                    className: cx(
                        'Anchor',
                        canBePlainText && !hasSelectedDot && 'Anchor__isPlainText',
                        isSelected ?
                            'Anchor__selected' :
                            [
                                'Anchor__animatable',
                                isAccessed && 'Anchor__accessed',
                            ],
                        !isWikiAnchor && 'Anchor__noWrap',
                        className,
                    ),
                },
                ...link && {
                    href: link,
                    target: '_blank',
                },
                onClick,
                onMouseEnter,
                onMouseLeave,
            }}
        >
            {showDotSequence && hasSelectedDot && (
                <DotSequenceParent
                    inTextAnchor
                    {...{
                        isAccessed,
                        isSelected,
                        dotsBit,
                    }}
                />
            )}
            {text ? (
                <AnchorText
                    {...{
                        isAccessed,
                        isSelected,
                        isWikiAnchor,
                        canBePlainText,
                        text,
                        textConfig,
                    }}
                />
            ) : hasSelectedDot && (
                <AnchorDot
                    {...{
                        isAccessed,
                        isSelected,
                        firstDotKey,
                    }}
                />
            )}
        </a>
    )
})

Anchor.propTypes = {
    didMount: PropTypes.bool.isRequired,
    className: PropTypes.string,
    internalLink: PropTypes.string,
    externalLink: PropTypes.string,
    canBePlainText: PropTypes.bool,
    hasSelectedDot: PropTypes.bool,
    showDotSequence: PropTypes.bool,
    isAccessed: PropTypes.bool,
    isSelected: PropTypes.bool,
    isWikiAnchor: PropTypes.bool,
    dotsBit: PropTypes.number,
    firstDotKey: PropTypes.string,
    text: PropTypes.any,
    textConfig: PropTypes.any,
    analyticsLabel: PropTypes.string,
    handleAnchorClick: PropTypes.func,
    handleAnchorMouse: PropTypes.func,
}

export default memo(getDidMountHoc(Anchor))
