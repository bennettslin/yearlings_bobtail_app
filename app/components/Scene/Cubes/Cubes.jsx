// A single row of cubes.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import cx from 'classnames'

import {
    setCanRenderPresences
} from '../../../redux/actions/render'

import Svg from '../../Svg/Svg'
import Cube from './Cube'

import {
    DEFAULT_X_AXIS_INDICES
        //  SLANTED_LEFT_X_AXIS_INDICES,
        //  SLANTED_RIGHT_X_AXIS_INDICES
} from '../constants'

import { CUBE_Y_AXIS_LENGTH } from '../../../constants/stage'

const mapStateToProps = ({
    canSceneRender,
    canTheatreRender
}) => ({
    canSceneRender,
    canTheatreRender
})

class Cubes extends Component {

    static propTypes = {
        // Through Redux.
        canSceneRender: PropTypes.bool.isRequired,
        setCanRenderPresences: PropTypes.func.isRequired,

        // From parent.
        yIndex: PropTypes.number.isRequired,
        isFloor: PropTypes.bool
    }

    constructor(props) {
        super(props)

        this._setCanRenderPresences =
            this._setCanRenderPresences.bind(this)
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canSceneRender
    }

    componentDidUpdate(prevProps) {
        const {
                canSceneRender,
            } = this.props,

            {
                canSceneRender: couldSceneRender,
            } = prevProps

        if (
            // ... component has mounted and scene is just now renderable...
            (canSceneRender && !couldSceneRender)
        ) {
            this._setCanRenderPresences()
        }
    }

    _setCanRenderPresences() {
        logger.warn('Cubes rendered.')

        this.props.setCanRenderPresences(true)
    }

    render() {
        const {
                yIndex,
                isFloor
            } = this.props

        return (
            <CubesView
                {...{
                    yIndex,
                    isFloor
                }}
            />
        )
    }
}

const CubesViewPropTypes = {
    yIndex: PropTypes.number.isRequired,
    isFloor: PropTypes.bool
}

const CubesView = ({

    yIndex,
    isFloor

}) => {

    let columnIndicesArray = DEFAULT_X_AXIS_INDICES

    // if (slantDirection === 'left') {
    //     columnIndicesArray = SLANTED_LEFT_X_AXIS_INDICES;

    // } else if (slantDirection === 'right') {
    //     columnIndicesArray = SLANTED_RIGHT_X_AXIS_INDICES
    // }

    return (
        <Svg
            className={cx(
                `Cubes__y${yIndex}${yIndex === 0 ? '__back' : ''}${yIndex === CUBE_Y_AXIS_LENGTH - 1 ? '__front' : ''}`,
                `Cubes__${isFloor ? 'floor' : 'ceiling'}`,
                'absoluteFullContainer'
            )}
        >
            {columnIndicesArray.map(xIndex => (
                <Cube
                    key={`${xIndex}_${yIndex}`}
                    {...{
                        isFloor,
                        xIndex,
                        yIndex
                    }}
                />
            ))}
        </Svg>
    )
}

CubesView.propTypes = CubesViewPropTypes

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        setCanRenderPresences
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(Cubes)
