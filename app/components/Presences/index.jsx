import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import LayersActor from './LayersActor'
import LayersThing from './LayersThing'
import { getLayerForScene } from '../../api/album/scenes'
import {
    mapSceneSongIndex,
    mapSceneSceneIndex
} from '../../redux/scene/selectors'
import { ACTOR } from '../../constants/scene'

const Presences = ({ yIndex }) => {
    const
        sceneSongIndex = useSelector(mapSceneSongIndex),
        sceneSceneIndex = useSelector(mapSceneSceneIndex),
        {
            [ACTOR]: actors,
            ...rest
        } = getLayerForScene(
            sceneSongIndex,
            sceneSceneIndex,
            yIndex
        )

    return (
        <div
            {...{
                className: cx(
                    'Presences',
                    `y${yIndex}`,
                    'abF'
                )
            }}
        >
            <LayersThing {...{ yIndex, ...rest }} />

            {/* Each individual actor has their own layer. */}
            <LayersActor {...{ yIndex, ...actors }} />
        </div>
    )
}

Presences.propTypes = {
    yIndex: PropTypes.number.isRequired
}

export default memo(Presences)
