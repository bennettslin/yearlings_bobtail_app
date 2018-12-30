import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import ActorLayers from './Actor'
import BackdropLayer from './Backdrop'
import BubbleLayer from './Bubble'
import CutoutLayer from './Cutout'
import FixtureLayer from './Fixture'
import FlatLayer from './Flat'
import FurnitureLayer from './Furniture'
import PanelLayer from './Panel'
import PuppetLayer from './Puppet'

import { getScene } from 'album/api/scenes'
import { CUBE_Y_INDICES } from 'constants/cubeIndex'

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
                actors,
                backdrops,
                bubbles,
                cutouts,
                fixtures,
                flats,
                furnitures,
                panels,
                puppets
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
                    <BackdropLayer {...backdrops} />
                    <BubbleLayer {...bubbles} />
                    <CutoutLayer {...cutouts} />
                    <FixtureLayer {...fixtures} />
                    <FlatLayer {...flats} />
                    <FurnitureLayer {...furnitures} />
                    <PanelLayer {...panels} />
                    <PuppetLayer {...puppets} />

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
