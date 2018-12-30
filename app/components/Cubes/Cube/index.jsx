// A single pair of ceiling and floor cubes.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import Svg from 'modules/Svg'
import Face from './Face'

import { getCharStringForNumber } from 'helpers/format'
import { getValueInAbridgedMatrix } from 'helpers/general'

import { getCubeZIndexStyle } from './helpers'

import {
    FACES,
    CEILING,
    FLOOR
} from 'constants/scene'
import {
    CUBE_X_INDICES,
    CUBE_Y_INDICES
} from 'constants/cubeIndex'

const
    getMapStateToProps = (yIndex, xIndex) => ({
        sceneStore: {
            sceneCubes: {
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
            ceilingHslaColourKey =
                getValueInAbridgedMatrix(ceilingHslaColours, xIndex, yIndex),
            floorHslaColourKey =
                getValueInAbridgedMatrix(floorHslaColours, xIndex, yIndex),
            ceilingZIndex =
                getValueInAbridgedMatrix(ceilingZIndices, xIndex, yIndex),
            floorZIndex =
                getValueInAbridgedMatrix(floorZIndices, xIndex, yIndex)

        return {
            ceilingHslaColourKey,
            floorHslaColourKey,
            ceilingZIndex,
            floorZIndex,
            slantDirection
        }
    },
    CubeConfig = {}

class Cube extends PureComponent {

    static propTypes = {
        // Through Redux.
        ceilingHslaColourKey: PropTypes.string.isRequired,
        floorHslaColourKey: PropTypes.string.isRequired,
        ceilingZIndex: PropTypes.number.isRequired,
        floorZIndex: PropTypes.number.isRequired,
        slantDirection: PropTypes.string.isRequired,

        // From parent.
        xIndex: PropTypes.number.isRequired,
        yIndex: PropTypes.number.isRequired
    }

    render() {
        const
            {
                xIndex,
                yIndex,
                ceilingHslaColourKey,
                floorHslaColourKey,
                ceilingZIndex,
                floorZIndex,
                slantDirection
            } = this.props,
            xCharIndex = getCharStringForNumber(xIndex)

        return (

            // Individual cubes need to be svgs in order to have a stacking order.
            <Svg
                {...{
                    className: cx(
                        'Cube',
                        `y${yIndex}`,
                        `x${xCharIndex}`,
                        'abF'
                    ),
                    style: {
                        zIndex: getCubeZIndexStyle({
                            slantDirection,
                            yIndex,
                            xIndex
                        })
                    }
                }}

            >
                {FACES.map(face => (
                    <Face
                        key={face}
                        {...{
                            slantDirection,
                            level: CEILING,
                            yIndex,
                            xIndex,
                            hslaColourKey: ceilingHslaColourKey,
                            zIndex: ceilingZIndex,
                            face
                        }}
                    />
                ))}
                {FACES.map(face => (
                    <Face
                        key={face}
                        {...{
                            slantDirection,
                            level: FLOOR,
                            yIndex,
                            xIndex,
                            hslaColourKey: floorHslaColourKey,
                            zIndex: floorZIndex,
                            face
                        }}
                    />
                ))}
            </Svg>
        )
    }
}

CUBE_Y_INDICES.forEach(yIndex => {
    CubeConfig[yIndex] = {}
    CUBE_X_INDICES.forEach(xIndex => {
        CubeConfig[yIndex][xIndex] = connect(getMapStateToProps(yIndex, xIndex))(Cube)
    })
})

export default CubeConfig
