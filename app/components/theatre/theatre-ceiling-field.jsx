// Section to show the stage illustrations.

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { getArrayOfCoordinatesForFactoredLengths } from '../../helpers/general-helper'

const propTypes = {
    ceilingFieldCoordinates: PropTypes.shape({
        height: PropTypes.number.isRequired,
        stageWidth: PropTypes.number.isRequired,
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
            stageWidth,
            stageCentreFromLeft } = ceilingFieldCoordinates,

        ceilingFieldStyle = {
            height: `${height}px`
        },

        // Arbitrary values for now.
        firstRowRafterWidth = stageWidth * 1.1,
        rafterHeightToWidthRatio = 0.02, // How tall is the rafter.
        firstRowRafterHeight = firstRowRafterWidth * rafterHeightToWidthRatio,

        ceilingRowCoordinates = getArrayOfCoordinatesForFactoredLengths({
            minLength: height,
            firstLength: firstRowRafterHeight,
            multiplyFactor: 1.2, // Gets wider faster with larger value.
            overlapRatio: 0.3 // Less bunched up when closer to 0.
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
