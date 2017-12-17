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

            centrePointFromLeft = stageLeft + (stageWidth / 2),

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
                centrePointFromLeft
            },

            balconyFieldCoordinates = {
                top: theatreCeilingHeight,
                height: theatreBalconyHeight,
                leftWidth: stageLeft,
                rightWidth: windowWidth - stageLeft - stageWidth
            },

            seatingFieldCoordinates = {
                height: theatreSeatingHeight,
                centrePointFromLeft
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
                    seatingFieldCoordinates={seatingFieldCoordinates}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps)(TheatreSection)
