// Section to show the stage illustrations.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Wood from './Wood/Wood'
import Tiles from './Tiles/Tiles'

const propTypes = {
    isFloor: PropTypes.bool.isRequired,
    stageWidth: PropTypes.number.isRequired,
    stageHeight: PropTypes.number.isRequired
}

const StageSceneTiling = (props) => {

    const { isFloor,
            stageWidth,
            stageHeight } = props

    return (
        <div className={cx(
            'StageSceneTiling',
            isFloor ? 'floor' : 'ceiling'
        )}>
            <Wood
                stageWidth={stageWidth}
                stageHeight={stageHeight}
            />

            <Tiles {...props} />
        </div>
    )
}

StageSceneTiling.propTypes = propTypes

export default StageSceneTiling
