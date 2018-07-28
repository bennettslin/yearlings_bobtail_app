// A single row of cubes.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import cx from 'classnames'

import {
    setRenderableCubesYIndex,
    setCanRenderPresences
} from '../../../redux/actions/render'

import Svg from '../../Svg/Svg'
import Cube from './Cube'

import { DEFAULT_X_AXIS_INDICES,
         SLANTED_LEFT_X_AXIS_INDICES,
         SLANTED_RIGHT_X_AXIS_INDICES } from '../constants'

import { getCubesForKey } from '../sceneDataHelper'

import { CUBE_Y_AXIS_LENGTH } from '../../../constants/stage'

const mapStateToProps = ({
    renderableCubesYIndex,
    canSceneRender,
    canTheatreRender
}) => ({
    renderableCubesYIndex,
    canSceneRender,
    canTheatreRender
})

class Cubes extends Component {

    static propTypes = {
        // Through Redux.
        canSceneRender: PropTypes.bool.isRequired,
        canTheatreRender: PropTypes.bool.isRequired,
        renderableCubesYIndex: PropTypes.number.isRequired,
        setRenderableCubesYIndex: PropTypes.func.isRequired,
        setCanRenderPresences: PropTypes.func.isRequired,

        // From parent.
        yIndex: PropTypes.number.isRequired,
        isFloor: PropTypes.bool,
        cubesKey: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props)

        this.state = {
            hasMounted: false
        }

        this._setRenderableCubesYIndex =
            this._setRenderableCubesYIndex.bind(this)
        this._setCanRenderPresences =
            this._setCanRenderPresences.bind(this)
    }

    shouldComponentUpdate(nextProps) {
        const {
                yIndex,
                renderableCubesYIndex
            } = nextProps,

            {
                hasMounted
            } = this.state,

            isRenderableYIndex = yIndex <= renderableCubesYIndex

        return hasMounted ?
            isRenderableYIndex && nextProps.canSceneRender :
            nextProps.canTheatreRender
    }

    componentDidUpdate(prevProps) {
        const {
                yIndex,
                canSceneRender,
                canTheatreRender,
                renderableCubesYIndex
            } = this.props,

            {
                canSceneRender: couldSceneRender,
                canTheatreRender: couldTheatreRender,
                renderableCubesYIndex: previousRenderableCubesYIndex
            } = prevProps,

            { hasMounted } = this.state

        /**
         * If component is just getting mounted and we are rendering with
         * Theatre, do nothing. This conditional is just for logging, for now.
         */
        if (!hasMounted && canTheatreRender && !couldTheatreRender) {
            if (this.props.isFloor && yIndex === 0) {
                logger.warn('Cubes initially rendered with default tiles.')
            }

        // Otherwise, render next Cubes yIndex if...
        } else if (
            // ... component has mounted and scene is just now renderable...
            (hasMounted && canSceneRender && !couldSceneRender) ||

            // ... or this is the most recent yIndex to be rendered.
            (
                yIndex === renderableCubesYIndex &&
                yIndex > previousRenderableCubesYIndex
            )
        ) {
            this._updateNextRender()
        }

        if (!hasMounted) {
            if (canTheatreRender && !couldTheatreRender) {

                /**
                 * Once component has mounted, render it again, and ever
                 * afterwards, with Scene rather than Theatre.
                 */
                this.setState({
                    hasMounted: true
                })
            }
        }
    }

    _updateNextRender({
        // TODO: Set timeout only when rendering from new cubesKey.
        doSetTimeout = true
    } = {}) {

        const {
            isFloor,
            yIndex,
            renderableCubesYIndex
        } = this.props

        /**
         * Only one component should make this call.
         */
        if (
            isFloor &&
            yIndex === renderableCubesYIndex
        ) {

            /**
             * Render the next Cubes yIndex only if there is a yIndex left to
             * render.
             */
            const shouldRenderNextCubes =
                yIndex < CUBE_Y_AXIS_LENGTH - 1,

                timeoutCallback = shouldRenderNextCubes ?
                    this._setRenderableCubesYIndex :
                    this._setCanRenderPresences

            if (doSetTimeout) {
                setTimeout(
                    timeoutCallback,
                    0
                )
            } else {
                timeoutCallback()
            }

            /**
             * The timeouts seem to add 0.5 seconds to the total render time. I
             * think this is acceptable, at least for now.
             */
        }
    }

    _setRenderableCubesYIndex() {
        this.props.setRenderableCubesYIndex(
            this.props.yIndex + 1
        )
    }

    _setCanRenderPresences() {
        logger.warn('Cubes rendered.')

        this.props.setCanRenderPresences(true)

        this.props.setRenderableCubesYIndex(
            this.props.yIndex + 1
        )
    }

    render() {
        const {
                yIndex,
                isFloor,
                cubesKey,
                canSceneRender,
                renderableCubesYIndex
            } = this.props,

            {
                slantDirection = ''
            } = getCubesForKey(cubesKey),

            /**
             * TODO: At present, this doesn't seem to do the transitions
             * desired.
             */

            isCurrentlyRendering =
                canSceneRender &&
                yIndex === renderableCubesYIndex

        return (
            <CubesView
                {...{
                    yIndex,
                    isFloor,
                    slantDirection,
                    cubesKey,
                    isCurrentlyRendering
                }}
            />
        )
    }
}

const CubesViewPropTypes = {
    yIndex: PropTypes.number.isRequired,
    isFloor: PropTypes.bool,
    slantDirection: PropTypes.string.isRequired,
    cubesKey: PropTypes.string.isRequired,
    isCurrentlyRendering: PropTypes.bool.isRequired
}

const CubesView = ({

    yIndex,
    isFloor,
    slantDirection,
    cubesKey,
    isCurrentlyRendering

}) => {

    let columnIndicesArray = DEFAULT_X_AXIS_INDICES

    if (slantDirection === 'left') {
        columnIndicesArray = SLANTED_LEFT_X_AXIS_INDICES;

    } else if (slantDirection === 'right') {
        columnIndicesArray = SLANTED_RIGHT_X_AXIS_INDICES
    }

    return (
        <Svg
            className={cx(
                `Cubes__y${yIndex}${yIndex === 0 ? '__back' : ''}${yIndex === CUBE_Y_AXIS_LENGTH - 1 ? '__front' : ''}`,
                `Cubes__${isFloor ? 'floor' : 'ceiling'}`,
                isCurrentlyRendering && 'Cubes__currentlyRendering',
                'absoluteFullContainer'
            )}
        >
            {columnIndicesArray.map(xIndex => (
                <Cube
                    key={`${xIndex}_${yIndex}`}
                    {...{
                        isFloor,
                        xIndex,
                        yIndex,
                        cubesKey,
                        slantDirection
                    }}
                />
            ))}
        </Svg>
    )
}

CubesView.propTypes = CubesViewPropTypes

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        setRenderableCubesYIndex,
        setCanRenderPresences
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(Cubes)
