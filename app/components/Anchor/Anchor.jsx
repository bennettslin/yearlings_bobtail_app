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

}) => (
    <a className={cx(
            'Anchor',
            isSelected ? 'Anchor__selected' : 'Anchor__selectable',

            isWikiAnchor && 'styleIf__sequenceDot__reference',
            sequenceDotKeys && getPrefixPrependedClassNames(
                sequenceDotKeys, 'styleIf__sequenceDot'
            ),
            sequenceDotKeys || isWikiAnchor ?
                'Anchor__styleOnlyWithSequenceDot' :
                'Anchor__styleAlways',

            className
        )}
        onClick={handleAnchorClick}
        onTouchStart={handleAnchorClick}
    >
        <span className={cx(
            'AnchorUnderline',
            { 'AnchorUnderline__underDot': isDotAnchor },

            isAccessed && !isSelected && 'AnchorUnderline__accessed',

            isSelected ?
                'AnchorUnderline__selected' :
                'AnchorUnderline__selectable',

            sequenceDotKeys || isWikiAnchor ?
                'AnchorUnderline__styleOnlyWithSequenceDot' :
                'AnchorUnderline__styleAlways'
        )} />

        {sequenceDotKeys && (
            <DotSequence
                inTextAnchor
                dotKeys={sequenceDotKeys}
            />
        )}

        {children}
    </a>
)

Anchor.propTypes = anchorPropTypes

export default Anchor
