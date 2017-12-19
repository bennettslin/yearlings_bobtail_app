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
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        left: PropTypes.number.isRequired
    }).isRequired
}

const TheatreSeatingField = ({

    seatingFieldCoordinates,
    prosceniumBottomStyle

}) => {

    const { height,
            firstRowSeatWidth } = seatingFieldCoordinates,

        seatingFieldStyle = {
            height: `${height}px`
        },

        firstRowSeatHeight = firstRowSeatWidth * 1.5,

        seatingRowCoordinates = getArrayOfCoordinatesForFactoredLengths({
            minLength: height,
            firstLength: firstRowSeatHeight,
            multiplyFactor: 1.5, // Arbitrary for now.
            overlapRatio: 0.95 // Arbitrary for now.
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

            {seatingRowCoordinates.map((currentCoordinates, index) => {
                const { length,
                        position } = currentCoordinates,

                    seatingRowStyle = {
                        height: `${length}px`,
                        top: `${position}px`
                    }

                return (
                    <div
                        key={index}
                        className={classnames(
                            'theatre-repeated',
                            'row',
                            'theatre-seating-row'
                        )}
                        style={seatingRowStyle}
                    >
                        {index}
                    </div>
                )
            })}
        </div>
    )
}

TheatreSeatingField.propTypes = propTypes

export default TheatreSeatingField
