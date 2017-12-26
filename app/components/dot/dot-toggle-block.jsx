// Container to show multiple dot toggles in dots section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import DotToggleButton from './dot-toggle-button'
import { getDotDirectionToAccessHighlight } from '../../helpers/access-helper'
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
        <span className="dots-block dots-toggle-block">
            <div className="dots-toggle-row">
                {firstHalfArray.map((dotKey, firstHalfIndex) => {

                    const firstHalfDirectionKey =
                        getDotDirectionToAccessHighlight({
                            dotIndex: firstHalfIndex,
                            accessedDotIndex
                        }),
                        accessHighlighted = accessedDotIndex === firstHalfIndex

                    return (
                        <DotToggleButton {...other}
                            key={firstHalfIndex}
                            directionKey={firstHalfDirectionKey}
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
                        secondHalfDirectionKey =
                            getDotDirectionToAccessHighlight({
                            dotIndex: secondHalfIndex,
                            accessedDotIndex
                        }),
                        accessHighlighted = accessedDotIndex === secondHalfIndex

                    return (
                        <DotToggleButton {...other}
                            key={index}
                            directionKey={secondHalfDirectionKey}
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
