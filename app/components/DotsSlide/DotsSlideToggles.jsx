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
    dotKeys: PropTypes.object.isRequired,
    handleContainerClick: PropTypes.func.isRequired
},

DotsSlideToggles = ({

    accessedDotIndex,
    dotKeys,
    handleContainerClick,

...other }) => {

    const firstHalfEnd = ALL_DOT_KEYS.length / 2,
        firstHalfArray = ALL_DOT_KEYS.slice(0, firstHalfEnd),
        secondHalfArray = ALL_DOT_KEYS.slice(firstHalfEnd)

    return (
        <div
            className={cx(
                'DotsSlideToggles'
            )}
            onClick={handleContainerClick}
            onTouchStart={handleContainerClick}
        >
            <div
                key="first"
                className="DotsSlideToggles__row"
            >
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
            <div
                key="second"
                className="DotsSlideToggles__row"
            >
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
        </div>
    )
}

DotsSlideToggles.propTypes = dotsSlideTogglesPropTypes
export default connect(mapStateToProps)(DotsSlideToggles)
