import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import Pixel from './Pixel'

const mapStateToProps = ({
    canSceneRender
}) => ({
    canSceneRender
})

class Pixels extends Component {

    static propTypes = {
        base: PropTypes.string.isRequired,
        bitmapMatrix: PropTypes.array.isRequired,
        polygonPointsString: PropTypes.string.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canSceneRender
    }

    // componentDidUpdate(prevProps) {
    //     if (this.props.canSceneRender && !prevProps.canSceneRender) {
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
