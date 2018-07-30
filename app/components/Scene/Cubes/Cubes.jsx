// A single row of cubes.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../Svg/Svg'
import Cube from './Cube'

import {
    DEFAULT_X_AXIS_INDICES
        //  SLANTED_LEFT_X_AXIS_INDICES,
        //  SLANTED_RIGHT_X_AXIS_INDICES
} from '../constants'

import { CUBE_Y_AXIS_LENGTH } from '../../../constants/stage'

class Cubes extends Component {

    static propTypes = {
        // From parent.
        yIndex: PropTypes.number.isRequired,
        isFloor: PropTypes.bool
    }

    shouldComponentUpdate() {
        return false
    }

    render() {
        const {
                yIndex,
                isFloor
            } = this.props

        let columnIndicesArray = DEFAULT_X_AXIS_INDICES

        // TODO: Allow xAxisIndices to be set without slantDirection as prop.
        // if (slantDirection === 'left') {
        //     columnIndicesArray = SLANTED_LEFT_X_AXIS_INDICES;

        // } else if (slantDirection === 'right') {
        //     columnIndicesArray = SLANTED_RIGHT_X_AXIS_INDICES
        // }

        return (
            <Svg
                className={cx(
                    `Cubes__y${yIndex}${yIndex === 0 ? '__back' : ''}${yIndex === CUBE_Y_AXIS_LENGTH - 1 ? '__front' : ''}`,
                    `Cubes__${isFloor ? 'floor' : 'ceiling'}`,
                    'absoluteFullContainer'
                )}
            >
                {columnIndicesArray.map(xIndex => (
                    <Cube
                        key={`${xIndex}_${yIndex}`}
                        {...{
                            isFloor,
                            xIndex,
                            yIndex
                        }}
                    />
                ))}
            </Svg>
        )
    }
}

export default Cubes
