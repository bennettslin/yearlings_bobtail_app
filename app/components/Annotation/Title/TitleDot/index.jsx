import React, { memo } from 'react'
import PropTypes from 'prop-types'
import Anchor from '../../../Anchor'

const AnnotationTitleDot = ({
    isAccessed,
    isSelected,
    stanzaDotBit,
    handleAnchorClick

}) => (
    <Anchor
        {...{
            isAccessed,
            isSelected,
            stanzaDotBit,
            handleAnchorClick
        }}
    />
)

AnnotationTitleDot.propTypes = {
    isAccessed: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    stanzaDotBit: PropTypes.number.isRequired,
    handleAnchorClick: PropTypes.func.isRequired
}

export default memo(AnnotationTitleDot)
