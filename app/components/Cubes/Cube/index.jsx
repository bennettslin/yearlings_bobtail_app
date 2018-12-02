// A single pair of ceiling and floor cubes.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../Svg'

import Face from './Face'
import CubeFillStylesheet from './Stylesheets/CubeFill'
import FaceFillStylesheet from './Stylesheets/FaceFill'
import FaceZIndexStylesheet from './Stylesheets/FaceZIndex'

import { getCharStringForNumber } from 'helpers/format'

import {
    FACES
} from 'constants/scene'

const propTypes = {

    // From parent.
    xIndex: PropTypes.number.isRequired,
    yIndex: PropTypes.number.isRequired
}

const Cube = ({
    xIndex,
    yIndex
}) => {

    const xCharIndex = getCharStringForNumber(xIndex)

    // This component never updates because its parent never updates.
    return (

        // Individual cubes need to be svgs in order to have a stacking order.
        <Svg
            className={cx(
                // This class is used to determine face shading.
                `Cube__x${xCharIndex}`,
                `Cube__x${xCharIndex}y${yIndex}`,
                'absoluteFullContainer'
            )}
        >
            <CubeFillStylesheet
                {...{
                    xIndex,
                    yIndex
                }}
            />

            <FaceZIndexStylesheet
                {...{
                    xIndex,
                    yIndex
                }}
            />

            <FaceFillStylesheet
                {...{
                    xIndex,
                    yIndex
                }}
            />

            {FACES.map(face => (
                <Face
                    key={face}
                    {...{
                        face,
                        xIndex,
                        yIndex
                    }}
                />
            ))}
        </Svg>
    )
}

Cube.propTypes = propTypes

export default Cube
