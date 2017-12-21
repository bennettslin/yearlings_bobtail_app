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
        firstColumnBalconyHeight: PropTypes.number.isRequired,
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
            firstColumnBalconyHeight,
            leftWidth,
            rightWidth } = balconyFieldCoordinates,

        width = isRight ? rightWidth : leftWidth,

        balconyFieldStyle = {
            top: `${top}px`,
            width: `${width}px`,
            height: `${height}px`
        },

        balconyWidthToHeightRatio = 0.2,

        // Arbitrary for now.
        firstColumnBalconyWidth = firstColumnBalconyHeight * balconyWidthToHeightRatio,

        balconyColumnCoordinates = getArrayOfCoordinatesForFactoredLengths({
            minLength: width,
            firstLength: firstColumnBalconyWidth, // Arbitrary for now.
            multiplyFactor: 1.05, // Arbitrary for now.
            overlapRatio: 0.2 // Arbitrary for now.
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
                const { length: columnWidth,
                        position } = currentCoordinates,

                    direction = isRight ? 'left' : 'right',

                    balconyColumnStyle = {
                        width: `${columnWidth}px`,
                        [direction]: `${position}px`
                    },

                    balconyHeight = columnWidth / balconyWidthToHeightRatio,

                    balconyStyle = {
                        height: balconyHeight,
                        bottom: (height - balconyHeight) / 2
                    }

                return (
                    <div
                        key={index}
                        className={classnames(
                            'theatre-repeated',
                            'theatre-column',
                            'theatre-balcony-column'
                        )}
                        style={balconyColumnStyle}
                    >
                        <div
                            className="balcony"
                            style={balconyStyle}
                        />
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
