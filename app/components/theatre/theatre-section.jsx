// Section to show the stage illustrations.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import TheatreBalconyField from './theatre-balcony-field'
import TheatreCeilingField from './theatre-ceiling-field'
import TheatreSeatingField from './theatre-seating-field'

import { getCentreFieldHeight,
         getTheatreCeilingHeight,
         getTheatreSeatingHeight } from '../../helpers/stage-helper'

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
        })
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

            theatreSeatingHeight = getTheatreSeatingHeight({
                deviceIndex,
                windowHeight,
                centreFieldHeight,
                stageHeight,
                stageTop,
                isHeightlessLyricColumn
            }),

            theatreBalconyHeight = windowHeight - theatreCeilingHeight - theatreSeatingHeight,

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

            seatingFieldCoordinates = {
                height: theatreSeatingHeight,
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
                <TheatreSeatingField
                    windowWidth={windowWidth}
                    seatingFieldCoordinates={seatingFieldCoordinates}
                    pitStyle={pitStyle}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps)(TheatreSection)
