import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const anchorPropTypes = {
    // From parent.
    isAccessed: PropTypes.bool,
    isSelected: PropTypes.bool,
    isDotAnchor: PropTypes.bool,
    handleAnchorClick: PropTypes.func,

    // TODO: Pass DotSequence in this manner, if needed. If not, remove.
    children: PropTypes.element
},

Anchor = ({

    isAccessed,
    isSelected,
    isDotAnchor,
    handleAnchorClick,
    children

}) => (
    <a className={cx(
            'Anchor',
            isSelected ? 'Anchor__selected' : 'Anchor__selectable'
        )}
        onClick={handleAnchorClick}
        onTouchStart={handleAnchorClick}
    >
        <span className={cx(
            'AnchorUnderline',
            { 'AnchorUnderline__underDot': isDotAnchor },
            isAccessed && 'AnchorUnderline__accessed',
            isSelected ?
                'AnchorUnderline__selected' :
                'AnchorUnderline__selectable'
        )} />

        {children}
    </a>
)

Anchor.propTypes = anchorPropTypes

export default Anchor
