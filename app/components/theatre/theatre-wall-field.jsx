// Section to show the stage illustrations.

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import DynamicSvg from '../dynamic-svg/dynamic-svg'
import TheatreBalcony from './theatre-balcony'

import { getArrayOfCoordinatesForFactoredLengths } from '../../helpers/general-helper'

import { BALCONY_WIDTH_TO_HEIGHT_RATIO } from '../../constants/stage'

const propTypes = {
    isRight: PropTypes.bool,
    windowHeight: PropTypes.number.isRequired,
    wallFieldCoordinates: PropTypes.shape({
        ceilingHeight: PropTypes.number.isRequired,
        wallHeight: PropTypes.number.isRequired,
        stageHeight: PropTypes.number.isRequired,
        leftWidth: PropTypes.number.isRequired,
        rightWidth: PropTypes.number.isRequired
    })
}

const TheatreWallField = ({

    isRight,
    windowHeight,
    wallFieldCoordinates

}) => {

    const { ceilingHeight,
            wallHeight,
            stageHeight,
            leftWidth,
            rightWidth } = wallFieldCoordinates,

        wallWidth = isRight ? rightWidth : leftWidth,

        wallFieldStyle = {
            width: `${wallWidth}px`
        },

        // Arbitrary values for now.
        firstColumnBalconyHeight = stageHeight,
        firstColumnBalconyWidth =
            firstColumnBalconyHeight * BALCONY_WIDTH_TO_HEIGHT_RATIO,

        balconyColumnCoordinates = getArrayOfCoordinatesForFactoredLengths({
            minLength: wallWidth,
            firstLength: firstColumnBalconyWidth,
            multiplyFactor: 1.05, // Gets taller faster with larger value.
            overlapRatio: 0.2 // Less bunched up when closer to 0.
        })

    return (
        <div
            className={classnames(
                'field',
                'theatre-field',
                'theatre-wall-field',
                isRight ? 'right' : 'left'
            )}
            style={wallFieldStyle}
        >
            <DynamicSvg
                className={classnames(
                    'theatre-subfield',
                    'theatre-balconies'
                )}
                viewBoxWidth={wallWidth}
                viewBoxHeight={windowHeight}
            >
                {balconyColumnCoordinates.map((currentCoordinates, index) => {
                    const { length: balconyWidth,
                            position: xPosition } = currentCoordinates,

                        balconyHeight = balconyWidth /
                            BALCONY_WIDTH_TO_HEIGHT_RATIO,
                        balconyTop = ceilingHeight +
                            (wallHeight - balconyHeight) / 2,
                        balconyLeft = isRight ?
                            xPosition : wallWidth - balconyWidth - xPosition

                    return (
                        <TheatreBalcony
                            key={index}
                            top={balconyTop}
                            left={balconyLeft}
                            width={balconyWidth}
                            height={balconyHeight}
                        />
                    )
                })}
            </DynamicSvg>
        </div>
    )
}

TheatreWallField.propTypes = propTypes

export default TheatreWallField
