// Section to show the stage illustrations.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import TilesRow from './Tiles/TilesRow'

import { ROW_INDICES_ARRAY } from './constants'

const propTypes = {
    isFloor: PropTypes.bool,
    slantDirection: PropTypes.string.isRequired,
    zIndices: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.number
        ).isRequired
    ).isRequired,
    colours: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.string
        ).isRequired
    ).isRequired,
    stageWidth: PropTypes.number.isRequired,
    stageHeight: PropTypes.number.isRequired
}

const SceneAction = ({

    // TODO: See if these can just be passed down as props object.
    zIndices,
    colours,
    isFloor,
    slantDirection,
    stageWidth,
    stageHeight

}) => (
    <div
        className={cx(
            'SceneAction',
            'absoluteFullContainer'
        )}
    >

        {ROW_INDICES_ARRAY.map(rawYIndex => {

            return (
                <TilesRow
                    key={rawYIndex}
                    rawYIndex={rawYIndex}
                    zIndices={zIndices}
                    colours={colours}
                    isFloor={isFloor}
                    slantDirection={slantDirection}
                    stageWidth={stageWidth}
                    stageHeight={stageHeight}
                />
            )
        })}
    </div>
)
SceneAction.propTypes = propTypes

export default SceneAction
