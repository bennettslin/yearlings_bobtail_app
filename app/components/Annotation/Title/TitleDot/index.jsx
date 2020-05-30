import React, { memo } from 'react'
import PropTypes from 'prop-types'
import Anchor from '../../../Anchor'

const AnnotationTitleDot = ({
    isAccessed,
    isSelected,
    stanzaDotKeys,
    handleAnchorClick

}) => (
    <Anchor
        {...{
            isAccessed,
            isSelected,
            stanzaDotKeys,
            handleAnchorClick
        }}
    />
)

AnnotationTitleDot.propTypes = {
    isAccessed: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    stanzaDotKeys: PropTypes.object.isRequired,
    handleAnchorClick: PropTypes.func.isRequired
}

export default memo(AnnotationTitleDot)
