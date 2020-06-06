// A single pair of ceiling and floor cubes.
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import CubeSvg from '../Svg'
import Face from './Face'
import { getCharStringForNumber } from '../../../helpers/format'
import {
    getCeilingHslaForCube,
    getCeilingZIndexForCube,
    getFloorHslaForCube,
    getFloorZIndexForCube,
    getSlantDirectionForCube
} from '../../../api/scene/cubes'
import { getCssZIndexForCube } from './helpers/zIndices'
import {
    FACES,
    CEILING,
    FLOOR
} from '../../../constants/scene/cubes'
import { mapSceneCubesKey } from '../../../redux/scene/selectors'

const Cube = ({
    yIndex,
    xIndex

}) => {
    const
        sceneCubesKey = useSelector(mapSceneCubesKey),
        slantDirection = getSlantDirectionForCube(sceneCubesKey)

    return (
        // Individual cubes need to be svgs in order to have a stacking order.
        <CubeSvg
            {...{
                className: cx(
                    'Cube',
                    `y${yIndex}`,
                    `x${getCharStringForNumber(xIndex)}`,
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
                        hslaKey: getFloorHslaForCube(
                            sceneCubesKey,
                            yIndex,
                            xIndex
                        ),
                        zIndex: getFloorZIndexForCube(
                            sceneCubesKey,
                            yIndex,
                            xIndex
                        ),
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
                        hslaKey: getCeilingHslaForCube(
                            sceneCubesKey,
                            yIndex,
                            xIndex
                        ),
                        zIndex: getCeilingZIndexForCube(
                            sceneCubesKey,
                            yIndex,
                            xIndex
                        ),
                        face
                    }}
                />
            ))}
        </CubeSvg>
    )
}

Cube.propTypes = {
    yIndex: PropTypes.number.isRequired,
    xIndex: PropTypes.number.isRequired
}

export default memo(Cube)
