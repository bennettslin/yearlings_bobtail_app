// Section to show the stage illustrations.

import React from 'react'
import PropTypes from 'prop-types'
import { getFloorPanelCornersForXYAndElevation } from '../../helpers/stage-helper'

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

const StageFloorField = ({

    floorPanels

}) => (
    <div className="stage-floor-field">

        {/* Enforce six rows. */}
        {floorPanels.length === FLOOR_PANEL_ROWS_LENGTH &&
         floorPanels.map((rowArray, rawYIndex) => {

            // Top row in array should be top row shown in floor field.
             const yIndex = FLOOR_PANEL_ROWS_LENGTH - rawYIndex - 1

             return (
                // Enforce twelve columns.
                rowArray.length === FLOOR_PANEL_COLUMNS_LENGTH &&
                rowArray.map((elevation, xIndex) => {

                    const corners = getFloorPanelCornersForXYAndElevation(
                        xIndex, yIndex, elevation
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

StageFloorField.defaultProps = defaultProps
StageFloorField.propTypes = propTypes

export default StageFloorField
