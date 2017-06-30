// Container to show multiple dot toggles in dots section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import DotToggleButton from './dot-toggle-button'
import { ALL_DOT_KEYS } from '../../constants/dots'

const DotToggleBlock = ({

    dotKeys,
    accessedDotIndex,

...other }) => {

    const firstHalfEnd = ALL_DOT_KEYS.length / 2,
        firstHalfArray = ALL_DOT_KEYS.slice(0, firstHalfEnd),
        secondHalfArray = ALL_DOT_KEYS.slice(firstHalfEnd)

    return (
        <span className="dots-block dots-toggle-block">
            <div className="dots-toggle-row">
                {firstHalfArray.map((dotKey, index) => (
                    <DotToggleButton {...other}
                        key={index}
                        dotIndex={index}
                        dotKey={dotKey}
                        isSelected={dotKeys[dotKey]}
                        accessHighlighted={accessedDotIndex === index}
                    />
                ))}
            </div>
            <div className="dots-toggle-row">
                {secondHalfArray.map((dotKey, index) => {
                    const secondHalfIndex = index + firstHalfEnd;
                    return (
                        <DotToggleButton {...other}
                            key={index}
                            dotIndex={secondHalfIndex}
                            dotKey={dotKey}
                            isSelected={dotKeys[dotKey]}
                            accessHighlighted={accessedDotIndex === secondHalfIndex}
                        />
                    )
                })}
            </div>
        </span>
    )
}

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
