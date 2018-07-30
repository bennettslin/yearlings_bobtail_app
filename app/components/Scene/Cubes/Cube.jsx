// A single cube, whether ceiling or floor.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import CubeStyle from './CubeStyle'
import Face from './Face/Face'

import { getCharStringForNumber } from '../../../helpers/formatHelper'

import {
    FACES
} from '../constants'

class Cube extends Component {

    static propTypes = {

        // From parent.
        isFloor: PropTypes.bool,
        xIndex: PropTypes.number.isRequired,
        yIndex: PropTypes.number.isRequired
    }

    shouldComponentUpdate() {
        return false
    }

    render() {
        const {
                props
            } = this,

            {
                xIndex
            } = props

        return (
            <g
                className={cx(
                    // These classes are used to determine face shading.
                    `Cube__x${getCharStringForNumber(xIndex)}`
                    // `Cube__z${getCharStringForNumber(zIndex)}`
                )}
            >
                <CubeStyle {...props}
                />

                {FACES.map(face => (
                    <Face {...props}
                        key={face}
                        {...{
                            face
                        }}
                    />
                ))}
            </g>
        )
    }
}

export default Cube
