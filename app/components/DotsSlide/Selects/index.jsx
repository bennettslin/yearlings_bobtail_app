// Container to show multiple dot toggles in dots section.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import DotsSlideSelect from './Select'

import { getDotKeysFromBitNumber } from 'helpers/dot'
import { ALL_DOT_KEYS } from 'constants/dots'

const mapStateToProps = ({
    accessStore: { accessedDotIndex },
    toggleStore: { isAccessOn },
    dotsStore: { dotsBitNumber }
}) => ({
    accessedDotIndex,
    isAccessOn,
    dotsBitNumber
})

class DotsSlideSelects extends PureComponent {

    static propTypes = {
    // Through Redux.
        isAccessOn: PropTypes.bool.isRequired,
        accessedDotIndex: PropTypes.number,
        dotsBitNumber: PropTypes.number.isRequired,

        // From parent.
        handleContainerClick: PropTypes.func.isRequired
    }

    render() {
        const {
                isAccessOn,
                accessedDotIndex,
                dotsBitNumber,
                handleContainerClick,
                ...other
            } = this.props,

            selectedDotKeys = getDotKeysFromBitNumber(dotsBitNumber),

            firstHalfEnd = ALL_DOT_KEYS.length / 2,
            firstHalfArray = ALL_DOT_KEYS.slice(0, firstHalfEnd),
            secondHalfArray = ALL_DOT_KEYS.slice(firstHalfEnd)

        return (
            <div
                {...{
                    className: cx(
                        'DotsSlideSelects'
                    ),
                    onClick: handleContainerClick,
                    onTouchStart: handleContainerClick
                }}
            >
                {/* TODO: Can this not be duplicated? */}
                <div
                    className="DotsSlideSelects__row"
                >
                    {firstHalfArray.map((dotKey, firstHalfIndex) => {
                        const
                            isAccessed =
                                isAccessOn &&
                                accessedDotIndex === firstHalfIndex

                        return (
                            <DotsSlideSelect {...other}
                                key={firstHalfIndex}
                                {...{
                                    dotIndex: firstHalfIndex,
                                    dotKey,
                                    isSelected: selectedDotKeys[dotKey],
                                    isAccessed
                                }}
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
                                isAccessOn &&
                                accessedDotIndex === secondHalfIndex

                        return (
                            <DotsSlideSelect {...other}
                                key={index}
                                {...{
                                    dotIndex: secondHalfIndex,
                                    dotKey,
                                    isSelected: selectedDotKeys[dotKey],
                                    isAccessed
                                }}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(DotsSlideSelects)
