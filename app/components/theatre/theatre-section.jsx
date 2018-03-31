// Section to show the stage illustrations.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import TheatreBalconyField from './theatre-balcony-field'
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

            theatreBalconyHeight = windowHeight - theatreCeilingHeight - theatreFloorHeight,

            ceilingFieldCoordinates = {
                height: theatreCeilingHeight,
                stageWidth,
                stageCentreFromLeft
            },

            balconyFieldCoordinates = {
                top: theatreCeilingHeight,
                height: theatreBalconyHeight,
                stageHeight,
                leftWidth: stageLeft,
                rightWidth: windowWidth - stageLeft - stageWidth
            },

            floorFieldCoordinates = {
                height: theatreFloorHeight,
                stageWidth,
                windowWidth,
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
                    ceilingFieldCoordinates={ceilingFieldCoordinates}
                />
                <TheatreBalconyField
                    balconyFieldCoordinates={balconyFieldCoordinates}
                />
                <TheatreBalconyField
                    isRight
                    balconyFieldCoordinates={balconyFieldCoordinates}
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
