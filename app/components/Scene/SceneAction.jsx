// Section to show a single slice of the scene.

import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Cubes from './Cubes/Cubes'
import Presence from './Presences/Presence';

import { DEFAULT_STAGE_TILES } from '../../constants/cubesOther'

import { Y_INDICES_ARRAY } from './constants'

const propTypes = {
    presences: PropTypes.object,
    tiles: PropTypes.shape({
        ceiling: PropTypes.shape({
            zIndices: PropTypes.array.isRequired,
            bitmapKeys: PropTypes.array.isRequired
        }),
        floor: PropTypes.shape({
            zIndices: PropTypes.array.isRequired,
            bitmapKeys: PropTypes.array.isRequired
        }),
        slantDirection: PropTypes.string
    }).isRequired,
    stageWidth: PropTypes.number.isRequired,
    stageHeight: PropTypes.number.isRequired
}

const SceneAction = ({

    presences,
    tiles,

...other }) => {

        /**
         * FIXME: These safety checks should no longer be needed once all
         * tiles and bitmapKeys for all scenes are established.
         */
        const { ceiling = DEFAULT_STAGE_TILES.ceiling,
                floor = DEFAULT_STAGE_TILES.floor,
                slantDirection = '' } = tiles,

            ceilingZIndices = ceiling.zIndices ||
                DEFAULT_STAGE_TILES.ceiling.zIndices,

            ceilingBitmapKeys = ceiling.bitmapKeys ||
                DEFAULT_STAGE_TILES.ceiling.bitmapKeys,

            floorZIndices = floor.zIndices ||
                DEFAULT_STAGE_TILES.floor.zIndices,

            floorBitmapKeys = floor.bitmapKeys ||
                DEFAULT_STAGE_TILES.floor.bitmapKeys

    return (
        <div
            className={cx(
                'SceneAction',
                'absoluteFullContainer'
            )}
        >
            {Y_INDICES_ARRAY.map(yIndex => {

                const presence = presences && presences[`yIndex${yIndex}`]

                return (
                    <Fragment key={yIndex}>
                        <Cubes {...other}
                            yIndex={yIndex}
                            bitmapKeys={ceilingBitmapKeys}
                            zIndices={ceilingZIndices}
                            oppositeZIndices={floorZIndices}
                            slantDirection={slantDirection}
                        />
                        <Cubes {...other}
                            isFloor
                            yIndex={yIndex}
                            bitmapKeys={floorBitmapKeys}
                            zIndices={floorZIndices}
                            oppositeZIndices={ceilingZIndices}
                            slantDirection={slantDirection}
                        />
                        {presence && (
                            <Presence {...other}
                                yIndex={yIndex}
                                presence={presence}
                                zIndices={floorZIndices}
                                slantDirection={slantDirection}
                            />
                        )}
                    </Fragment>
                )
            })}
        </div>
    )
}

SceneAction.propTypes = propTypes

export default SceneAction
