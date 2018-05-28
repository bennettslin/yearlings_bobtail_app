// Section to show the stage floor or ceiling.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Wood from './Wood/Wood'
import SceneRow from './SceneRow'

const propTypes = {
    isFloor: PropTypes.bool,
    stageWidth: PropTypes.number.isRequired,
    stageHeight: PropTypes.number.isRequired
}

const ScenePlane = (props) => {

    const { isFloor,
            stageWidth,
            stageHeight } = props

    return (
        <div className={cx(
            'ScenePlane',
            'absoluteFullContainer',

            // This is just for HTML visualisation purposes.
            isFloor ? 'ScenePlane__floor' : 'ScenePlane__ceiling'
        )}>
            <Wood
                isFloor={isFloor}
                stageWidth={stageWidth}
                stageHeight={stageHeight}
            />

            <SceneRow {...props} />
        </div>
    )
}

ScenePlane.propTypes = propTypes

export default ScenePlane
