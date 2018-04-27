import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import DotSequence from '../Dot/DotSequence'

import { getPrefixPrependedClassNames } from '../../helpers/domHelper'

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

    const styleWithDot = sequenceDotKeys || isWikiAnchor

    return (
        <a className={cx(
                'Anchor',

                isAccessed && !isSelected && 'Anchor__accessed',
                isSelected ? 'Anchor__selected' : 'Anchor__selectable',

                isWikiAnchor && 'styleIf__reference',

                sequenceDotKeys &&
                    getPrefixPrependedClassNames(
                        sequenceDotKeys, 'styleIf'
                    ),

                !isSelected && !styleWithDot &&
                    'styleIf__always',

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
        </a>
    )
}

Anchor.propTypes = anchorPropTypes

export default Anchor
