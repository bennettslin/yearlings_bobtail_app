// Section to show the stage illustrations.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Wood from './Wood/Wood'
import Tiles from './Tiles/Tiles'

const propTypes = {
    isFloor: PropTypes.bool,
    stageWidth: PropTypes.number.isRequired,
    stageHeight: PropTypes.number.isRequired
}

const StageTiling = (props) => {

    const { isFloor,
            stageWidth,
            stageHeight } = props

    return (
        <div className={cx(
            'StageTiling'
        )}>
            <Wood
                isFloor={isFloor}
                stageWidth={stageWidth}
                stageHeight={stageHeight}
            />

            <Tiles {...props} />
        </div>
    )
}

StageTiling.propTypes = propTypes

export default StageTiling
