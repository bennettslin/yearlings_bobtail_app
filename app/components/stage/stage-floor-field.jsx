// Section to show the stage illustrations.

import React from 'react'
import PropTypes from 'prop-types'
import { getArrayOfLength } from '../../helpers/general-helper'
import { getFloorPanelCornersForXYAndZ } from '../../helpers/stage-helper'

import { DEFAULT_FLOOR_PANEL_Z_INDICES,
         DEFAULT_FLOOR_PANEL_COLOURS,
         FLOOR_PANEL_ROWS_LENGTH,
         FLOOR_PANEL_COLUMNS_LENGTH } from '../../constants/stage'

const defaultProps = {
    floorPanelZIndices: DEFAULT_FLOOR_PANEL_Z_INDICES,
    floorPanelColours: DEFAULT_FLOOR_PANEL_COLOURS
}

const propTypes = {
    floorPanelZIndices: PropTypes.arrayOf(
        PropTypes.arrayOf(PropTypes.number)
    ).isRequired,
    floorPanelColours: PropTypes.arrayOf(
        PropTypes.arrayOf(PropTypes.string)
    ).isRequired
}

const rowIndicesArray = getArrayOfLength({
        length: FLOOR_PANEL_ROWS_LENGTH
    }),
    columnIndicesArray = getArrayOfLength({
        length: FLOOR_PANEL_COLUMNS_LENGTH
    })

const StageFloorField = ({

    floorPanelZIndices,
    floorPanelColours

}) => {

    return (
        <div className="stage-floor-field">

            {rowIndicesArray.map(rawYIndex => {

                // Use last row array if no row array for this y-index.
                const zIndicesRowArray = floorPanelZIndices.length > rawYIndex ?
                        floorPanelZIndices[rawYIndex] :
                        floorPanelZIndices[floorPanelZIndices.length - 1],

                    coloursRowArray = floorPanelColours.length > rawYIndex ?
                        floorPanelColours[rawYIndex] :
                        floorPanelColours[floorPanelColours.length - 1]

                /**
                 * Invert the rows, since top row in array should be top row
                 * shown in floor field.
                 */
                const yIndex = FLOOR_PANEL_ROWS_LENGTH - rawYIndex - 1

                return (
                    columnIndicesArray.map(xIndex => {

                        // Use last entry if no entry for this x-index.
                        const zIndex = zIndicesRowArray.length > xIndex ?
                                zIndicesRowArray[xIndex] :
                                zIndicesRowArray[zIndicesRowArray.length - 1],

                            colour = coloursRowArray.length > xIndex ?
                                coloursRowArray[xIndex] :
                                coloursRowArray[coloursRowArray.length - 1],

                            corners = getFloorPanelCornersForXYAndZ(
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
