import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import {
    mapIsDesktopWidth,
    mapIsMiniWidth,
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
import './style'

const Pagination = ({
    dispatchPitch,
    selectedPitchIndex,
    pitchSlideCount,
}) => {
    const
        isDesktopWidth = useSelector(mapIsDesktopWidth),
        isMiniWidth = useSelector(mapIsMiniWidth),
        isPhoneWidth = useSelector(mapIsPhoneWidth),

        // In phone, there's enough space for buttons to be large again.
        isLargeSize = isDesktopWidth || isPhoneWidth,
        isSmallSize = isMiniWidth,

        // In narrow viewport widths, there's only one middle index.
        isSingleMiddleIndex = !isDesktopWidth,
        increment = isSingleMiddleIndex ? 1 : 0,

        // In phone, there's only the single, selected index.
        isOnlyIndex = isPhoneWidth

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
            <Button
                {...{
                    buttonName: PAGINATION_PREVIOUS_BUTTON_KEY,
                    isLargeSize,
                    isSmallSize,
                    accessKey: ARROW_LEFT,
                    handleButtonClick: handlePreviousClick,
                    isDisabled: selectedPitchIndex === 1,
                }}
            />
            {!isOnlyIndex && (
                <>
                    {/* First slide. */}
                    <PaginationButton
                        {...{
                            pitchSlideIndex: 1,
                            isLargeSize,
                            isSmallSize,
                            isSelected: selectedPitchIndex === 1,
                            handleButtonClick,
                        }}
                    />
                    {/* Second slide or ellipsis placeholder. */}
                    <PaginationButton
                        {...{
                            pitchSlideIndex: 2,
                            isLargeSize,
                            isSmallSize,
                            isSelected: selectedPitchIndex === 2,
                            isEllipsisPlaceholder:
                                selectedPitchIndex > 4 - increment,
                            handleButtonClick,
                        }}
                    />
                </>
            )}
            {getMiddlePitchIndices({
                selectedPitchIndex,
                pitchSlideCount,
                isSingleMiddleIndex,
                isOnlyIndex,

            }).map((pitchSlideIndex, index) => (
                <PaginationButton
                    {...{
                        key: index,
                        pitchSlideIndex,
                        isLargeSize,
                        isSmallSize,
                        isSelected: selectedPitchIndex === pitchSlideIndex,
                        handleButtonClick,
                    }}
                />
            ))}
            {!isOnlyIndex && (
                <>
                    {/* Second to last slide or ellipsis placeholder. */}
                    <PaginationButton
                        {...{
                            pitchSlideIndex: pitchSlideCount - 1,
                            isLargeSize,
                            isSmallSize,
                            isSelected:
                                selectedPitchIndex === pitchSlideCount - 1,
                            isEllipsisPlaceholder:
                                selectedPitchIndex < pitchSlideCount - 3 + increment,
                            handleButtonClick,
                        }}
                    />
                    {/* Last slide */}
                    <PaginationButton
                        {...{
                            pitchSlideIndex: pitchSlideCount,
                            isLargeSize,
                            isSmallSize,
                            isSelected: selectedPitchIndex === pitchSlideCount,
                            handleButtonClick,
                        }}
                    />
                </>
            )}
            <Button
                {...{
                    isLargeSize,
                    isSmallSize,
                    buttonName: PAGINATION_NEXT_BUTTON_KEY,
                    accessKey: ARROW_RIGHT,
                    handleButtonClick: handleNextClick,
                    isDisabled: selectedPitchIndex === pitchSlideCount,
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
