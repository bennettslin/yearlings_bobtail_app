// Section to show a single slice of the scene.

import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import Cubes from './Cubes/Cubes'
import Presence from './Presences/Presence';

import { DEFAULT_STAGE_TILES } from '../../constants/cubesOther'

import { Y_INDICES_ARRAY } from './constants'

const mapStateToProps = ({
    canSceneRender
}) => ({
    canSceneRender
})

class SceneAction extends Component {

    static propTypes = {
        canSceneRender: PropTypes.bool.isRequired,

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


    shouldComponentUpdate(nextProps) {
        return nextProps.canSceneRender
    }

    componentDidUpdate(prevProps) {
        if (this.props.canSceneRender && !prevProps.canSceneRender) {
            console.warn('SceneAction rendered.')
        }
    }

    render() {

        const {
                presences,
                tiles,
                ...other
            } = this.props,

            /**
             * FIXME: These safety checks should no longer be needed once all
             * tiles and bitmapKeys for all scenes are established.
             */
            {
                ceiling = DEFAULT_STAGE_TILES.ceiling,
                floor = DEFAULT_STAGE_TILES.floor,
                slantDirection = ''
            } = tiles,

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
}

export default connect(mapStateToProps)(SceneAction)
