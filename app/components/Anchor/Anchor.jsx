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
            isSelected ? 'Anchor__selected' : 'Anchor__selectable',
            { 'Anchor__highlighted': isAccessed }
        )}
        onClick={handleAnchorClick}
        onTouchStart={handleAnchorClick}
    >
        <span className={cx(
            'Anchor__underline',
            { 'Anchor__underline__underDot': isDotAnchor },
            isSelected ?
                'Anchor__underline__selected' :
                'Anchor__underline__selectable'
        )} />

        {children}
    </a>
)

Anchor.propTypes = anchorPropTypes

export default Anchor
