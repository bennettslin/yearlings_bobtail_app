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

        seatHeightToWidthRatio = 1.5,

        firstRowSeatHeight = firstRowSeatWidth * seatHeightToWidthRatio,

        seatingRowCoordinates = getArrayOfCoordinatesForFactoredLengths({
            minLength: height,
            firstLength: firstRowSeatHeight,
            multiplyFactor: 1.5, // Arbitrary for now.
            overlapRatio: 0.75 // Arbitrary for now.
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

            {seatingRowCoordinates.map((currentCoordinates, rowIndex) => {
                const { length: rowHeight,
                        position } = currentCoordinates,

                    seatingRowStyle = {
                        height: `${rowHeight}px`,
                        top: `${position}px`
                    },

                    seatWidth = rowHeight / seatHeightToWidthRatio,

                    // If row is even, right side has an extra half seat.
                    isEven = rowIndex % 2 === 0,

                    seatWidthOffset = isEven ? seatWidth / 2 : 0,

                    leftSeatsArray = getArrayOfCoordinatesForFactoredLengths({
                        minLength: stageCentreFromLeft - seatWidthOffset,
                        firstLength: seatWidth,
                        // positionOffset: seatWidthOffset,
                        reversePosition: true
                    }),

                    rightSeatsArray = getArrayOfCoordinatesForFactoredLengths({
                        minLength: windowWidth - stageCentreFromLeft +
                            seatWidthOffset,
                        firstLength: seatWidth,
                        positionOffset: stageCentreFromLeft - seatWidthOffset
                    }),

                    // seatsArray = leftSeatsArray
                    seatsArray = leftSeatsArray.concat(rightSeatsArray)

                    // console.error('rightSeatsArray', rightSeatsArray, isEven)

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

                            const { length,
                                    position } = seat,

                                seatStyle = {
                                    width: `${length}px`,
                                    left: `${position}px`
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
