// Section to show the stage illustrations.

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { getArrayOfCoordinatesForFactoredLengths } from '../../helpers/general-helper'

const propTypes = {
    ceilingFieldCoordinates: PropTypes.shape({
        height: PropTypes.number.isRequired,
        stageCentreFromLeft: PropTypes.number.isRequired
    }),
    prosceniumTopStyle: PropTypes.shape({
        width: PropTypes.string.isRequired,
        height: PropTypes.string.isRequired,
        left: PropTypes.string.isRequired
    }).isRequired
}

const TheatreCeilingField = ({

    ceilingFieldCoordinates,
    prosceniumTopStyle

}) => {

    const { height } = ceilingFieldCoordinates,

        ceilingFieldStyle = {
            height: `${height}px`
        },

        ceilingRowCoordinates = getArrayOfCoordinatesForFactoredLengths({
            minLength: height,
            firstLength: 50, // Arbitrary for now.
            multiplyFactor: 1.5, // Arbitrary for now.
            overlapRatio: 0.95 // Arbitrary for now.
        })

    return (
        <div
            className={classnames(
                'field',
                'theatre-ceiling-field'
            )}
            style={ceilingFieldStyle}
        >
            {ceilingRowCoordinates.map((currentCoordinates, index) => {
                const { length,
                        position } = currentCoordinates,

                    ceilingRowStyle = {
                        height: `${length}px`,
                        bottom: `${position}px`
                    }

                return (
                    <div
                        key={index}
                        className={classnames(
                            'theatre-repeated',
                            'theatre-row',
                            'theatre-ceiling-row'
                        )}
                        style={ceilingRowStyle}
                    >
                        {index}
                    </div>
                )
            })}

            <div
                className={classnames(
                    'proscenium',
                    'proscenium-top'
                )}
                style={prosceniumTopStyle}
            />
        </div>
    )
}

TheatreCeilingField.propTypes = propTypes

export default TheatreCeilingField
