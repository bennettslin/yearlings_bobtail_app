import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import DotSequence from '../Dot/DotSequence'
import AccessIcon from '../AccessIcon/AccessIcon'

import { getPrefixPrependedClassNames } from '../../helpers/domHelper'

import {
    NAVIGATION_ENTER_KEY
} from '../../constants/access'

const anchorPropTypes = {
    // From parent.
    className: PropTypes.any,
    isAccessed: PropTypes.bool,
    isSelected: PropTypes.bool,
    isDotAnchor: PropTypes.bool,
    isWikiAnchor: PropTypes.bool,
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
    isWikiAnchor,
    sequenceDotKeys,

    handleAnchorClick,
    children

}) => {

    /**
     * If sequence dot keys are provided, or if it's a wiki anchor, only apply
     * certain styling if at least one dot in the dot sequence is selected.
     */
    const styleWithDot = sequenceDotKeys || isWikiAnchor

    return (
        <a className={cx(
                'Anchor',

                isAccessed && !isSelected && 'Anchor__accessed',
                isSelected ? 'Anchor__selected' : 'Anchor__selectable',

                !isWikiAnchor && 'Anchor__noWrap',
                isWikiAnchor && 'styleIf__reference',

                sequenceDotKeys &&
                    getPrefixPrependedClassNames(
                        sequenceDotKeys, 'styleIf'
                    ),

                /**
                 * Always apply dot sequence styling for dot anchors, which
                 * are completely hidden if none of its dots are selected. This
                 * styling is taken care of by its parent, not the dot anchor
                 * itself.
                 */
                { 'styleIf__always':
                    (!styleWithDot) || isDotAnchor },

                className
            )}
            onClick={handleAnchorClick}
            onTouchStart={handleAnchorClick}
        >
            {!isWikiAnchor && (
                <span className={cx(
                    'AnchorUnderline',

                    { 'AnchorUnderline__underDot': isDotAnchor },

                    isAccessed && !isSelected && 'AnchorUnderline__accessed',

                    isSelected ?
                        'AnchorUnderline__selected' :
                        'AnchorUnderline__selectable'
                )} />
            )}

            {sequenceDotKeys && (
                <DotSequence
                    inTextAnchor
                    dotKeys={sequenceDotKeys}
                />
            )}

            {children}

            <AccessIcon
                inButtonOrDot
                showIfAccessed={isAccessed}
                accessKey={NAVIGATION_ENTER_KEY}
            />
        </a>
    )
}

Anchor.propTypes = anchorPropTypes

export default Anchor
