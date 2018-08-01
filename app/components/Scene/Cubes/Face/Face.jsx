import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

// import Pixels from './Pixel/Pixels'

import {
    getChildClassNameForFaceLogic
} from './helpers/faceHelper'

import {
    TILE
} from '../../constants'

const propTypes = {
    // From parent.
    face: PropTypes.string.isRequired,
    xIndex: PropTypes.number.isRequired,
    yIndex: PropTypes.number.isRequired
}

const Face = ({

    face,
    xIndex,
    yIndex

}) => {

    const

        ceilingFaceClassName = getChildClassNameForFaceLogic({
            face,
            isFloor: false,
            xIndex,
            yIndex
        }),

        floorFaceClassName = getChildClassNameForFaceLogic({
            face,
            isFloor: true,
            xIndex,
            yIndex
        })

    // This component never updates because its parent never updates.
    return (
        <g className={cx(
            'Face',

            // Used just to find in the DOM.
            `Face__${face}`
        )}>

            {/* Faces without pixels are white by default. */}
            <path
                className={cx(
                    'Face__path',
                    ceilingFaceClassName,
                    'Face__undercoat'
                )}
            />
            <path
                className={cx(
                    'Face__path',
                    floorFaceClassName,
                    'Face__undercoat'
                )}
            />

            {/* Floor and ceiling share the same set of pixels. */}
            {/* {isFloor && (
                <Pixels
                    {...{
                        face,
                        xIndex,
                        yIndex
                    }}
                />
            )} */}

            {/* Single polygon for the overlying shade. */}
            <path
                className={cx(
                    ceilingFaceClassName,
                    'Face__path',
                    'Face__shade',
                    `Face__shade__${face}`,
                    face === TILE && 'Face__shade__ceilingTile'
                )}
            />
            <path
                className={cx(
                    floorFaceClassName,
                    'Face__path',
                    'Face__shade',
                    `Face__shade__${face}`,
                    face === TILE && 'Face__shade__floorTile'
                )}
            />
        </g>
    )
}

Face.propTypes = propTypes

export default Face
