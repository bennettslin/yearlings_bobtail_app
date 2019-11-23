import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import LayersActor from './LayersActor'
import LayersThing from './LayersThing'

import { getScene } from 'album/api/scenes'
import { CUBE_Y_INDICES_WITH_NEG } from 'constants/cubeIndex'

import { ACTOR } from 'constants/scene'

const
    getMapStateToProps = (yIndex) => ({
        sceneStore: {
            sceneSongIndex,
            sceneSceneIndex
        }
    }) => ({
        sceneSongIndex,
        sceneSceneIndex,
        yIndex
    }),
    PresencesConfig = {}

class Presences extends PureComponent {

    static propTypes = {
        // Through Redux.
        sceneSongIndex: PropTypes.number.isRequired,
        sceneSceneIndex: PropTypes.number.isRequired,

        // From this parent.
        yIndex: PropTypes.number.isRequired
    }

    render() {
        const {
                sceneSongIndex,
                sceneSceneIndex,
                yIndex
            } = this.props,

            { layers: scenePresenceLayers } = getScene(
                sceneSongIndex,
                sceneSceneIndex
            ),

            scenePresenceLayer = scenePresenceLayers[`layer${yIndex}`]

        // If this layer has no presences, just don't render it at all.
        if (scenePresenceLayer) {
            const {
                [ACTOR]: actors,
                ...rest
            } = scenePresenceLayer

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
}

CUBE_Y_INDICES_WITH_NEG.forEach(yIndex => {
    PresencesConfig[yIndex] = connect(getMapStateToProps(yIndex))(Presences)
})

export default PresencesConfig
