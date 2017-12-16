// Section to show the stage illustrations.

import React from 'react'
import PropTypes from 'prop-types'
import { getArrayOfLength } from '../../helpers/general-helper'
import { getTileCornersForXYAndZ } from '../../helpers/stage-helper'

import { TILE_ROWS_LENGTH,
         TILE_COLUMNS_LENGTH } from '../../constants/stage'

import { DEFAULT_STAGE_TILES } from '../../constants/stageFloor'

const defaultProps = {
    tiles: DEFAULT_STAGE_TILES,
}

const propTypes = {
    tiles: PropTypes.shape({
        zIndices: PropTypes.arrayOf(
            PropTypes.arrayOf(
                PropTypes.number
            )
        ),
        colours: PropTypes.arrayOf(
            PropTypes.arrayOf(
                PropTypes.string
            )
        )
    }).isRequired
}

// TODO: Make indices in order of lowest in DOM to highest.
const rowIndicesArray = getArrayOfLength({
        length: TILE_ROWS_LENGTH
    }),
    columnIndicesArray = getArrayOfLength({
        length: TILE_COLUMNS_LENGTH
    })

const StageFloorField = ({

    tiles

}) => {

    const { zIndices, colours } = tiles

    return (
        <div className="stage-floor-field">

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
                                coloursRowArray[coloursRowArray.length - 1],

                            corners = getTileCornersForXYAndZ(
                                xIndex, yIndex, zIndex
                            )

                        return (
                            <div
                                key={`${xIndex}_${yIndex}`}
                            >
                                {corners.map((corner, cornerIndex) => {
                                    const { xPercentage,
                                            yPercentage } = corner

                                    return (
                                        <div
                                            key={cornerIndex}
                                            className="test-floor-panel-pixel"
                                            style={{
                                                left: xPercentage + '%',
                                                bottom: yPercentage + '%',
                                                backgroundColor: colour
                                            }}
                                        />
                                    )
                                })}
                            </div>
                        )
                    })
                )
            })}
        </div>
    )
}

StageFloorField.defaultProps = defaultProps
StageFloorField.propTypes = propTypes

export default StageFloorField
