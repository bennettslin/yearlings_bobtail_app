import React, { memo } from 'react'
import PropTypes from 'prop-types'
import Anchor from '../../../Anchor'

const AnnotationTitleText = ({
    isAccessed,
    isSelected,
    text,
    sequenceDotKeys,
    handleAnchorClick

}) => (
    <Anchor
        isAnnotationTitle
        {...{
            isAccessed,
            isSelected,
            text,
            sequenceDotKeys,
            handleAnchorClick
        }}
    />
)

AnnotationTitleText.propTypes = {
    isAccessed: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    sequenceDotKeys: PropTypes.object.isRequired,
    handleAnchorClick: PropTypes.func.isRequired
}

export default memo(AnnotationTitleText)
