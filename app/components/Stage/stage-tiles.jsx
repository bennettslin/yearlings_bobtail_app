// Section to show the stage illustrations.

import React from 'react'
import PropTypes from 'prop-types'
import { getArrayOfLength } from '../../helpers/general-helper'

import DynamicSvg from '../DynamicSvg/DynamicSvg'

import StageCube from './stage-cube'

import { TILE_ROWS_LENGTH,
         TILE_COLUMNS_LENGTH } from '../../constants/stage'

const propTypes = {
    isFloor: PropTypes.bool.isRequired,
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

const rowIndicesArray = getArrayOfLength({
        length: TILE_ROWS_LENGTH
    }),

    SLANTED_RIGHT_COLUMN_INDICES = getArrayOfLength({
        length: TILE_COLUMNS_LENGTH
    }),

    SLANTED_LEFT_COLUMN_INDICES = SLANTED_RIGHT_COLUMN_INDICES
        .slice().reverse(),

    /**
     * Returns array of indices that start from the ends and move towards the
     * centre, alternating between left and right. This allows the tiles that
     * overlap other tiles to be ordered correctly in the DOM.
     *
     * If length is 12, should return [0, 11, 1, 10, 2, 9, 3, 8, 4, 7, 5, 6].
     */
    DEFAULT_COLUMN_INDICES = SLANTED_RIGHT_COLUMN_INDICES.map(columnIndex => {

        const ceilValue = Math.ceil(columnIndex / 2)

        return columnIndex % 2 ?
            TILE_COLUMNS_LENGTH - ceilValue : ceilValue
    })

const StageTiles = ({

    zIndices,
    colours,
    isFloor,
    slantDirection,
    stageWidth,
    stageHeight

}) => (
    <DynamicSvg
        className="stage-tiles"
        viewBoxWidth={stageWidth}
        viewBoxHeight={stageHeight}
    >
        {rowIndicesArray.map(rawYIndex => {

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
                columnIndicesArray.map(xIndex => {

                    // Use last entry if no entry for this x-index.
                    const zIndex = zIndicesRowArray.length > xIndex ?
                            zIndicesRowArray[xIndex] :
                            zIndicesRowArray[zIndicesRowArray.length - 1],

                        colour = coloursRowArray.length > xIndex ?
                            coloursRowArray[xIndex] :
                            coloursRowArray[coloursRowArray.length - 1]

                    return (
                        <StageCube
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
                })
            )
        })}
    </DynamicSvg>
)
StageTiles.propTypes = propTypes

export default StageTiles
