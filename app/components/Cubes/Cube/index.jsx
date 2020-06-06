// A single pair of floor and floor cubes.
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import CubeSvg from '../Svg'
import Face from './Face'
import { getCharStringForNumber } from '../../../helpers/format'
import { getCssZIndexForCube } from './helpers/zIndices'
import {
    FACES,
    CEILING,
    FLOOR
} from '../../../constants/scene/cubes'
import {
    mapCubeCeilingHsla,
    mapCubeCeilingZIndex,
    mapCubeFloorHsla,
    mapCubeFloorZIndex,
    mapCubeSlantDirection
} from '../../../redux/scene/selectors'

const Cube = ({
    yIndex,
    xIndex

}) => {
    const
        ceilingHsla = useSelector(mapCubeCeilingHsla(yIndex, xIndex)),
        ceilingZIndex = useSelector(mapCubeCeilingZIndex(yIndex, xIndex)),
        floorHsla = useSelector(mapCubeFloorHsla(yIndex, xIndex)),
        floorZIndex = useSelector(mapCubeFloorZIndex(yIndex, xIndex)),
        slantDirection = useSelector(mapCubeSlantDirection)

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
                        hslaKey: floorHsla,
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
                        hslaKey: ceilingHsla,
                        zIndex: ceilingZIndex,
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
