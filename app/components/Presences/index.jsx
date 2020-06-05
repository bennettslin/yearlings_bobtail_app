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
        sceneLayer = getLayerForScene(
            sceneSongIndex,
            sceneSceneIndex,
            yIndex
        )

    // If this layer has no presences, just don't render it at all.
    if (sceneLayer) {
        const {
            [ACTOR]: actors,
            ...rest
        } = sceneLayer

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
                <LayersThing {...rest} />

                {/* Each individual actor has their own layer. */}
                <LayersActor {...actors} />
            </div>
        )

    } else {
        return null
    }
}

Presences.propTypes = {
    yIndex: PropTypes.number.isRequired
}

export default memo(Presences)
