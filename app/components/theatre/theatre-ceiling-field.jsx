// Section to show the stage illustrations.

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import TheatreRafter from './theatre-rafter'

import { getArrayOfCoordinatesForFactoredLengths } from '../../helpers/general-helper'

import { RAFTER_HEIGHT_TO_WIDTH_RATIO } from '../../constants/stage'

const propTypes = {
    windowWidth: PropTypes.number.isRequired,
    ceilingFieldCoordinates: PropTypes.shape({
        ceilingHeight: PropTypes.number.isRequired,
        stageWidth: PropTypes.number.isRequired,
        stageCentreFromLeft: PropTypes.number.isRequired
    })
}

const TheatreCeilingField = ({

    windowWidth,
    ceilingFieldCoordinates

}) => {

    const { ceilingHeight,
            stageWidth,

            stageCentreFromLeft } = ceilingFieldCoordinates,

        ceilingFieldStyle = {
            height: `${ceilingHeight}px`
        },

        // Arbitrary values for now.
        firstRowRafterWidth = stageWidth * 1.1,
        firstRowRafterHeight = firstRowRafterWidth * RAFTER_HEIGHT_TO_WIDTH_RATIO,

        raftersRowCoordinates = getArrayOfCoordinatesForFactoredLengths({
            minLength: ceilingHeight,
            firstLength: firstRowRafterHeight,
            multiplyFactor: 1.2, // Gets wider faster with larger value.
            overlapRatio: 0.3 // Less bunched up when closer to 0.
        })

    return (
        <div
            className={classnames(
                'field',
                'theatre-field',
                'theatre-ceiling-field'
            )}
            style={ceilingFieldStyle}
        >
            <svg
                className={classnames(
                    'theatre-subfield',
                    'theatre-rafters'
                )}
                viewBox={`0 0 ${windowWidth} ${ceilingHeight}`}
                xmlns="http://www.w3.org/2000/svg"
            >
                {raftersRowCoordinates.map((currentCoordinates, index) => {
                    const { length: rafterHeight,
                            position: rafterBottom } = currentCoordinates,

                        rafterWidth = rafterHeight /
                            RAFTER_HEIGHT_TO_WIDTH_RATIO,

                        rafterTop = ceilingHeight - rafterHeight - rafterBottom,
                        rafterLeft = stageCentreFromLeft - rafterWidth / 2

                    return (
                        <TheatreRafter
                            key={index}
                            top={rafterTop}
                            left={rafterLeft}
                            width={rafterWidth}
                            height={rafterHeight}
                        />
                    )
                })}
            </svg>
        </div>
    )
}

TheatreCeilingField.propTypes = propTypes

export default TheatreCeilingField
