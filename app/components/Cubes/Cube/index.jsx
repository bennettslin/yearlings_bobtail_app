// A single pair of ceiling and floor cubes.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import Svg from '../../Svg'
import Face from './Face'

import { getCharStringForNumber } from 'helpers/format'
import { getValueInAbridgedMatrix } from 'helpers/general'

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
                    zIndices: ceilingZIndices
                },
                floor: {
                    zIndices: floorZIndices
                },
                slantDirection
            }
        }
    }) => {
        const
            ceilingZIndex =
                getValueInAbridgedMatrix(ceilingZIndices, xIndex, yIndex),
            floorZIndex =
                getValueInAbridgedMatrix(floorZIndices, xIndex, yIndex)

        return {
            ceilingZIndex,
            floorZIndex,
            slantDirection
        }
    },
    CubeConfig = {}

class Cube extends PureComponent {

    static propTypes = {
        // Through Redux.
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
                ceilingZIndex,
                floorZIndex,
                slantDirection
            } = this.props,
            xCharIndex = getCharStringForNumber(xIndex)

        return (

            // Individual cubes need to be svgs in order to have a stacking order.
            <Svg
                className={cx(
                    'Cube',

                    /**
                     * These classes are used to determine cube zIndex and face
                     * shading.
                     */
                    `y${yIndex}`,
                    `x${xCharIndex}`,

                    'abF'
                )}
            >
                {FACES.map(face => (
                    <Face
                        key={face}
                        {...{
                            slantDirection,
                            level: CEILING,
                            yIndex,
                            xIndex,
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
