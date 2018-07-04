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

    constructor(props) {
        super(props)

        this.state = {
            isShown: false,
            waitForShowTimeoutId: '',
            didRenderTimeoutId: ''
        }

        this._waitForShowBeforeRender = this._waitForShowBeforeRender.bind(this)
    }

    // No shouldComponentUpdate necessary.

    componentDidUpdate(prevProps) {
        const { canTheatreRender } = this.props,
            { canTheatreRender: couldRender } = prevProps

        if (canTheatreRender && !couldRender) {
            console.warn('Theatre rendered.')

            clearTimeout(this.state.waitForShowTimeoutId)
            clearTimeout(this.state.didRenderTimeoutId)

            const
                // Set timeout to prevent children transitions before render.
                waitForShowTimeoutId = setTimeout(
                    this._waitForShowBeforeRender, 50
                ),
                // Wait for parent transition before continuing render sequence.
                didRenderTimeoutId = setTimeout(
                    this.props.theatreDidRender, 100
                )

            this.setState({
                waitForShowTimeoutId,
                didRenderTimeoutId
            })

        } else if (couldRender && !canTheatreRender) {

            this.setState({
                isShown: false
            })
        }
    }

    _waitForShowBeforeRender() {
        this.setState({
            isShown: true
        })
    }

    render() {
        const {
                isHeightlessLyricColumn,
                deviceIndex,
                stageCoordinates,
                windowWidth,
                windowHeight,
                canTheatreRender,
                ...other
            } = this.props,

            { isShown } = this.state,

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

        return (
            <div className={cx(
                'Theatre',
                'absoluteFullContainer',
                { 'parentIsShown': canTheatreRender && isShown }
            )}>
                <TheatreCeiling
                    {...{ ceilingFieldCoordinates }}
                />
                <TheatreWall
                    {...{ wallFieldCoordinates }}
                />
                <TheatreWall
                    isRight
                    {...{ wallFieldCoordinates }}
                />

                <Stage {...other} />

                <TheatreFloor
                    {...{ floorFieldCoordinates }}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps)(Theatre)
