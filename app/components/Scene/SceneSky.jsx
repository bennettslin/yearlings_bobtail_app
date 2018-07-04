/**
 * The stage sky. Renders with Theatre, not Scene, because it has no overhead,
 * and the stage lookes weird without it.
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import DynamicSvg from '../DynamicSvg/DynamicSvg'

import { SKY_ANYTIME,
        SKY_INDOOR } from '../../constants/scene'

const mapStateToProps = ({
    canTheatreRender,
    stageCoordinates
}) => ({
    canTheatreRender,
    stageCoordinates
})

class SceneSky extends Component {

    static defaultProps = {
        sky: {
            time: SKY_ANYTIME,
            season: SKY_INDOOR
        }
    }

    static propTypes = {
        // Through Redux.
        canTheatreRender: PropTypes.bool.isRequired,

        // From parent.
        sky: PropTypes.shape({
            time: PropTypes.string.isRequired,
            season: PropTypes.string.isRequired
        }).isRequired,

        stageCoordinates: PropTypes.shape({
            width: PropTypes.number.isRequired,
            height: PropTypes.number.isRequired
        }).isRequired
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canTheatreRender
    }

    componentDidUpdate(prevProps) {
        if (this.props.canTheatreRender && !prevProps.canTheatreRender) {
            console.warn('Sky rendered.')
        }
    }

    render() {
        const {
                sky,
                stageCoordinates
            } = this.props,
            {
                width: stageWidth,
                height: stageHeight
            } = stageCoordinates,
            {
                time,
                season
            } = sky

        return (
            <DynamicSvg
                className="SceneSky"
                viewBoxWidth={stageWidth}
                viewBoxHeight={stageHeight}
            >
                <rect
                    className={cx(
                        'StageSkyFilter',
                        'StageSkyFilter__season',
                        `StageSkyFilter__season__${season}`
                    )}
                    x={0}
                    y={0}
                    width={stageWidth}
                    height={stageHeight}
                />
                <rect
                    className={cx(
                        'StageSkyFilter',
                        'StageSkyFilter__time',
                        `StageSkyFilter__time__${time}`
                    )}
                    x={0}
                    y={0}
                    width={stageWidth}
                    height={stageHeight}
                />
                {/* TODO: Make filter for weather, like clouds and rain. */}
            </DynamicSvg>
        )
    }
}

export default connect(mapStateToProps)(SceneSky)

