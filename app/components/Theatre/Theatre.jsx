// Section to show the stage illustrations.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { connect } from 'react-redux'

import Stage from '../Stage/Stage'

import TheatreWall from './TheatreWall'
import TheatreCeiling from './TheatreCeiling'
import TheatreFloor from './TheatreFloor'

import { getCentreFieldHeight } from '../../helpers/stageHelper'

import { getTheatreCeilingHeight,
         getTheatreFloorHeight } from './theatreHelper'

const mapStateToProps = ({
    canTheatreRender,
    isHeightlessLyricColumn,
    deviceIndex,
    stageCoordinates,
    windowHeight,
    windowWidth
}) => ({
    canTheatreRender,
    isHeightlessLyricColumn,
    deviceIndex,
    stageCoordinates,
    windowHeight,
    windowWidth
})

class Theatre extends Component {

    static propTypes = {
        // Through Redux.
        canTheatreRender: PropTypes.bool.isRequired,
        stageCoordinates: PropTypes.shape({
            top: PropTypes.number.isRequired,
            left: PropTypes.number.isRequired,
            width: PropTypes.number.isRequired,
            height: PropTypes.number.isRequired
        }),
        deviceIndex: PropTypes.number.isRequired,
        isHeightlessLyricColumn: PropTypes.bool.isRequired,
        windowHeight: PropTypes.number.isRequired,
        windowWidth: PropTypes.number.isRequired,

        // From parent.
        theatreDidRender: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        if (this.props.canTheatreRender && !prevProps.canTheatreRender) {
            console.warn('Theatre rendered.')

            setTimeout(
                this.props.theatreDidRender, 0
            )
        }
    }

    render() {
        const { isHeightlessLyricColumn,
                deviceIndex,
                stageCoordinates,
                windowWidth,
                windowHeight,
                canTheatreRender,
                ...other
             } = this.props,

            { top: stageTop,
              left: stageLeft,
              width: stageWidth,
              height: stageHeight } = stageCoordinates,

            centreFieldHeight = getCentreFieldHeight({
                deviceIndex,
                windowWidth,
                windowHeight,
                isHeightlessLyricColumn
            }),

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
            }

        return canTheatreRender ? (
            <div className={cx(
                'Theatre',
                'absoluteFullContainer'
            )}>
                <TheatreCeiling
                    windowWidth={windowWidth}
                    ceilingFieldCoordinates={ceilingFieldCoordinates}
                />
                <TheatreWall
                    windowHeight={windowHeight}
                    wallFieldCoordinates={wallFieldCoordinates}
                />
                <TheatreWall
                    isRight
                    windowHeight={windowHeight}
                    wallFieldCoordinates={wallFieldCoordinates}
                />

                <Stage {...other} />

                <TheatreFloor
                    windowWidth={windowWidth}
                    floorFieldCoordinates={floorFieldCoordinates}
                />
            </div>
        ) : null
    }
}

export default connect(mapStateToProps)(Theatre)
