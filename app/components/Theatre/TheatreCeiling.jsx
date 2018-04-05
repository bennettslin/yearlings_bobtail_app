// Section to show the stage illustrations.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import DynamicSvg from '../DynamicSvg/DynamicSvg'
import TheatreCeilingRafter from './TheatreCeilingRafter'

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

const TheatreCeiling = ({

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
            className={cx(
                'TheatreCeiling',
                'Theatre__field',
                'field'
            )}
            style={ceilingFieldStyle}
        >
            <DynamicSvg
                className={cx(
                    'Theatre__subfield'
                )}
                viewBoxWidth={windowWidth}
                viewBoxHeight={ceilingHeight}
            >
                {raftersRowCoordinates.map((currentCoordinates, index) => {
                    const { length: rafterHeight,
                            position: rafterBottom } = currentCoordinates,

                        rafterWidth = rafterHeight /
                            RAFTER_HEIGHT_TO_WIDTH_RATIO,

                        rafterTop = ceilingHeight - rafterHeight - rafterBottom,
                        rafterLeft = stageCentreFromLeft - rafterWidth / 2

                    return (
                        <TheatreCeilingRafter
                            key={index}
                            top={rafterTop}
                            left={rafterLeft}
                            width={rafterWidth}
                            height={rafterHeight}
                        />
                    )
                })}
            </DynamicSvg>
        </div>
    )
}

TheatreCeiling.propTypes = propTypes

export default TheatreCeiling
