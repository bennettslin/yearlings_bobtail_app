// Section to show the stage illustrations.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Wood from './Wood/Wood'
import SceneAction from './SceneAction'

const propTypes = {
    isFloor: PropTypes.bool,
    stageWidth: PropTypes.number.isRequired,
    stageHeight: PropTypes.number.isRequired
}

const SceneTiling = (props) => {

    const { isFloor,
            stageWidth,
            stageHeight } = props

    return (
        <div className={cx(
            'SceneTiling',

            // This is just for HTML visualisation purposes.
            isFloor ? 'SceneTiling__floor' : 'SceneTiling__ceiling'
        )}>
            <Wood
                isFloor={isFloor}
                stageWidth={stageWidth}
                stageHeight={stageHeight}
            />

            <SceneAction {...props} />
        </div>
    )
}

SceneTiling.propTypes = propTypes

export default SceneTiling
