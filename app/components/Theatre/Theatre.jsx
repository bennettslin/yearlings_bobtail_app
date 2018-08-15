// Section to show the stage illustrations.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { connect } from 'react-redux'

import Stage from 'components/Stage/Stage'

import Wall from './Wall/Wall'
import Ceiling from './Ceiling/Ceiling'
import Floor from './Floor/Floor'

import { getCentreFieldHeight } from 'helpers/stageHelper'

import { getCeilingHeight,
         getFloorHeight } from './theatreHelper'

const mapStateToProps = ({
    canTheatreRender,
    isHeightlessLyricColumn,
    deviceStore: {
        deviceIndex,
        windowHeight,
        windowWidth,
        stageCoordinates
    }
}) => ({
    canTheatreRender,
    isHeightlessLyricColumn,
    deviceIndex,
    windowHeight,
    windowWidth,
    stageCoordinates
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
        }).isRequired,
        deviceIndex: PropTypes.number.isRequired,
        isHeightlessLyricColumn: PropTypes.bool.isRequired,
        windowHeight: PropTypes.number.isRequired,
        windowWidth: PropTypes.number.isRequired,

        // From parent.
        theatreDidRender: PropTypes.func.isRequired
    }

    state = {
        isShown: false,
        waitForShowTimeoutId: '',
        didRenderTimeoutId: ''
    }

    // No shouldComponentUpdate necessary.

    componentDidUpdate(prevProps) {
        const { canTheatreRender } = this.props,
            { canTheatreRender: couldRender } = prevProps

        if (canTheatreRender && !couldRender) {
            logger.warn('Theatre rendered.')

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

    _waitForShowBeforeRender = () => {
        this.setState({
            isShown: true
        })
    }

    render() {
        const {
                /* eslint-disable no-unused-vars */
                theatreDidRender,
                dispatch,
                /* eslint-enable no-unused-vars */

                canTheatreRender,
                isHeightlessLyricColumn,
                deviceIndex,
                windowWidth,
                windowHeight,
                stageCoordinates,
                ...other
            } = this.props,

            { isShown } = this.state,

            {
                top: stageTop,
                left: stageLeft,
                width: stageWidth,
                height: stageHeight
            } = stageCoordinates,

            centreFieldHeight = getCentreFieldHeight({
                deviceIndex,
                windowWidth,
                windowHeight,
                isHeightlessLyricColumn
            }),

            stageCentreFromLeft = stageLeft + (stageWidth / 2),

            ceilingHeight = getCeilingHeight({
                deviceIndex,
                windowHeight,
                centreFieldHeight,
                stageTop,
                isHeightlessLyricColumn
            }),

            floorHeight = getFloorHeight({
                deviceIndex,
                windowHeight,
                centreFieldHeight,
                stageHeight,
                stageTop,
                isHeightlessLyricColumn
            }),

            wallHeight = windowHeight - ceilingHeight - floorHeight,

            ceilingFieldCoordinates = {
                ceilingHeight,
                stageWidth,
                stageCentreFromLeft
            },

            wallFieldCoordinates = {
                ceilingHeight,
                wallHeight,
                stageHeight,
                leftWidth: stageLeft,
                rightWidth: windowWidth - stageLeft - stageWidth
            },

            floorFieldCoordinates = {
                floorHeight,
                stageWidth,
                stageCentreFromLeft
            }

        return (
            <div className={cx(
                'Theatre',
                'absoluteFullContainer',
                { 'parentIsShown': canTheatreRender && isShown }
            )}>
                <Ceiling
                    {...{ ceilingFieldCoordinates }}
                />
                <Wall
                    {...{ wallFieldCoordinates }}
                />
                <Wall
                    isRight
                    {...{ wallFieldCoordinates }}
                />

                <Stage {...other} />

                <Floor
                    {...{ floorFieldCoordinates }}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps)(Theatre)
