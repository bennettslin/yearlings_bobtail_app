// Section to show the stage illustrations.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { connect } from 'react-redux'

import Scene from '../Scene'
import Stage from '../Stage'
import Proscenium from '../Stage/Proscenium'

import Wall from './Wall'
import Ceiling from './Ceiling'
import Floor from './Floor'

import { getCentreFieldHeight } from 'helpers/stageHelper'

import {
    getCeilingHeight,
    getFloorHeight
} from './helper'

const mapStateToProps = ({
    renderStore: { canTheatreRender },
    responsiveStore: { isHiddenLyric },
    deviceStore: {
        deviceIndex,
        windowHeight,
        windowWidth,
        stageCoordinates
    }
}) => ({
    canTheatreRender,
    isHiddenLyric,
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
        isHiddenLyric: PropTypes.bool.isRequired,
        windowHeight: PropTypes.number.isRequired,
        windowWidth: PropTypes.number.isRequired,

        // From parent.
        theatreDidRender: PropTypes.func.isRequired
    }

    state = {
        isShown: false,
        didRenderTimeoutId: '',
        waitForShowTimeoutId: ''
    }

    // No shouldComponentUpdate necessary.

    componentDidUpdate(prevProps) {
        const { canTheatreRender } = this.props,
            { canTheatreRender: couldRender } = prevProps

        if (canTheatreRender && !couldRender) {
            logger.warn('Theatre rendered.')

            clearTimeout(this.state.didRenderTimeoutId)
            clearTimeout(this.state.waitForShowTimeoutId)

            const
                // Wait for parent transition before continuing render sequence.
                didRenderTimeoutId = setTimeout(
                    this.props.theatreDidRender, 100
                ),
                // Set timeout to prevent children transitions before render.
                waitForShowTimeoutId = setTimeout(
                    this._waitForShowBeforeRender, 50
                )

            this.setState({
                didRenderTimeoutId,
                waitForShowTimeoutId
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
                isHiddenLyric,
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
                isHiddenLyric
            }),

            stageCentreFromLeft = stageLeft + (stageWidth / 2),

            ceilingHeight = getCeilingHeight({
                deviceIndex,
                windowHeight,
                centreFieldHeight,
                stageTop,
                isHiddenLyric
            }),

            floorHeight = getFloorHeight({
                deviceIndex,
                windowHeight,
                centreFieldHeight,
                stageHeight,
                stageTop,
                isHiddenLyric
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
                { 'parent__shown': canTheatreRender && isShown }
            )}>

                {/* Scene is behind theatre due to presence transitions. */}
                <Stage>
                    <Scene {...other} />
                </Stage>

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

                <Stage>
                    <Proscenium />
                </Stage>

                <Floor
                    {...{ floorFieldCoordinates }}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps)(Theatre)
