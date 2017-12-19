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
                stageCentreFromLeft
            },

            balconyFieldCoordinates = {
                top: theatreCeilingHeight,
                height: theatreBalconyHeight,
                leftWidth: stageLeft,
                rightWidth: windowWidth - stageLeft - stageWidth
            },

            seatingFieldCoordinates = {
                height: theatreSeatingHeight,
                firstRowSeatWidth: stageWidth / 12, // Arbitrary constant for now.
                stageCentreFromLeft
            },

            prosceniumSideWidth = stageWidth * 0.05, // Arbitrary value for now,
            prosceniumTopHeight = stageHeight * 0.05,
            prosceniumBottomHeight = stageHeight * 0.05,
            prosceniumWidth = stageWidth + prosceniumSideWidth * 2,
            prosceniumPositionLeft = stageCentreFromLeft - prosceniumWidth / 2,

            prosceniumTopStyle = {
                width: `${prosceniumWidth}px`,
                height: `${prosceniumTopHeight}px`,
                left: `${prosceniumPositionLeft}px`
            },

            prosceniumBottomStyle = {
                width: `${prosceniumWidth}px`,
                height: `${prosceniumBottomHeight}px`,
                left: `${prosceniumPositionLeft}px`
            },

            prosceniumSideStyle = {
                width: prosceniumSideWidth
            }

        return (
            <div className="section theatre-section">
                <TheatreCeilingField
                    ceilingFieldCoordinates={ceilingFieldCoordinates}
                    prosceniumTopStyle={prosceniumTopStyle}
                />
                <TheatreBalconyField
                    balconyFieldCoordinates={balconyFieldCoordinates}
                    prosceniumSideStyle={prosceniumSideStyle}
                />
                <TheatreBalconyField
                    isRight
                    balconyFieldCoordinates={balconyFieldCoordinates}
                    prosceniumSideStyle={prosceniumSideStyle}
                />
                <TheatreSeatingField
                    seatingFieldCoordinates={seatingFieldCoordinates}
                    prosceniumBottomStyle={prosceniumBottomStyle}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps)(TheatreSection)
