import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import Pixel from './Pixel'

const mapStateToProps = ({
    canPixelsRender
}) => ({
    canPixelsRender
})

class Pixels extends Component {

    static propTypes = {
        // Through Redux.
        canPixelsRender: PropTypes.bool.isRequired,

        // From parent.
        base: PropTypes.string.isRequired,
        bitmapMatrix: PropTypes.array.isRequired,
        polygonPointsString: PropTypes.string.isRequired,

        // This is purely for rendering purposes.
        yIndex: PropTypes.number.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canPixelsRender
    }

    // componentDidUpdate(prevProps) {
    //     if (this.props.canPixelsRender && !prevProps.canPixelsRender) {
    //         console.warn('Pixels rendered.')
    //     }
    // }

    render() {

        const {
            base,
            bitmapMatrix,
            polygonPointsString
        } = this.props

        return (
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

export default connect(mapStateToProps)(Pixels)
