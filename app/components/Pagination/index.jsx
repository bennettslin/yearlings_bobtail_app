import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import {
    mapIsMiniWidth,
    mapIsMonitorWidth,
    mapIsPhoneWidth,
} from '../../redux/device/selector'
import Button from '../Button'
import PaginationButton from './Button'
import {
    ARROW_LEFT,
    ARROW_RIGHT,
} from '../../constants/access'
import {
    PAGINATION_NEXT_BUTTON_KEY,
    PAGINATION_PREVIOUS_BUTTON_KEY,
} from '../../constants/buttons'
import { getMiddlePitchIndices } from './helper'

const Pagination = ({
    dispatchPitch,
    selectedPitchIndex,
    pitchSlideCount,
}) => {
    const
        isMonitorWidth = useSelector(mapIsMonitorWidth),
        isMiniWidth = useSelector(mapIsMiniWidth),
        isPhoneWidth = useSelector(mapIsPhoneWidth)

    const handlePreviousClick = () => {
        dispatchPitch(selectedPitchIndex - 1)
    }
    const handleNextClick = () => {
        dispatchPitch(selectedPitchIndex + 1)
    }
    const handleButtonClick = pitchIndex => {
        dispatchPitch(pitchIndex)
    }

    return (
        <div
            {...{
                className: cx(
                    'Pagination',
                    'fCC',
                ),
            }}
        >
            {/* First slide. */}
            <PaginationButton
                {...{
                    pitchSlideIndex: 1,
                    isSelected: selectedPitchIndex === 1,
                    handleButtonClick,
                }}
            />
            {/* Second slide or previous arrow. */}
            {selectedPitchIndex <= 4 ? (
                <PaginationButton
                    {...{
                        pitchSlideIndex: 2,
                        isSelected: selectedPitchIndex === 2,
                        handleButtonClick,
                    }}
                />
            ) : (
                <Button
                    {...{
                        // isLargeSize: isMonitorWidth || isPhoneWidth,
                        // isSmallSize: isMiniWidth,
                        buttonName: PAGINATION_PREVIOUS_BUTTON_KEY,
                        accessKey: ARROW_LEFT,
                        handleButtonClick: handlePreviousClick,
                    }}
                />
            )}
            {/* This component assumes at least 7 pitch slides! */}
            {getMiddlePitchIndices({
                selectedPitchIndex,
                pitchSlideCount,
            }).map(index => (
                <PaginationButton
                    {...{
                        pitchSlideIndex: index,
                        isSelected: selectedPitchIndex === index,
                        handleButtonClick,
                    }}
                />
            ))}
            {/* Second to last slide or next arrow. */}
            {selectedPitchIndex >= pitchSlideCount - 3 ? (
                <PaginationButton
                    {...{
                        pitchSlideIndex: pitchSlideCount - 1,
                        isSelected: selectedPitchIndex === pitchSlideCount - 1,
                        handleButtonClick,
                    }}
                />
            ) : (
                <Button
                    {...{
                        // isLargeSize: isMonitorWidth || isPhoneWidth,
                        // isSmallSize: isMiniWidth,
                        buttonName: PAGINATION_NEXT_BUTTON_KEY,
                        accessKey: ARROW_RIGHT,
                        handleButtonClick: handleNextClick,
                    }}
                />
            )}
            {/* Last slide */}
            <PaginationButton
                {...{
                    pitchSlideIndex: pitchSlideCount,
                    isSelected: selectedPitchIndex === pitchSlideCount,
                    handleButtonClick,
                }}
            />
        </div>
    )
}

Pagination.propTypes = {
    dispatchPitch: PropTypes.func.isRequired,
    selectedPitchIndex: PropTypes.number.isRequired,
    pitchSlideCount: PropTypes.number.isRequired,
}

export default Pagination
