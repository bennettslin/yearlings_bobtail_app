// A single pair of ceiling and floor cubes.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

import CubeFillStyle from './CubeFillStyle'

import FacesShadeFillStyle from './Face/FacesShadeFillStyle'
import FacesZIndexStyle from './Face/FacesZIndexStyle'
import Face from './Face/Face'

import { getCharStringForNumber } from 'helpers/formatHelper'

import {
    FACES
} from '../sceneConstants'

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
            <CubeFillStyle
                {...{
                    xIndex,
                    yIndex
                }}
            />

            <FacesZIndexStyle
                {...{
                    xIndex,
                    yIndex
                }}
            />

            <FacesShadeFillStyle
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
