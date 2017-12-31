// Section to show the stage illustrations.

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { getArrayOfLength } from '../../helpers/general-helper'

import StageTile from './stage-tile'

import { TILE_ROWS_LENGTH,
         TILE_COLUMNS_LENGTH } from '../../constants/stage'

const propTypes = {
    isFloor: PropTypes.bool,
    zIndices: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.number
        ).isRequired
    ).isRequired,
    colours: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.string
        ).isRequired
    ).isRequired
}

// TODO: Make indices in order of lowest in DOM to highest.
const rowIndicesArray = getArrayOfLength({
        length: TILE_ROWS_LENGTH
    }),
    columnIndicesArray = getArrayOfLength({
        length: TILE_COLUMNS_LENGTH
    })

const StageTilesField = ({

    isFloor,
    zIndices,
    colours

}) => {

    return (
        <div className={classnames(
            'stage-tiles-field',
            isFloor ? 'stage-tiles-field' : 'stage-ceiling-field'
        )}>
            <div
                className={classnames(
                    'stage-tiles-wood',
                    isFloor ? 'stage-floor-wood' : 'stage-ceiling-wood'
                )}
            />

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
                            <StageTile
                                key={`${xIndex}_${yIndex}`}
                                xIndex={xIndex}
                                yIndex={yIndex}
                                zIndex={zIndex}
                                colour={colour}
                            />
                        )
                    })
                )
            })}
        </div>
    )
}

StageTilesField.propTypes = propTypes

export default StageTilesField
