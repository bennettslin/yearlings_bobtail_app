// Section to show the stage illustrations.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import cx from 'classnames'

import {
    setCanRenderPixels,
} from '../../../redux/actions/render'

import DynamicSvg from '../../DynamicSvg/DynamicSvg'

import { getTileCentreForAction } from '../sceneHelper'

import { CUBE_Y_AXIS_LENGTH } from '../../../constants/stage'

const mapStateToProps = ({
    canPresencesRender,
    stageCoordinates
}) => ({
    canPresencesRender,
    stageCoordinates
})

class Presences extends Component {

    static defaultProps = {
        presence: []
    }

    static propTypes = {
        // Through Redux.
        canPresencesRender: PropTypes.bool.isRequired,
        stageCoordinates: PropTypes.shape({
            width: PropTypes.number.isRequired,
            height: PropTypes.number.isRequired
        }).isRequired,

        // From parent.
        yIndex: PropTypes.number.isRequired,
        presence: PropTypes.array.isRequired,
        zIndices: PropTypes.arrayOf(
            PropTypes.arrayOf(
                PropTypes.number
            ).isRequired
        ).isRequired,
        slantDirection: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props)

        this._setCanRenderPixels = this._setCanRenderPixels.bind(this)
    }

    shouldComponentUpdate(nextProps) {
        // All yIndices for Presences will render simultaneously.
        return nextProps.canPresencesRender
    }

    componentDidUpdate(prevProps) {
        const {
                canPresencesRender,
                yIndex
            } = this.props,
            {
                canPresencesRender: couldPresencesRender
            } = prevProps

        if (canPresencesRender && !couldPresencesRender) {

            // Only one component will make this call.
            if (yIndex === CUBE_Y_AXIS_LENGTH - 1) {
                setTimeout(
                    this._setCanRenderPixels,
                    0
                )
            }
        }
    }

    _setCanRenderPixels() {
        console.warn('Presences rendered.')
        this.props.setCanRenderPixels(true)
    }

    render() {

        const {
                yIndex,
                presence,
                zIndices,
                slantDirection,
                stageCoordinates
            } = this.props,
            {
                width: stageWidth,
                height: stageHeight
            } = stageCoordinates

        return (
            <DynamicSvg
                className={cx(
                    `Presence__y${yIndex}`,
                    'absoluteFullContainer'
                )}
                viewBoxWidth={stageWidth}
                viewBoxHeight={stageHeight}
            >
                {presence.map((presenceEntry, index) => {

                    const { name,
                            type,
                            xIndex,
                            width,
                            height } = presenceEntry,

                        invertedYIndex = CUBE_Y_AXIS_LENGTH - yIndex - 1,

                        /**
                         * Either indices or raw coordinates are given. If it's
                         * indices, then only the xIndex is provided, since
                         * presence already knows its yIndex.
                         */
                        coordinates = isNaN(xIndex) ?
                            presenceEntry : getTileCentreForAction({
                                xIndex,
                                yIndex: invertedYIndex,
                                zIndices,
                                slantDirection
                            }),

                        // These are percentages in both cases.
                        { x, y } = coordinates,

                        adjustedX = x - width / 2,
                        adjustedY = y - height

                    return (
                        <g
                            key={index}
                            className={cx(
                                name
                            )}
                        >
                            <rect
                                className={cx(
                                    `PresenceEntry__${type}`
                                )}
                                x={`${adjustedX}%`}
                                y={`${adjustedY}%`}
                                width={`${width}%`}
                                height={`${height}%`}
                            />
                            <text
                                className="PresenceTemporaryText"
                                x={`${adjustedX}%`}
                                y={`${adjustedY}%`}
                            >
                                {name}
                            </text>
                        </g>
                    )
                })}
            </DynamicSvg>
        )
    }
}

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        setCanRenderPixels
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(Presences)
