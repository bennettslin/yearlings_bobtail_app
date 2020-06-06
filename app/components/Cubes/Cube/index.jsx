// A single pair of ceiling and floor cubes.
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'
import CubeSvg from '../Svg'
import Face from './Face'
import { getCharStringForNumber } from '../../../helpers/format'
import { getValueInAbridgedMatrix } from '../../../helpers/general'
import { getCssZIndexForCube } from './helpers/zIndices'
import {
    DEFAULT,
    FACES,
    CEILING,
    FLOOR
} from '../../../constants/scene/cubes'
import {
    CUBE_X_INDICES,
    CUBE_Y_INDICES
} from '../../../constants/cubeIndex'

const
    getMapStateToProps = (yIndex, xIndex) => ({
        sceneStore: {
            sceneCubesKeys: {
                ceiling: {
                    hslaColours: ceilingHslaColours,
                    zIndices: ceilingZIndices
                },
                floor: {
                    hslaColours: floorHslaColours,
                    zIndices: floorZIndices
                },
                slantDirection
            }
        }
    }) => {
        const
            ceilingHslaKey =
                getValueInAbridgedMatrix({
                    matrix: ceilingHslaColours,
                    xIndex,
                    yIndex
                }),
            floorHslaKey =
                getValueInAbridgedMatrix({
                    matrix: floorHslaColours,
                    xIndex,
                    yIndex
                }),
            ceilingZIndex =
                getValueInAbridgedMatrix({
                    matrix: ceilingZIndices,
                    xIndex,
                    yIndex
                }),
            floorZIndex =
                getValueInAbridgedMatrix({
                    matrix: floorZIndices,
                    xIndex,
                    yIndex
                })

        return {
            ceilingHslaKey,
            floorHslaKey,
            ceilingZIndex,
            floorZIndex,
            slantDirection
        }
    },
    CubeConfig = {}

const Cube = ({
    xIndex,
    yIndex,
    ceilingHslaKey,
    floorHslaKey,
    ceilingZIndex,
    floorZIndex,
    slantDirection = DEFAULT

}) => {
    const xCharIndex = getCharStringForNumber(xIndex)

    return (
        // Individual cubes need to be svgs in order to have a stacking order.
        <CubeSvg
            {...{
                className: cx(
                    'Cube',
                    `y${yIndex}`,
                    `x${xCharIndex}`,
                    'abF'
                ),
                style: {
                    zIndex: getCssZIndexForCube({
                        slantDirection,
                        yIndex,
                        xIndex
                    })
                }
            }}
        >
            {FACES.map(face => (
                <Face
                    {...{
                        key: face,
                        slantDirection,
                        level: FLOOR,
                        yIndex,
                        xIndex,
                        hslaKey: floorHslaKey,
                        zIndex: floorZIndex,
                        face
                    }}
                />
            ))}
            {FACES.map(face => (
                <Face
                    {...{
                        key: face,
                        slantDirection,
                        level: CEILING,
                        yIndex,
                        xIndex,
                        hslaKey: ceilingHslaKey,
                        zIndex: ceilingZIndex,
                        face
                    }}
                />
            ))}
        </CubeSvg>
    )
}

Cube.propTypes = {
    // Through Redux.
    ceilingHslaKey: PropTypes.string.isRequired,
    floorHslaKey: PropTypes.string.isRequired,
    ceilingZIndex: PropTypes.number.isRequired,
    floorZIndex: PropTypes.number.isRequired,
    slantDirection: PropTypes.string,

    // From parent.
    xIndex: PropTypes.number.isRequired,
    yIndex: PropTypes.number.isRequired
}

CUBE_Y_INDICES.forEach(yIndex => {
    CubeConfig[yIndex] = {}
    CUBE_X_INDICES.forEach(xIndex => {
        CubeConfig[yIndex][xIndex] = connect(getMapStateToProps(yIndex, xIndex))(memo(Cube))
    })
})

export default CubeConfig
