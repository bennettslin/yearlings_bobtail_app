// Container to show multiple dot toggles in dots section.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import DotsSlideSelect from './Select'
import { ALL_DOT_KEYS } from 'constants/dots'

const mapStateToProps = ({
    accessedDotIndex,
    selectedAccessIndex
}) => ({
    accessedDotIndex,
    selectedAccessIndex
})

const dotsSlideSelectsPropTypes = {
    // Through Redux.
    selectedAccessIndex: PropTypes.number.isRequired,
    accessedDotIndex: PropTypes.number,

    // From parent.
    dotKeys: PropTypes.object.isRequired,
    handleContainerClick: PropTypes.func.isRequired
},

DotsSlideSelects = ({

    accessedDotIndex,
    selectedAccessIndex,

    dotKeys,
    handleContainerClick,

...other }) => {

    const firstHalfEnd = ALL_DOT_KEYS.length / 2,
        firstHalfArray = ALL_DOT_KEYS.slice(0, firstHalfEnd),
        secondHalfArray = ALL_DOT_KEYS.slice(firstHalfEnd)

    return (
        <div
            className={cx(
                'DotsSlideSelects'
            )}
            onClick={handleContainerClick}
            onTouchStart={handleContainerClick}
        >
            {/* TODO: Can this not be duplicated? */}
            <div
                className="DotsSlideSelects__row"
            >
                {firstHalfArray.map((dotKey, firstHalfIndex) => {
                    const
                        isAccessed =
                            Boolean(selectedAccessIndex) &&
                            accessedDotIndex === firstHalfIndex

                    return (
                        <DotsSlideSelect {...other}
                            key={firstHalfIndex}
                            dotIndex={firstHalfIndex}
                            dotKey={dotKey}
                            isSelected={dotKeys[dotKey]}
                            isAccessed={isAccessed}
                        />
                    )
                })}
            </div>
            <div
                className="DotsSlideSelects__row"
            >
                {secondHalfArray.map((dotKey, index) => {
                    const secondHalfIndex = index + firstHalfEnd,
                        isAccessed =
                            Boolean(selectedAccessIndex) &&
                            accessedDotIndex === secondHalfIndex

                    return (
                        <DotsSlideSelect {...other}
                            key={index}
                            dotIndex={secondHalfIndex}
                            dotKey={dotKey}
                            isSelected={dotKeys[dotKey]}
                            isAccessed={isAccessed}
                        />
                    )
                })}
            </div>
        </div>
    )
}

DotsSlideSelects.propTypes = dotsSlideSelectsPropTypes
export default connect(mapStateToProps)(DotsSlideSelects)
