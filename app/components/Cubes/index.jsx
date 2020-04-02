// A single row of cubes.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import CubeConfig from './Cube'
import { CUBE_X_INDICES } from '../../constants/cubeIndex'
import { DEV_MAXIMUM_Y_INDEX_CUBES } from '../../constants/dev'

class Cubes extends Component {

    static propTypes = {
        // From parent.
        yIndex: PropTypes.number.isRequired
    }

    shouldComponentUpdate() {
        return false
    }

    render() {
        const { yIndex } = this.props

        return yIndex <= DEV_MAXIMUM_Y_INDEX_CUBES && (
            <div
                className={cx(
                    'Cubes',
                    `y${yIndex}`,
                    'abF'
                )}
            >
                {CUBE_X_INDICES.map(xIndex => {
                    const Cube = CubeConfig[yIndex][xIndex]

                    return (
                        <Cube
                            {...{
                                key: `${xIndex}_${yIndex}`,
                                xIndex,
                                yIndex
                            }}
                        />
                    )
                })}
            </div>
        )
    }
}

export default Cubes
