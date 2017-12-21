// Section to show the stage illustrations.

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { getArrayOfCoordinatesForFactoredLengths } from '../../helpers/general-helper'

const propTypes = {
    seatingFieldCoordinates: PropTypes.shape({
        height: PropTypes.number.isRequired,
        firstRowSeatWidth: PropTypes.number.isRequired,
        stageCentreFromLeft: PropTypes.number.isRequired
    }),
    prosceniumBottomStyle: PropTypes.shape({
        width: PropTypes.string.isRequired,
        height: PropTypes.string.isRequired,
        left: PropTypes.string.isRequired
    }).isRequired,
    windowWidth: PropTypes.number.isRequired
}

const TheatreSeatingField = ({

    seatingFieldCoordinates,
    prosceniumBottomStyle,
    windowWidth

}) => {

    const { height,
            firstRowSeatWidth,
            stageCentreFromLeft } = seatingFieldCoordinates,

        seatingFieldStyle = {
            height: `${height}px`
        },

        seatHeightToWidthRatio = 1.55, // Arbitrary for now.

        firstRowSeatHeight = firstRowSeatWidth * seatHeightToWidthRatio,

        seatingRowCoordinates = getArrayOfCoordinatesForFactoredLengths({
            minLength: height,
            firstLength: firstRowSeatHeight,
            multiplyFactor: 1.32, // Arbitrary for now.
            overlapRatio: 0.8 // Arbitrary for now.
        })

    return (
        <div
            className={classnames(
                'field',
                'theatre-seating-field'
            )}
            style={seatingFieldStyle}
        >
            {/* Proscenium bottom is behind seating. */}
            <div
                className={classnames(
                    'proscenium',
                    'proscenium-bottom'
                )}
                style={prosceniumBottomStyle}
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

                    // TODO: Have max number of seats.
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
