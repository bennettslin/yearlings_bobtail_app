import React, { forwardRef, memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import getDidMountHoc from '../../hocs/DidMountHoc'
import DotSequence from '../DotSequence'
import AnchorDot from './AnchorDot'
import AnchorText from './AnchorText'
import { getMapHasSelectedDot } from '../../redux/dots/selector'
import { IS_USER_AGENT_DESKTOP } from '../../constants/device'
import './style'

const Anchor = forwardRef(({
    didMount,
    className,
    href,
    promoKey,
    neverDeselects,
    isAnnotationTitle,
    isAccessed: isAccessedBeforeDesktop,
    isSelected,
    dotsBit,
    isLyric,
    isWikiTextAnchor,
    text,
    textConfig,
    analyticsLabel,
    handleAnchorClick = () => {},
    handleAnchorMouse = () => {},

}, ref) => {
    const
        hasSelectedDot = useSelector(getMapHasSelectedDot(dotsBit)),
        isTextAnchor = Boolean(text),

        // Anchor is shown if no dotsBit is passed, or there is a selected dot.
        isShown = !Number.isFinite(dotsBit) || hasSelectedDot,

        showDotSequence =
            isTextAnchor &&
            !isWikiTextAnchor &&
            Number.isFinite(dotsBit) &&
            (
                // If in mobile, only show dot sequence if annotation title.
                IS_USER_AGENT_DESKTOP || isAnnotationTitle
            ),

        /**
         * Don't show access if in mobile, even though access behaviour is
         * still technically possible.
         */
        isAccessed = isAccessedBeforeDesktop && IS_USER_AGENT_DESKTOP

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
                        isShown && 'Anchor__shown',
                        promoKey && 'Anchor__alwaysPointer',
                        isAccessed && !isSelected && 'Anchor__accessed',
                        !isSelected && [
                            'Anchor__selectable',
                            isLyric && 'Anchor__selectableLyric',
                            !isLyric && 'Anchor__selectableNotLyric',
                        ],
                        !isWikiTextAnchor && 'Anchor__noWrap',
                        className,
                    ),
                },
                ...href && {
                    href,
                    target: '_blank',
                },
                onClick,
                onMouseEnter,
                onMouseLeave,
            }}
        >
            {showDotSequence && (
                <DotSequence
                    inTextAnchor
                    {...{
                        isAccessed,
                        isSelected,
                        dotsBit,
                    }}
                />
            )}
            {isTextAnchor ? (
                <AnchorText
                    {...{
                        isAccessed,
                        isSelected,
                        isWikiTextAnchor,
                        neverDeselects:
                            neverDeselects || Boolean(href || promoKey),
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
        </a>
    )
})

Anchor.propTypes = {
    didMount: PropTypes.bool.isRequired,
    className: PropTypes.string,
    href: PropTypes.string,
    promoKey: PropTypes.string,
    neverDeselects: PropTypes.bool,
    isAnnotationTitle: PropTypes.bool,
    isAccessed: PropTypes.bool,
    isSelected: PropTypes.bool,
    isLyric: PropTypes.bool,
    isWikiTextAnchor: PropTypes.bool,
    dotsBit: PropTypes.number,
    text: PropTypes.any,
    textConfig: PropTypes.any,
    analyticsLabel: PropTypes.string,
    handleAnchorClick: PropTypes.func,
    handleAnchorMouse: PropTypes.func,
}

export default memo(getDidMountHoc(Anchor))
