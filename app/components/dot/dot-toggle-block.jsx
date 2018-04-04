// Container to show multiple dot toggles in dots section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import DotToggleButton from './dot-toggle-button'
import { ALL_DOT_KEYS } from '../../constants/dots'

const mapStateToProps = ({
    accessedDotIndex
}) => ({
    accessedDotIndex
})

const dotToggleBlockPropTypes = {
    // Through Redux.
    accessedDotIndex: PropTypes.number,

    // From parent.
    dotKeys: PropTypes.object.isRequired
},

DotToggleBlock = ({

    dotKeys,
    accessedDotIndex,

...other }) => {

    const firstHalfEnd = ALL_DOT_KEYS.length / 2,
        firstHalfArray = ALL_DOT_KEYS.slice(0, firstHalfEnd),
        secondHalfArray = ALL_DOT_KEYS.slice(firstHalfEnd)

    return (
        <span className={cx(
            'dots-block',
            'dots-toggle-block'
        )}>
            <div className="dots-toggle-row">
                {firstHalfArray.map((dotKey, firstHalfIndex) => {

                    const accessHighlighted = accessedDotIndex === firstHalfIndex

                    return (
                        <DotToggleButton {...other}
                            key={firstHalfIndex}
                            dotIndex={firstHalfIndex}
                            dotKey={dotKey}
                            isSelected={dotKeys[dotKey]}
                            accessHighlighted={accessHighlighted}
                        />
                    )
                })}
            </div>
            <div className="dots-toggle-row">
                {secondHalfArray.map((dotKey, index) => {

                    const secondHalfIndex = index + firstHalfEnd,
                        accessHighlighted = accessedDotIndex === secondHalfIndex

                    return (
                        <DotToggleButton {...other}
                            key={index}
                            dotIndex={secondHalfIndex}
                            dotKey={dotKey}
                            isSelected={dotKeys[dotKey]}
                            accessHighlighted={accessHighlighted}
                        />
                    )
                })}
            </div>
        </span>
    )
}

DotToggleBlock.propTypes = dotToggleBlockPropTypes

export default connect(mapStateToProps)(DotToggleBlock)
