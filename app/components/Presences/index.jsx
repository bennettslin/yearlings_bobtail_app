import React, { Component } from 'react'
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
import { getPropsAreShallowEqual } from 'helpers/general'
import { CUBE_Y_INDICES } from 'constants/cubeIndex'

const
    getMapStateToProps = (yIndex) => ({
        sceneStore: { canSceneRender },
        renderedStore: {
            renderedSongIndex,
            renderedSceneIndex
        }
    }) => ({
        canSceneRender,
        renderedSongIndex,
        renderedSceneIndex,
        yIndex
    }),
    PresencesConfig = {}

class Presences extends Component {

    static propTypes = {
        // Through Redux.
        canSceneRender: PropTypes.bool.isRequired,
        renderedSongIndex: PropTypes.number.isRequired,
        renderedSceneIndex: PropTypes.number.isRequired,

        // From this parent.
        yIndex: PropTypes.number.isRequired
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.canSceneRender && !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    render() {
        const {
                renderedSongIndex,
                renderedSceneIndex,
                yIndex
            } = this.props,

            { layers: scenePresenceLayers } = getScene(
                renderedSongIndex,
                renderedSceneIndex
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
