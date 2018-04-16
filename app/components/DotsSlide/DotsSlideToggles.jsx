// Container to show multiple dot toggles in dots section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import DotsSlideToggle from './DotsSlideToggle'
import { ALL_DOT_KEYS } from '../../constants/dots'

const mapStateToProps = ({
    accessedDotIndex
}) => ({
    accessedDotIndex
})

const dotsSlideTogglesPropTypes = {
    // Through Redux.
    accessedDotIndex: PropTypes.number,

    // From parent.
    dotKeys: PropTypes.object.isRequired
},

DotsSlideToggles = ({

    dotKeys,
    accessedDotIndex,

...other }) => {

    const firstHalfEnd = ALL_DOT_KEYS.length / 2,
        firstHalfArray = ALL_DOT_KEYS.slice(0, firstHalfEnd),
        secondHalfArray = ALL_DOT_KEYS.slice(firstHalfEnd)

    return (
        <span className={cx(
            'dots-block',
            'DotsToggle-block'
        )}>
            <div className="DotsToggle-row">
                {firstHalfArray.map((dotKey, firstHalfIndex) => {

                    const accessHighlighted = accessedDotIndex === firstHalfIndex

                    return (
                        <DotsSlideToggle {...other}
                            key={firstHalfIndex}
                            dotIndex={firstHalfIndex}
                            dotKey={dotKey}
                            isSelected={dotKeys[dotKey]}
                            accessHighlighted={accessHighlighted}
                        />
                    )
                })}
            </div>
            <div className="DotsToggle-row">
                {secondHalfArray.map((dotKey, index) => {

                    const secondHalfIndex = index + firstHalfEnd,
                        accessHighlighted = accessedDotIndex === secondHalfIndex

                    return (
                        <DotsSlideToggle {...other}
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

DotsSlideToggles.propTypes = dotsSlideTogglesPropTypes

export default connect(mapStateToProps)(DotsSlideToggles)
