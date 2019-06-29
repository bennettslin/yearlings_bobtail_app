import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import Layer from './Layer'
import ActorLayers from './Actor'

import { getScene } from 'album/api/scenes'
import { CUBE_Y_INDICES } from 'constants/cubeIndex'

import {
    ACTOR,
    BACKDROP,
    BUBBLE,
    CARDBOARD,
    CUTOUT,
    FIXTURE,
    FLAT,
    FURNITURE,
    PANEL,
    PUPPET
} from 'constants/scene'

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
                [BACKDROP]: backdrops,
                [BUBBLE]: bubbles,
                [CARDBOARD]: cardboards,
                [CUTOUT]: cutouts,
                [FIXTURE]: fixtures,
                [FLAT]: flats,
                [FURNITURE]: furnitures,
                [PANEL]: panels,
                [PUPPET]: puppets
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
                    <Layer {...backdrops} {...{ presenceType: BACKDROP }} />
                    <Layer {...bubbles} {...{ presenceType: BUBBLE }} />
                    <Layer {...cardboards} {...{ presenceType: CARDBOARD }} />
                    <Layer {...cutouts} {...{ presenceType: CUTOUT }} />
                    <Layer {...fixtures} {...{ presenceType: FIXTURE }} />
                    <Layer {...flats} {...{ presenceType: FLAT }} />
                    <Layer {...furnitures} {...{ presenceType: FURNITURE }} />
                    <Layer {...panels} {...{ presenceType: PANEL }} />
                    <Layer {...puppets} {...{ presenceType: PUPPET }} />

                    {/* Each individual actor has its own layer. */}
                    <ActorLayers {...actors} />
                </div>
            )

        } else {
            return null
        }
    }
}

CUBE_Y_INDICES.forEach(yIndex => {
    PresencesConfig[yIndex] = connect(getMapStateToProps(yIndex))(Presences)
})

export default PresencesConfig
