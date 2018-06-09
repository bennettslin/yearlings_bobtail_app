// A single row of tiles.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import DynamicSvg from '../../DynamicSvg/DynamicSvg'
import TileCube from './TileCube'

import { DEFAULT_COLUMN_INDICES,
         SLANTED_LEFT_COLUMN_INDICES,
         SLANTED_RIGHT_COLUMN_INDICES } from '../constants'

import { TILE_ROWS_LENGTH } from '../../../constants/stage'

import { getValueInAbridgedMatrix } from '../../../helpers/tilesHelper'

const propTypes = {
    yIndex: PropTypes.number.isRequired,
    isFloor: PropTypes.bool,
    zIndices: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.number.isRequired
        ).isRequired
    ).isRequired,
    bitmapKeys: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.string.isRequired
        ).isRequired
    ).isRequired,
    slantDirection: PropTypes.string.isRequired,
    stageWidth: PropTypes.number.isRequired,
    stageHeight: PropTypes.number.isRequired
}

const Tiles = ({

    yIndex,
    zIndices,
    bitmapKeys,
    isFloor,
    slantDirection,
    stageWidth,
    stageHeight

}) => {

    /**
     * Invert the rows, since top row in array should be top row
     * shown in floor field.
     */
    const invertedYIndex = TILE_ROWS_LENGTH - yIndex - 1

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
                `Tiles__row__${yIndex}`,
                'absoluteFullContainer'
            )}
            viewBoxWidth={stageWidth}
            viewBoxHeight={stageHeight}
        >
            {columnIndicesArray.map(xIndex => {

                const
                    zIndex = getValueInAbridgedMatrix(
                        zIndices, xIndex, yIndex
                    ),

                    bitmapKey = getValueInAbridgedMatrix(
                        bitmapKeys, xIndex, yIndex
                    )

                return (
                    <TileCube
                        key={`${xIndex}_${yIndex}`}
                        xIndex={xIndex}
                        yIndex={invertedYIndex}
                        zIndex={zIndex}
                        bitmapKey={bitmapKey}
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

Tiles.propTypes = propTypes

export default Tiles
