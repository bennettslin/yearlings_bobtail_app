import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import DotSequence from '../Dot/Sequence/DotSequence'
import AnchorUnderline from './AnchorUnderline'
import AccessIcon from '../AccessIcon/AccessIcon'

import { getPrefixedDotLetterClassNames } from '../../helpers/dotHelper'

import {
    NAVIGATION_ENTER_KEY
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
                isSelected ? 'Anchor__selected' : 'Anchor__selectable',

                !isWikiTextAnchor && 'Anchor__noWrap',

                // "Child anchor reference letter."
                isWikiTextAnchor && 'ChAr',

                sequenceDotKeys &&
                    getPrefixedDotLetterClassNames(

                        // "Child anchor letter."
                        sequenceDotKeys, 'ChA'
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
                    dotKeys={sequenceDotKeys}
                />
            )}

            {children}

            {!omitAccessIcon && (
                <AccessIcon
                    inTextAnchor={!isDotAnchor}
                    inButtonOrDotAnchor={isDotAnchor}
                    showIfAccessed={isAccessed && !isSelected}
                    accessKey={NAVIGATION_ENTER_KEY}
                />
            )}
        </a>
    )
}

Anchor.propTypes = anchorPropTypes

export default Anchor
