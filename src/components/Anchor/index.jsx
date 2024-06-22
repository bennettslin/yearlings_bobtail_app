import React, { forwardRef, memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import getDidMountHoc from '../../hocs/DidMountHoc'
import AnchorDot from './AnchorDot'
import AnchorText from './AnchorText'
import DotSequence from '../DotSequence'
import { IS_USER_AGENT_DESKTOP } from '../../constants/device'
import './style'

const Anchor = forwardRef(({
    didMount,
    className,
    internalLink,
    externalLink,
    canBePlainText,
    showDotSequence,
    isAccessed: isAccessedBeforeDesktop,
    isSelected,
    hasSelectedDot,
    dotsBit,
    isWikiAnchor,
    text,
    textConfig,
    analyticsLabel,
    handleAnchorClick = () => {},
    handleAnchorMouse = () => {},

}, ref) => {
    const
        // Anchor is shown if no dotsBit is passed, or there is a selected dot.
        isShown = !Number.isFinite(dotsBit) || hasSelectedDot,

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

    const Tag = 'a'

    return (
        <Tag
            {...{
                ref,
                ...didMount && {
                    className: cx(
                        'Anchor',
                        isShown && 'Anchor__shown',
                        !isSelected && [
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
                <DotSequence
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
            ) : (
                <AnchorDot
                    {...{
                        isAccessed,
                        isSelected,
                        dotsBit,
                    }}
                />
            )}
        </Tag>
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
    text: PropTypes.any,
    textConfig: PropTypes.any,
    analyticsLabel: PropTypes.string,
    handleAnchorClick: PropTypes.func,
    handleAnchorMouse: PropTypes.func,
}

export default memo(getDidMountHoc(Anchor))
