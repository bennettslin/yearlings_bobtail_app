// A single row of cubes.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Cube from './Cube'

import {
    CUBE_X_INDICES,
    CUBE_Y_AXIS_LENGTH
} from 'constants/cubeIndex'

class Cubes extends Component {

    static propTypes = {
        // From parent.
        yIndex: PropTypes.number.isRequired
    }

    shouldComponentUpdate() {
        return false
    }

    render() {
        const {
            yIndex
        } = this.props

        return (
            <div
                className={cx(
                    `Cubes__y${
                        yIndex
                    }${
                        yIndex === 0 ? '__back' : ''
                    }${
                        yIndex === CUBE_Y_AXIS_LENGTH - 1 ? '__front' : ''
                    }`,

                    'absoluteFullContainer'
                )}
            >
                {CUBE_X_INDICES.map(xIndex => (
                    <Cube
                        key={`${xIndex}_${yIndex}`}
                        {...{
                            xIndex,
                            yIndex
                        }}
                    />
                ))}
            </div>
        )
    }
}

export default Cubes
