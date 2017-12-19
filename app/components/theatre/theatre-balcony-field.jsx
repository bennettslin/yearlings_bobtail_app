// Section to show the stage illustrations.

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { getArrayOfCoordinatesForFactoredLengths } from '../../helpers/general-helper'

const propTypes = {
    isRight: PropTypes.bool,
    balconyFieldCoordinates: PropTypes.shape({
        top: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        leftWidth: PropTypes.number.isRequired,
        rightWidth: PropTypes.number.isRequired
    }),
    prosceniumSideStyle: PropTypes.shape({
        width: PropTypes.string.isRequired
    }).isRequired
}

const TheatreBalconyField = ({

    isRight,
    balconyFieldCoordinates,
    prosceniumSideStyle

}) => {

    const { top,
            height,
            leftWidth,
            rightWidth } = balconyFieldCoordinates,

        width = isRight ? rightWidth : leftWidth,

        balconyFieldStyle = {
            top: `${top}px`,
            width: `${width}px`,
            height: `${height}px`
        },

        balconyColumnCoordinates = getArrayOfCoordinatesForFactoredLengths({
            minLength: width,
            firstLength: 50, // Arbitrary for now.
            multiplyFactor: 1.5, // Arbitrary for now.
            overlapRatio: 0.95 // Arbitrary for now.
        })

    return (
        <div
            className={classnames(
                'field',
                'theatre-balcony-field',
                isRight ? 'right' : 'left'
            )}
            style={balconyFieldStyle}
        >
            {balconyColumnCoordinates.map((currentCoordinates, index) => {
                const { length,
                        position } = currentCoordinates,

                    direction = isRight ? 'left' : 'right',

                    balconyColumnStyle = {
                        width: `${length}px`,
                        [direction]: `${position}px`
                    }

                return (
                    <div
                        key={index}
                        className={classnames(
                            'theatre-repeated',
                            'column',
                            'theatre-balcony-column'
                        )}
                        style={balconyColumnStyle}
                    >
                        {index}
                    </div>
                )
            })}

            <div
                className={classnames(
                    'proscenium',
                    'proscenium-side'
                )}
                style={prosceniumSideStyle}
            />
        </div>
    )
}

TheatreBalconyField.propTypes = propTypes

export default TheatreBalconyField
