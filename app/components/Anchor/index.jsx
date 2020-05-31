import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import DotSequence from '../DotSequence'
import AnchorDot from './AnchorDot'
import AnchorText from './AnchorText'
import { getPrefixedDotLetterClassNames, getDotKeysFromBitNumber } from '../../helpers/dot'
import { IS_USER_AGENT_DESKTOP } from '../../constants/device'
import './logic'
import './style'

const Anchor = ({
    className,
    href,
    isAnnotationTitle,
    isAccessed: isAccessedBeforeDesktop,
    isSelected,
    isDisabled,
    sequenceDotBit,
    stanzaDotBit,
    isWikiTextAnchor,
    text,
    textConfig,
    analyticsIdentifier,
    setLyricAnnotationElement,
    handleAnchorClick
}) => {
    const
        isDotAnchor = Number.isFinite(stanzaDotBit),
        isTextAnchor = Number.isFinite(sequenceDotBit),

        // If in mobile, only show dot sequence if annotation title.
        showDotSequence = isTextAnchor && (
            IS_USER_AGENT_DESKTOP || isAnnotationTitle
        ),

        /**
         * Don't show access if in mobile, even though access behaviour is
         * still technically possible.
         */
        isAccessed = isAccessedBeforeDesktop && IS_USER_AGENT_DESKTOP,

        onClick = e => {
            if (!isDisabled) {
                logEvent({
                    e,
                    componentName: 'Anchor',
                    analyticsIdentifier
                })

                handleAnchorClick(e)
            }
        }

    return (
        <a
            {...{
                ref: setLyricAnnotationElement,
                className: cx(
                    'Anchor',

                    isAccessed && !isSelected && 'Anchor__accessed',

                    !isSelected && 'Anchor__selectable',

                    !isWikiTextAnchor && 'Anchor__noWrap',

                    // "Child anchor reference letter."
                    isWikiTextAnchor && 'ChAr',

                    isTextAnchor &&
                        getPrefixedDotLetterClassNames(
                            getDotKeysFromBitNumber(sequenceDotBit),
                            // "Child anchor letter."
                            'ChA'
                        ),

                    /**
                     * If sequence dot keys are provided, or if it's a wiki
                     * anchor, anchor is not always visible.
                     */
                    !isTextAnchor &&
                    !isWikiTextAnchor &&
                        'Anchor__alwaysVisible',

                    className
                ),
                ...href && {
                    href,
                    target: '_blank'
                },
                onClick
            }}
        >
            {showDotSequence && (
                <DotSequence
                    inTextAnchor
                    {...{
                        isAccessed,
                        isSelected,
                        dotBit: sequenceDotBit
                    }}
                />
            )}

            {isDotAnchor && (
                <AnchorDot
                    {...{
                        isAccessed,
                        isSelected,
                        stanzaDotBit
                    }}
                />
            )}

            {Boolean(text) && (
                <AnchorText
                    {...{
                        isAccessed,
                        isSelected,
                        isWikiTextAnchor,
                        text,
                        textConfig
                    }}
                />
            )}
        </a>
    )
}

Anchor.propTypes = {
    className: PropTypes.string,
    href: PropTypes.string,
    isAnnotationTitle: PropTypes.bool,
    isAccessed: PropTypes.bool,
    isSelected: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isWikiTextAnchor: PropTypes.bool,
    sequenceDotBit: PropTypes.number,
    stanzaDotBit: PropTypes.number,
    text: PropTypes.any,
    textConfig: PropTypes.any,
    analyticsIdentifier: PropTypes.string,
    setLyricAnnotationElement: PropTypes.func,
    handleAnchorClick: PropTypes.func.isRequired
}

export default Anchor
