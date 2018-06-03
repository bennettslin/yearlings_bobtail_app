// Section to show a single slice of the scene.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Action from './Action/Action';
import Tiles from './Tiles/Tiles'

import { ROW_INDICES_ARRAY } from './constants'

const defaultProps = {
    slantDirection: ''
}

const propTypes = {
    actions: PropTypes.object,
    zIndices: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.number
        ).isRequired
    ).isRequired,
    slantDirection: PropTypes.string.isRequired,
    stageWidth: PropTypes.number.isRequired,
    stageHeight: PropTypes.number.isRequired
}

const SceneRow = ({

    actions,
    zIndices,
    slantDirection,
    stageWidth,
    stageHeight,

...other }) => (

    <div
        className={cx(
            'SceneRow',
            'absoluteFullContainer'
        )}
    >
        {ROW_INDICES_ARRAY.map(yIndex => {

            const action = actions && actions[`yIndex${yIndex}`]

            return [(
                <Tiles {...other}
                    key={`tiles_${yIndex}`}
                    yIndex={yIndex}
                    zIndices={zIndices}
                    slantDirection={slantDirection}
                    stageWidth={stageWidth}
                    stageHeight={stageHeight}
                />

            ), action && (
                <Action
                    key={`action_${yIndex}`}
                    yIndex={yIndex}
                    action={action}
                    zIndices={zIndices}
                    slantDirection={slantDirection}
                    stageWidth={stageWidth}
                    stageHeight={stageHeight}
                />
            )]
        })}
    </div>
)
SceneRow.defaultProps = defaultProps
SceneRow.propTypes = propTypes

export default SceneRow
