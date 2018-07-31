// A single cube, whether ceiling or floor.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../Svg/Svg'

import CubeFacesStyle from './CubeFacesStyle'
import Face from './Face/Face'

import { getCharStringForNumber } from '../../../helpers/formatHelper'

import {
    FACES
} from '../constants'

const propTypes = {

    // From parent.
    isFloor: PropTypes.bool,
    xIndex: PropTypes.number.isRequired,
    yIndex: PropTypes.number.isRequired
}

const Cube = (
    props
) => {

    const {
            xIndex,
            yIndex,
        } = props,

        xCharIndex = getCharStringForNumber(xIndex)

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
            <CubeFacesStyle {...props} />

            {FACES.map(face => (
                <Face {...props}
                    key={face}
                    {...{
                        face
                    }}
                />
            ))}
        </Svg>
    )
}

Cube.propTypes = propTypes

export default Cube
