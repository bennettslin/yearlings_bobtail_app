// Container to show multiple dot toggles in dots section.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import DotsSlideSelect from './Select'

import { getDotKeysFromBitNumber } from 'helpers/dot'

import { DOT_KEYS_ARRAY_CONFIGS } from './constants'

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

            selectedDotKeys = getDotKeysFromBitNumber(dotsBitNumber)

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
                {DOT_KEYS_ARRAY_CONFIGS.map((arrayConfig, arrayIndex) => {
                    const {
                        dotKeysArray,
                        startingIndex
                    } = arrayConfig

                    return (
                        <div
                            key={arrayIndex}
                            className="DotsSlideSelects__row"
                        >
                            {dotKeysArray.map((dotKey, index) => {
                                const
                                    dotIndex = index + startingIndex,
                                    isAccessed =
                                        isAccessOn &&
                                        accessedDotIndex === dotIndex

                                return (
                                    <DotsSlideSelect {...other}
                                        key={index}
                                        {...{
                                            dotIndex,
                                            dotKey,
                                            isSelected: selectedDotKeys[dotKey],
                                            isAccessed
                                        }}
                                    />
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default connect(mapStateToProps)(DotsSlideSelects)
