// Section to show a single slice of the scene.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Action from './Action/Action';
import Tiles from './Tiles/Tiles'

import { ROW_INDICES_ARRAY } from './constants'

const propTypes = {
    actions: PropTypes.object,
    stageWidth: PropTypes.number.isRequired,
    stageHeight: PropTypes.number.isRequired
}

const SceneRow = ({

    actions,
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

            const action = actions && actions[`actionsRow${yIndex}`]

            return [(
                <Tiles {...other}
                    key={`tiles_${yIndex}`}
                    rawYIndex={yIndex}
                    stageWidth={stageWidth}
                    stageHeight={stageHeight}
                />

            ), action && (
                <Action
                    key={`action_${yIndex}`}
                    className={`Action__row__${yIndex}`}
                    action={action}
                    stageWidth={stageWidth}
                    stageHeight={stageHeight}
                />
            )]
        })}
    </div>
)
SceneRow.propTypes = propTypes

export default SceneRow
