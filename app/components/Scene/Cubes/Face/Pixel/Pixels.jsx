import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import Pixel from './Pixel'

import { getCharStringForNumber } from '../../../../../helpers/formatHelper'

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
        face: PropTypes.string.isRequired,
        xIndex: PropTypes.number.isRequired,
        yIndex: PropTypes.number.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canPixelsRender
    }

    render() {
        const {
                /* eslint-disable no-unused-vars */
                canPixelsRender,
                dispatch,
                /* eslint-enable no-unused-vars */

                face,
                xIndex,
                yIndex
            } = this.props,

            xCharIndex = getCharStringForNumber(xIndex)

        /**
         * Once rendered, this component never updates because its parent never
         * updates.
         */
        return (
            <g className={cx(
                'Pixels',

                // Used just to find in the DOM.
                `Pixels__${face}${xCharIndex}${yIndex}`
            )}>
                {[0, 1, 2, 3, 4, 5, 6, 7].map(pixelXIndex => {

                    return [0, 1, 2, 3, 4, 5, 6, 7].map(pixelYIndex => {

                        const uniqueId = `x${pixelXIndex}y${pixelYIndex}`

                        return (
                            <Pixel
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
