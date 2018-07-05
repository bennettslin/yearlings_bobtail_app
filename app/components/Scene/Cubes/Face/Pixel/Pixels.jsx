import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import cx from 'classnames'

import {
    setRenderablePixelsYIndex
} from '../../../../../redux/actions/render'

import Pixel from './Pixel'
import { CUBE_Y_AXIS_LENGTH } from '../../../../../constants/stage'

const mapStateToProps = ({
    renderableCubesYIndex,
    renderablePixelsYIndex
}) => ({
    renderableCubesYIndex,
    renderablePixelsYIndex
})

class Pixels extends Component {

    static propTypes = {
        // Through Redux.
        renderableCubesYIndex: PropTypes.number.isRequired,
        renderablePixelsYIndex: PropTypes.number.isRequired,
        setRenderablePixelsYIndex: PropTypes.func.isRequired,

        // From parent.
        base: PropTypes.string.isRequired,
        bitmapMatrix: PropTypes.array.isRequired,
        polygonPointsString: PropTypes.string.isRequired,

        // TODO: Are these still needed?
        // This is purely for rendering purposes.
        canUpdateRenderableYIndex: PropTypes.bool,
        yIndex: PropTypes.number.isRequired
    }

    // constructor(props) {
    //     super(props)

    //     this._setRenderablePixelsYIndex =
    //         this._setRenderablePixelsYIndex.bind(this)
    // }

    shouldComponentUpdate(nextProps) {
        return (
            this.getCanRender(nextProps) ||
            (
                this.getCanRender(this.props) &&
                !this.getCanRender(nextProps)
            )
        )
    }

    componentDidUpdate() {
        if (this.props.canUpdateRenderableYIndex) {
            console.warn('Pixels rendered.')
        }
    }

    // shouldComponentUpdate(nextProps) {
    //     const {
    //             yIndex,
    //             renderableCubesYIndex,
    //             renderablePixelsYIndex
    //         } = nextProps

    //     return (
    //         // Only render once cubes have finished rendering.
    //         renderableCubesYIndex === CUBE_Y_AXIS_LENGTH
    //     ) && (
    //         yIndex <= renderablePixelsYIndex
    //     )
    // }

    // componentDidUpdate(prevProps) {
    //     const {
    //             yIndex,
    //             renderableCubesYIndex,
    //             renderablePixelsYIndex
    //         } = this.props,

    //         {
    //             renderableCubesYIndex: previousRenderableCubesYIndex,
    //             renderablePixelsYIndex: previousRenderablePixelsYIndex
    //         } = prevProps

    //     // Update if...
    //     if (
    //         // ... cubes have just now finished rendering...
    //         (
    //             renderableCubesYIndex === CUBE_Y_AXIS_LENGTH &&
    //             previousRenderableCubesYIndex < CUBE_Y_AXIS_LENGTH
    //         ) ||

    //         // ... or this is the most recent yIndex to be rendered.
    //         (
    //             yIndex === renderablePixelsYIndex &&
    //             yIndex > previousRenderablePixelsYIndex
    //         )
    //     ) {
    //         console.warn('Pixels rendered for yIndex: ', yIndex)

    //         this.setNextYIndex()
    //     }
    // }

    // setNextYIndex() {
    //     const {
    //         canUpdateRenderableYIndex,
    //         yIndex
    //     } = this.props
    //     if (
    //         canUpdateRenderableYIndex &&
    //         yIndex === this.props.renderablePixelsYIndex
    //     ) {
    //         setTimeout(
    //             this._setRenderablePixelsYIndex,
    //             0
    //         )
    //     }
    // }

    // _setRenderablePixelsYIndex() {
    //     console.warn('set renderable pixels', this.props.yIndex)
    //     this.props.setRenderablePixelsYIndex(
    //         this.props.yIndex + 1
    //     )
    // }

    getCanRender(props) {
        return props.renderableCubesYIndex === CUBE_Y_AXIS_LENGTH
    }

    render() {

        const {
            base,
            bitmapMatrix,
            polygonPointsString
        } = this.props

        return this.getCanRender(this.props) && (
            <g className={cx(
                'Pixels'
            )}>
                {/* Single polygon for the base colour. */}
                <Pixel
                    uniqueId="base"
                    fill={base}
                    polygonPointsString={polygonPointsString}
                />

                {bitmapMatrix.map((matrixRow, yIndex) => {

                    return matrixRow.map((matrixObject, xIndex) => {

                        if (matrixObject === null) {
                            // This pixel location will just show the base colour.
                            return null
                        }

                        const uniqueId = `y${yIndex}x${xIndex}`

                        return (
                            <Pixel {...matrixObject}
                                key={uniqueId}
                                uniqueId={uniqueId}
                            />
                        )
                    })
                })}
            </g>
        )
    }
}

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        setRenderablePixelsYIndex
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(Pixels)
