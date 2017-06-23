// Container to show multiple dot toggles in dots section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import DotToggleButton from './dot-toggle-button'
import { ALL_DOT_KEYS } from '../../constants/dots'

const DotToggleBlock = ({

    dotKeys,
    accessedDotIndex,

...other }) => (

    <span className="dots-block">
        {ALL_DOT_KEYS.map((dotKey, index) => (
            <DotToggleButton {...other}
                key={index}
                dotIndex={index}
                dotKey={dotKey}
                isSelected={dotKeys[dotKey]}
                accessHighlighted={accessedDotIndex === index}
            />
        ))}
    </span>
)

DotToggleBlock.propTypes = {
    // Through Redux.
    accessedDotIndex: PropTypes.number,

    // From parent.
    dotKeys: PropTypes.object.isRequired
}

export default connect(({
    accessedDotIndex
}) => ({
    accessedDotIndex
}))(DotToggleBlock)
