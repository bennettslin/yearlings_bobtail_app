import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import DynamicSvg from '../DynamicSvg/DynamicSvg'
import { STAGE_Y_PERCENTAGE } from '../../constants/stage'

const mapStateToProps = ({
    stageCoordinates
}) => ({
    stageCoordinates
})

class SceneWood extends Component {

    static propTypes = {
        stageCoordinates: PropTypes.shape({
            width: PropTypes.number.isRequired,
            height: PropTypes.number.isRequired
        }).isRequired
    }

    render() {

        // Make wood stageHeight just slightly taller than tiles.
        const {
                stageCoordinates
            } = this.props,
            {
                width: stageWidth,
                height: stageHeight
            } = stageCoordinates,

            woodHeight = stageHeight * (STAGE_Y_PERCENTAGE + 2) * 0.009

        return (
            <DynamicSvg
                className={cx(
                    'SceneWood'
                )}
                viewBoxWidth={stageWidth}
                viewBoxHeight={woodHeight}
            >
                <rect
                    x={0}
                    y={0}
                    width={stageWidth}
                    height={woodHeight}
                />
            </DynamicSvg>
        )
    }
}
export default connect(mapStateToProps)(SceneWood)
