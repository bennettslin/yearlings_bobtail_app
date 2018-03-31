// Section to show the stage illustrations.

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import TheatreBalcony from './theatre-balcony'

import { getArrayOfCoordinatesForFactoredLengths } from '../../helpers/general-helper'

import { BALCONY_WIDTH_TO_HEIGHT_RATIO } from '../../constants/stage'

const propTypes = {
    isRight: PropTypes.bool,
    wallFieldCoordinates: PropTypes.shape({
        top: PropTypes.number.isRequired,
        wallHeight: PropTypes.number.isRequired,
        stageHeight: PropTypes.number.isRequired,
        leftWidth: PropTypes.number.isRequired,
        rightWidth: PropTypes.number.isRequired
    })
}

const TheatreWallField = ({

    isRight,
    wallFieldCoordinates

}) => {

    const { top,
            wallHeight,
            stageHeight,
            leftWidth,
            rightWidth } = wallFieldCoordinates,

        wallWidth = isRight ? rightWidth : leftWidth,

        balconyFieldStyle = {
            top: `${top}px`,
            width: `${wallWidth}px`,
            height: `${wallHeight}px`
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
                'theatre-balcony-field',
                isRight ? 'right' : 'left'
            )}
            style={balconyFieldStyle}
        >
            <svg
                className="theatre-balconies"
                viewBox={`0 0 ${wallWidth} ${stageHeight}`}
                xmlns="http://www.w3.org/2000/svg"
            >
                {balconyColumnCoordinates.map((currentCoordinates, index) => {
                    const { length: columnWidth,
                            position } = currentCoordinates,

                        // direction = isRight ? 'left' : 'right',

                        // balconyColumnStyle = {
                        //     width: `${columnWidth}px`,
                        //     [direction]: `${position}px`
                        // },

                        balconyHeight = columnWidth / BALCONY_WIDTH_TO_HEIGHT_RATIO

                        // balconyStyle = {
                        //     height: balconyHeight,
                        //     bottom:
                        // }

                    return (
                        <TheatreBalcony
                            key={index}
                            top={(wallHeight - balconyHeight) / 2}
                            left={position}
                            width={columnWidth}
                            height={balconyHeight}
                        />
                    )
                })}
            </svg>
        </div>
    )
}

TheatreWallField.propTypes = propTypes

export default TheatreWallField
