// Section to show the stage illustrations.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import DynamicSvg from '../dynamic-svg/dynamic-svg'
import TheatreFloorSeat from './TheatreFloorSeat'

import { getArrayOfCoordinatesForFactoredLengths } from '../../helpers/general-helper'

import { SEAT_HEIGHT_TO_WIDTH_RATIO } from '../../constants/stage'

const propTypes = {
    windowWidth: PropTypes.number.isRequired,
    floorFieldCoordinates: PropTypes.shape({
        floorHeight: PropTypes.number.isRequired,
        stageWidth: PropTypes.number.isRequired,
        stageCentreFromLeft: PropTypes.number.isRequired
    }),
    pitStyle: PropTypes.shape({
        width: PropTypes.string.isRequired,
        height: PropTypes.string.isRequired,
        left: PropTypes.string.isRequired
    }).isRequired,
}

const TheatreFloor = ({

    windowWidth,
    floorFieldCoordinates,
    pitStyle

}) => {

    const { floorHeight,
            stageWidth,
            stageCentreFromLeft } = floorFieldCoordinates,

        floorFieldStyle = {
            height: `${floorHeight}px`
        },

        // Arbitrary values for now.
        firstRowSeatWidth = stageWidth / 12,
        firstRowSeatHeight = firstRowSeatWidth * SEAT_HEIGHT_TO_WIDTH_RATIO,

        seatingRowCoordinates = getArrayOfCoordinatesForFactoredLengths({
            minLength: floorHeight,
            firstLength: firstRowSeatHeight,
            multiplyFactor: 1.25, // Gets wider faster with larger value.
            overlapRatio: 0.9 // More bunched up when closer to 1.
        })

    return (
        <div
            className={cx(
                'TheatreFloor',
                'Theatre__field',
                'field'
            )}
            style={floorFieldStyle}
        >
            <div
                className="TheatreFloor__pit"
                style={pitStyle}
            />

            <DynamicSvg
                className={cx(
                    'Theatre__subfield'
                )}
                viewBoxWidth={windowWidth}
                viewBoxHeight={floorHeight}
            >
                {seatingRowCoordinates.map((currentRowCoordinates, rowIndex) => {
                    const { length: rowHeight,
                            position: rowTop } = currentRowCoordinates,

                        seatWidth = rowHeight / SEAT_HEIGHT_TO_WIDTH_RATIO,

                        /**
                         * If row is even, have centre seat by offsetting right
                         * side with one more half seat, and left side with one
                         * less.
                         */
                        isEven = rowIndex % 2 === 0,
                        seatWidthOffset = isEven ? seatWidth / 2 : 0,
                        maxSeats = 10, // Arbitrary for now.

                        leftSeatsArray = getArrayOfCoordinatesForFactoredLengths({
                            minLength: stageCentreFromLeft - seatWidthOffset,
                            firstLength: seatWidth,
                            maxCount: maxSeats,

                            // Start from centre, and go towards left.
                            reversePosition: true
                        }),

                        rightSeatsArray = getArrayOfCoordinatesForFactoredLengths({
                            minLength: windowWidth - stageCentreFromLeft +
                                seatWidthOffset,
                            firstLength: seatWidth,
                            maxCount: maxSeats + (isEven ? 1 : 0),
                            positionOffset: stageCentreFromLeft - seatWidthOffset
                        }),

                        // Combine left and right side seating.
                        seatsArray = leftSeatsArray.concat(rightSeatsArray)

                    return (
                        <g key={rowIndex}>
                            {seatsArray.map((seat, seatIndex) => {

                                const { length: seatWidth,
                                        position: seatLeft } = seat

                                return (
                                    <TheatreFloorSeat
                                        key={seatIndex}
                                        top={rowTop}
                                        left={seatLeft}
                                        width={seatWidth}
                                        height={rowHeight}
                                    />
                                )
                            })}
                        </g>
                    )
                })}
            </DynamicSvg>
        </div>
    )
}

TheatreFloor.propTypes = propTypes

export default TheatreFloor
