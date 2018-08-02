import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import Pixel from './Pixel'

import { getCharStringForNumber } from '../../../../../helpers/formatHelper'
import { getChildClassNameForPixelLogic } from '../helpers/faceHelper'

import {
    BITMAP_MATRIX_INDICES
} from '../../cubeIndexConstants'

import {
    TILE
} from '../../../sceneConstants'

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

            isTile = face === TILE,

            xCharIndex = getCharStringForNumber(xIndex),

            bitmapZIndices =
                isTile ?
                    [0] :

                    /**
                     * I'm being lazy here. A full bitmap matrix takes up the
                     * height of two zIndices, so coincidentally there are as
                     * many bitmap zIndices as there are bitmap matrix indices.
                     */
                    BITMAP_MATRIX_INDICES

        /**
         * Once rendered, this component never updates because its parent never
         * updates.
         */
        return (
            <g className={cx(
                'Pixels',

                // Used just to find in the DOM.
                `Pixels__${
                    face[0].toUpperCase()
                }${
                    xCharIndex
                }${
                    yIndex
                }`
            )}>
                {bitmapZIndices.map(bitmapZIndex => (
                    BITMAP_MATRIX_INDICES.map(pixelYIndex => (
                        BITMAP_MATRIX_INDICES.map(pixelXIndex => {

                            const identifier = getChildClassNameForPixelLogic({
                                face,
                                pixelXIndex,
                                pixelYIndex,
                                bitmapZIndex
                            })

                            return (
                                <Pixel
                                    key={identifier}
                                    {...{
                                        identifier
                                    }}
                                />
                            )
                        })
                    ))
                ))}
            </g>
        )
    }
}

export default connect(mapStateToProps)(Pixels)
