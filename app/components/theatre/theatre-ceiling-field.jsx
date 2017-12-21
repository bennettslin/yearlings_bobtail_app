// Section to show the stage illustrations.

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { getArrayOfCoordinatesForFactoredLengths } from '../../helpers/general-helper'

const propTypes = {
    ceilingFieldCoordinates: PropTypes.shape({
        height: PropTypes.number.isRequired,
        firstRowRafterWidth: PropTypes.number.isRequired,
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

    const { height,
            firstRowRafterWidth,
            stageCentreFromLeft } = ceilingFieldCoordinates,

        ceilingFieldStyle = {
            height: `${height}px`
        },

        rafterHeightToWidthRatio = 0.02,

        // Arbitrary for now.
        firstRowRafterHeight = firstRowRafterWidth * rafterHeightToWidthRatio,

        ceilingRowCoordinates = getArrayOfCoordinatesForFactoredLengths({
            minLength: height,
            firstLength: firstRowRafterHeight, // Arbitrary for now.
            multiplyFactor: 1.2, // Arbitrary for now.
            overlapRatio: 0.3 // Arbitrary for now.
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
                const { length: rowHeight,
                        position: rowBottom } = currentCoordinates,

                    ceilingRowStyle = {
                        height: `${rowHeight}px`,
                        bottom: `${rowBottom}px`
                    },

                    rafterWidth = rowHeight / rafterHeightToWidthRatio,

                    rafterStyle = {
                        width: rafterWidth,
                        left: stageCentreFromLeft - rafterWidth / 2
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
                        <div
                            className="rafter"
                            style={rafterStyle}
                        />
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
