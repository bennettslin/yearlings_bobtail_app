// Section to show the stage illustrations.

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { getArrayOfCoordinatesForFactoredLengths } from '../../helpers/general-helper'

const propTypes = {
    seatingFieldCoordinates: PropTypes.shape({
        height: PropTypes.number.isRequired,
        stageWidth: PropTypes.number.isRequired,
        windowWidth: PropTypes.number.isRequired,
        stageCentreFromLeft: PropTypes.number.isRequired
    }),
    pitStyle: PropTypes.shape({
        width: PropTypes.string.isRequired,
        height: PropTypes.string.isRequired,
        left: PropTypes.string.isRequired
    }).isRequired,
}

const TheatreSeatingField = ({

    seatingFieldCoordinates,
    pitStyle

}) => {

    const { height,
            stageWidth,
            windowWidth,
            stageCentreFromLeft } = seatingFieldCoordinates,

        seatingFieldStyle = {
            height: `${height}px`
        },

        // Arbitrary values for now.
        firstRowSeatWidth = stageWidth / 12,
        seatHeightToWidthRatio = 1.55, // How tall is the seat.
        firstRowSeatHeight = firstRowSeatWidth * seatHeightToWidthRatio,

        seatingRowCoordinates = getArrayOfCoordinatesForFactoredLengths({
            minLength: height,
            firstLength: firstRowSeatHeight,
            multiplyFactor: 1.21, // Gets wider faster with larger value.
            overlapRatio: 0.9 // More bunched up when closer to 1.
        })

    return (
        <div
            className={classnames(
                'field',
                'theatre-seating-field'
            )}
            style={seatingFieldStyle}
        >
            <div
                className="theatre-pit"
                style={pitStyle}
            />

            {seatingRowCoordinates.map((currentRowCoordinates, rowIndex) => {
                const { length: rowHeight,
                        position: rowTop } = currentRowCoordinates,

                    seatingRowStyle = {
                        height: `${rowHeight}px`,
                        top: `${rowTop}px`
                    },

                    seatWidth = rowHeight / seatHeightToWidthRatio,

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
                    <div
                        key={rowIndex}
                        className={classnames(
                            'theatre-repeated',
                            'theatre-row',
                            'theatre-seating-row'
                        )}
                        style={seatingRowStyle}
                    >
                        {seatsArray.map((seat, seatIndex) => {

                            const { length: seatWidth,
                                    position: seatLeft } = seat,

                                seatStyle = {
                                    width: `${seatWidth}px`,
                                    left: `${seatLeft}px`
                                }

                            return (
                                <div
                                    key={seatIndex}
                                    className="seat"
                                    style={seatStyle}
                                />
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

TheatreSeatingField.propTypes = propTypes

export default TheatreSeatingField
