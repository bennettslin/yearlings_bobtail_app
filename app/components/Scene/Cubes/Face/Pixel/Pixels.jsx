import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import Pixel from './Pixel'

import { getBitmapMatrix } from '../helpers/bitmapHelper'
import { BITMAPS } from '../../../../../assets/scene/bitmaps/bitmaps'
import { getPropsAreShallowEqual } from '../../../../../helpers/generalHelper';

const mapStateToProps = ({
    canPixelsRender
}) => ({
    canPixelsRender
})

class Pixels extends Component {

    static propTypes = {
        // Through Redux.
        canPixelsRender: PropTypes.bool.isRequired
    }

    constructor(props) {
        super(props)

        this.state = {
            hasMounted: false
        }
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canPixelsRender
    }

    componentDidUpdate(prevProps) {

        if (!this.state.hasMounted) {
            if (this.props.canPixelsRender && !prevProps.canPixelsRender) {
                this.setState({
                    hasMounted: true
                })
            }
        }
    }

    render() {
        const {
                /* eslint-disable no-unused-vars */
                canPixelsRender,
                dispatch,
                /* eslint-enable no-unused-vars */

                ...other
            } = this.props,

            { hasMounted } = this.state

        return hasMounted && (

            // Render as a separate React component to optimise rendering.
            <PixelsView
                {...other}
            />
        )
    }
}

class PixelsView extends Component {

    static propTypes = {
        // From parent.
        isFloor: PropTypes.bool,
        zIndex: PropTypes.number.isRequired,
        bitmapKey: PropTypes.string.isRequired,
        polygonPoints: PropTypes.array.isRequired,
        facePolygonPointsString: PropTypes.string.isRequired,
        relativeZHeight: PropTypes.number,

        /**
         * Passed purely for shouldComponentUpdate, so that we don't need to
         * check polygonPoints. Along with isFloor and zIndex, any changes to
         * these values effectively means that polygonPoints also changed.
         */
        xIndex: PropTypes.number.isRequired,
        yIndex: PropTypes.number.isRequired,
        slantDirection: PropTypes.string
    }

    shouldComponentUpdate(nextProps) {
        const propsAreShallowEqual = getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })

        return !propsAreShallowEqual
    }


    render() {

        const {
            bitmapKey,
            polygonPoints,
            relativeZHeight,
            zIndex,
            isFloor,
            facePolygonPointsString
        } = this.props

        // Get base colour and pixel map.
        const {
            base,
            pixels
        } = BITMAPS[bitmapKey],

            bitmapMatrix = getBitmapMatrix({
                pixels,
                polygonPoints,
                relativeZHeight,
                zIndex,
                isFloor
            })

        return (
            <g className={cx(
                'Pixels'
            )}>
                {/* Single polygon for the base colour. */}
                <Pixel
                    uniqueId="base"
                    fill={base}
                    polygonPointsString={facePolygonPointsString}
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

export default connect(mapStateToProps)(Pixels)
