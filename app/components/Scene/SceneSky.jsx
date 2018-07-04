// Section to show the stage illustrations.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import DynamicSvg from '../DynamicSvg/DynamicSvg'

import { SKY_ANYTIME,
        SKY_INDOOR } from '../../constants/scene'

const mapStateToProps = ({
    stageCoordinates
}) => ({
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
        sky: PropTypes.shape({
            time: PropTypes.string.isRequired,
            season: PropTypes.string.isRequired
        }).isRequired,

        stageCoordinates: PropTypes.shape({
            width: PropTypes.number.isRequired,
            height: PropTypes.number.isRequired
        }).isRequired
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

