// A single row of tiles.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import DynamicSvg from '../../DynamicSvg/DynamicSvg'
import TilesCube from './TilesCube'

import { DEFAULT_COLUMN_INDICES,
         SLANTED_LEFT_COLUMN_INDICES,
         SLANTED_RIGHT_COLUMN_INDICES } from '../constants'

import { TILE_ROWS_LENGTH } from '../../../constants/stage'

const defaultProps = {
    slantDirection: ''
}

const propTypes = {
    rawYIndex: PropTypes.number.isRequired,
    isFloor: PropTypes.bool,
    slantDirection: PropTypes.string.isRequired,
    zIndices: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.number
        ).isRequired
    ).isRequired,
    colours: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.string
        ).isRequired
    ).isRequired,
    stageWidth: PropTypes.number.isRequired,
    stageHeight: PropTypes.number.isRequired
}

const Tiles = ({

    rawYIndex,
    zIndices,
    colours,
    isFloor,
    slantDirection,
    stageWidth,
    stageHeight

}) => {

    // Use last row array if no row array for this y-index.
    const zIndicesRowArray = zIndices.length > rawYIndex ?
            zIndices[rawYIndex] :
            zIndices[zIndices.length - 1],

        coloursRowArray = colours.length > rawYIndex ?
            colours[rawYIndex] :
            colours[colours.length - 1]

    /**
     * Invert the rows, since top row in array should be top row
     * shown in floor field.
     */
    const yIndex = TILE_ROWS_LENGTH - rawYIndex - 1

    let columnIndicesArray = DEFAULT_COLUMN_INDICES

    if (slantDirection === 'left') {
        columnIndicesArray = SLANTED_LEFT_COLUMN_INDICES;

    } else if (slantDirection === 'right') {
        columnIndicesArray = SLANTED_RIGHT_COLUMN_INDICES
    }

    return (
        <DynamicSvg
            className={cx(
                'Tiles',
                `Tiles__row__${rawYIndex}`,
                'absoluteFullContainer'
            )}
            viewBoxWidth={stageWidth}
            viewBoxHeight={stageHeight}
        >
            {columnIndicesArray.map(xIndex => {

                // Use previous entry if no entry for this x-index.
                const zIndex = zIndicesRowArray.length > xIndex ?
                        zIndicesRowArray[xIndex] :
                        zIndicesRowArray[zIndicesRowArray.length - 1],

                    colour = coloursRowArray.length > xIndex ?
                        coloursRowArray[xIndex] :
                        coloursRowArray[coloursRowArray.length - 1]

                return (
                    <TilesCube
                        key={`${xIndex}_${yIndex}`}
                        xIndex={xIndex}
                        yIndex={yIndex}
                        zIndex={zIndex}
                        colour={colour}
                        isFloor={isFloor}
                        slantDirection={slantDirection}
                        stageWidth={stageWidth}
                        stageHeight={stageHeight}
                    />
                )
            })}
        </DynamicSvg>
    )
}

Tiles.defaultProps = defaultProps
Tiles.propTypes = propTypes

export default Tiles
