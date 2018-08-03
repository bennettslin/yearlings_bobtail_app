// A single cube, whether ceiling or floor.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../Svg/Svg'

import CubeFacesStyle from './Face/FacesStyle'
import Face from './Face/Face'

import { getCharStringForNumber } from '../../../helpers/formatHelper'

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
        <Svg
            className={cx(
                // This class is used to determine face shading.
                `Cube__x${xCharIndex}`,
                `Cube__x${xCharIndex}y${yIndex}`,
                'absoluteFullContainer'
            )}
        >
            <CubeFacesStyle
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
