import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import DotSequence from '../Dot/Sequence/DotSequence'
import AnchorUnderline from './AnchorUnderline'
import AccessLetter from '../AccessLetter/AccessLetter'

import { getPrefixedDotLetterClassNames } from '../../helpers/dotHelper'

import {
    ENTER
} from '../../constants/access'

const anchorPropTypes = {
    // From parent.
    className: PropTypes.any,
    isAccessed: PropTypes.bool,
    isSelected: PropTypes.bool,
    isDotAnchor: PropTypes.bool,
    isWikiTextAnchor: PropTypes.bool,
    omitAccessIcon: PropTypes.bool,
    sequenceDotKeys: PropTypes.object,
    handleAnchorClick: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.element
    ])
},

Anchor = ({

    className,
    isAccessed,
    isSelected,
    isDotAnchor,
    isWikiTextAnchor,
    omitAccessIcon,
    sequenceDotKeys,

    handleAnchorClick,
    children

}) => {

    return (
        <a className={cx(
                'Anchor',

                isAccessed && !isSelected && 'Anchor__accessed',
                isAccessed && !isSelected && 'TransitionKey__Enter',

                !isSelected && 'Anchor__selectable',

                !isWikiTextAnchor && 'Anchor__noWrap',

                // "Child anchor reference letter."
                isWikiTextAnchor && 'ChAr',

                sequenceDotKeys &&
                    getPrefixedDotLetterClassNames(
                        sequenceDotKeys,
                        // "Child anchor letter."
                        'ChA'
                    ),

                /**
                 * If sequence dot keys are provided, or if it's a wiki anchor,
                 * anchor is not always visible.
                 */
                !sequenceDotKeys && !isWikiTextAnchor &&
                    'Anchor__alwaysVisible',

                className
            )}
            onClick={handleAnchorClick}
            onTouchStart={handleAnchorClick}
        >
            {!isWikiTextAnchor && (
                <AnchorUnderline
                    {...{
                        isAccessed,
                        isSelected,
                        isDotAnchor
                    }}
                />
            )}

            {sequenceDotKeys && (
                <DotSequence
                    inTextAnchor
                    {...{
                        isAccessed,
                        isSelected,
                        dotKeys: sequenceDotKeys
                    }}
                />
            )}

            {children}

            {!omitAccessIcon && (
                <AccessLetter
                    inTextAnchor={!isDotAnchor}
                    inButtonOrDotAnchor={isDotAnchor}
                    showIfAccessed={isAccessed && !isSelected}
                    accessKey={ENTER}
                />
            )}
        </a>
    )
}

Anchor.propTypes = anchorPropTypes

export default Anchor
