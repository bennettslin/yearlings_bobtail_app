// Section to show the stage illustrations.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import TheatreWallField from './theatre-wall-field'
import TheatreCeilingField from './theatre-ceiling-field'
import TheatreFloorField from './theatre-floor-field'

import { getCentreFieldHeight,
         getTheatreCeilingHeight,
         getTheatreFloorHeight } from '../../helpers/stage-helper'

const mapStateToProps = ({
    isHeightlessLyricColumn,
    deviceIndex,
    stageCoordinates,
    windowHeight,
    windowWidth
}) => ({
    isHeightlessLyricColumn,
    deviceIndex,
    stageCoordinates,
    windowHeight,
    windowWidth
})

class TheatreSection extends Component {

    static propTypes = {
        stageCoordinates: PropTypes.shape({
            top: PropTypes.number.isRequired,
            left: PropTypes.number.isRequired,
            width: PropTypes.number.isRequired,
            height: PropTypes.number.isRequired
        }),
        deviceIndex: PropTypes.number.isRequired,
        isHeightlessLyricColumn: PropTypes.bool.isRequired,
        windowHeight: PropTypes.number.isRequired,
        windowWidth: PropTypes.number.isRequired
    }

    render() {
        const { isHeightlessLyricColumn,
                deviceIndex,
                stageCoordinates,
                windowWidth,
                windowHeight } = this.props,

            { top: stageTop,
              left: stageLeft,
              width: stageWidth,
              height: stageHeight } = stageCoordinates,

            centreFieldHeight = getCentreFieldHeight(
                deviceIndex,
                windowHeight,
                isHeightlessLyricColumn
            ),

            stageCentreFromLeft = stageLeft + (stageWidth / 2),

            theatreCeilingHeight = getTheatreCeilingHeight({
                deviceIndex,
                windowHeight,
                centreFieldHeight,
                stageTop,
                isHeightlessLyricColumn
            }),

            theatreFloorHeight = getTheatreFloorHeight({
                deviceIndex,
                windowHeight,
                centreFieldHeight,
                stageHeight,
                stageTop,
                isHeightlessLyricColumn
            }),

            theatreWallHeight = windowHeight - theatreCeilingHeight - theatreFloorHeight,

            ceilingFieldCoordinates = {
                ceilingHeight: theatreCeilingHeight,
                stageWidth,
                stageCentreFromLeft
            },

            wallFieldCoordinates = {
                ceilingHeight: theatreCeilingHeight,
                wallHeight: theatreWallHeight,
                stageHeight,
                leftWidth: stageLeft,
                rightWidth: windowWidth - stageLeft - stageWidth
            },

            floorFieldCoordinates = {
                floorHeight: theatreFloorHeight,
                stageWidth,
                stageCentreFromLeft
            },

            pitSideWidth = stageWidth * 0.05, // Arbitrary value for now,
            pitBottomHeight = stageHeight * 0.05,
            pitWidth = stageWidth + pitSideWidth * 2,
            pitPositionLeft = stageCentreFromLeft - pitWidth / 2,

            pitStyle = {
                width: `${pitWidth}px`,
                height: `${pitBottomHeight}px`,
                left: `${pitPositionLeft}px`
            }

        return (
            <div className="section theatre-section">
                <TheatreCeilingField
                    windowWidth={windowWidth}
                    ceilingFieldCoordinates={ceilingFieldCoordinates}
                />
                <TheatreWallField
                    windowHeight={windowHeight}
                    wallFieldCoordinates={wallFieldCoordinates}
                />
                <TheatreWallField
                    isRight
                    windowHeight={windowHeight}
                    wallFieldCoordinates={wallFieldCoordinates}
                />
                <TheatreFloorField
                    windowWidth={windowWidth}
                    floorFieldCoordinates={floorFieldCoordinates}
                    pitStyle={pitStyle}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps)(TheatreSection)
