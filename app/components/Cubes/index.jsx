// A single row of cubes.

import React, { Component, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import CubeConfig from './Cube'
import CubeColourStylesheet from './Stylesheets/CubeColour'

import { CUBE_X_INDICES } from 'constants/cubeIndex'

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

        return (
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
                        <___
                            key={`${xIndex}_${yIndex}`}
                        >
                            <CubeColourStylesheet {...{ xIndex, yIndex }} />
                            <Cube
                                {...{
                                    xIndex,
                                    yIndex
                                }}
                            />
                        </___>
                    )
                })}
            </div>
        )
    }
}

export default Cubes
