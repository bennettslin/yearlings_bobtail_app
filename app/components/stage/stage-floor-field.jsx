// Section to show the stage illustrations.

import React from 'react'
import PropTypes from 'prop-types'
import { getArrayOfLength } from '../../helpers/general-helper'
import { getFloorPanelCornersForXYAndZ } from '../../helpers/stage-helper'

import { DEFAULT_FLOOR_PANELS_MATRIX,
         FLOOR_PANEL_ROWS_LENGTH,
         FLOOR_PANEL_COLUMNS_LENGTH } from '../../constants/stage'

const defaultProps = {
    floorPanels: DEFAULT_FLOOR_PANELS_MATRIX
}

const propTypes = {
    floorPanels: PropTypes.arrayOf(
        PropTypes.arrayOf(PropTypes.number)
    ).isRequired
}

const rowIndicesArray = getArrayOfLength({
        length: FLOOR_PANEL_ROWS_LENGTH
    }),
    columnIndicesArray = getArrayOfLength({
        length: FLOOR_PANEL_COLUMNS_LENGTH
    })

const StageFloorField = ({

    floorPanels

}) => {

    return (
        <div className="stage-floor-field">

            {rowIndicesArray.map(rawYIndex => {

                // Use last row array if no row array for this y-index.
                const rowArray = floorPanels.length > rawYIndex ?
                    floorPanels[rawYIndex] : floorPanels[floorPanels.length - 1]

                /**
                 * Invert the rows, since top row in array should be top row
                 * shown in floor field.
                 */
                const yIndex = FLOOR_PANEL_ROWS_LENGTH - rawYIndex - 1

                return (
                    columnIndicesArray.map(xIndex => {

                        // Use last entry if no entry for this x-index.
                        const zIndex = rowArray.length > xIndex ?
                            rowArray[xIndex] : rowArray[rowArray.length - 1]

                        const corners = getFloorPanelCornersForXYAndZ(
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
                                                bottom: yPercentage + '%'
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
