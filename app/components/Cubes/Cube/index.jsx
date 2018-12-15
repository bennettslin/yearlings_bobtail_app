// A single pair of ceiling and floor cubes.

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../Svg'

import Face from './Face'
import CubeColourStylesheet from './Stylesheets/CubeColour'
import FaceShadeStylesheet from './Stylesheets/FaceShade'
import FacePathsStylesheet from './Stylesheets/FacePaths'

import { getCharStringForNumber } from 'helpers/format'

import {
    FACES
} from 'constants/scene'

const propTypes = {

    // From parent.
    xIndex: PropTypes.number.isRequired,
    yIndex: PropTypes.number.isRequired
}

const Cube = memo(({
    xIndex,
    yIndex
}) => {

    const xCharIndex = getCharStringForNumber(xIndex)

    // This component never updates because its parent never updates.
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
            <CubeColourStylesheet {...{ xIndex, yIndex }} />
            <FaceShadeStylesheet {...{ xIndex, yIndex }} />
            <FacePathsStylesheet {...{ xIndex, yIndex }} />

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
})

Cube.propTypes = propTypes

export default Cube
