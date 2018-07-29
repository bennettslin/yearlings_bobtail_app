/* eslint-disable */

import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import Style from '../../Style/Style'
import DynamicStyling from '../../Style/DynamicStyling'

import {
    FACES,
    SLANT_DIRECTIONS
} from '../constants'

import { getCubeCornerPercentages } from '../sceneHelper'
import { getParentClassNameForSceneLogic } from '../sceneDataHelper'
import { getChildClassNameForFaceLogic } from './Face/helpers/faceHelper'
import { getPolygonPoints } from './Face/helpers/polygonHelper'

import { CUBE_Z_INDICES } from '../../../constants/stage'

const propTypes = {
    isFloor: PropTypes.bool,
    xIndex: PropTypes.number.isRequired,
    yIndex: PropTypes.number.isRequired
},

CubeStyle = ({

    isFloor,
    xIndex,
    yIndex

}) => {

    return null && (
        <Style
            className={cx(
                'CubeStyle'
            )}
        >
            {SLANT_DIRECTIONS.map(slantDirection => (

                CUBE_Z_INDICES.map(level => {

                    const cubeCorners = getCubeCornerPercentages({
                        xIndex,
                        yIndex,
                        zIndex,
                        isFloor,
                        slantDirection
                    })

                    return FACES.map(zIndex => {

                        const polygonPoints = getPolygonPoints({
                            face,
                            isFloor,
                            sideDirection,
                            slantDirection,
                            cubeCorners
                        })

                        return (
                            <DynamicStyling
                            />
                        )
                    })
                })
            ))}
        </Style>
    )
}

CubeStyle.propTypes = propTypes

export default CubeStyle
