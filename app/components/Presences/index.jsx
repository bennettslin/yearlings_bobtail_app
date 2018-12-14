import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import ActorLayer from './Actor'
import BackdropLayer from './Backdrop'
import BubbleLayer from './Bubble'
import CutoutLayer from './Cutout'
import FixtureLayer from './Fixture'
import FlatLayer from './Flat'
import FurnitureLayer from './Furniture'
import PanelLayer from './Panel'
import PuppetLayer from './Puppet'

import { getSceneObject } from 'helpers/data'
import { getPropsAreShallowEqual } from 'helpers/general'
import { CUBE_Y_INDICES } from 'constants/cubeIndex'

const
    getMapStateToProps = (yIndex) => ({
        renderStore: { canSceneRender },
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
    PresenceLayers = {}

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

            { layers: scenePresenceLayers } = getSceneObject(
                renderedSongIndex,
                renderedSceneIndex
            ),

            scenePresenceLayer = scenePresenceLayers[`layer${yIndex}`]

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
                    className={cx(
                        'Presences',
                        `Presences__y${yIndex}`,
                        'absoluteFullContainer'
                    )}
                >
                    <ActorLayer {...actors} />
                    <BackdropLayer {...backdrops} />
                    <BubbleLayer {...bubbles} />
                    <CutoutLayer {...cutouts} />
                    <FixtureLayer {...fixtures} />
                    <FlatLayer {...flats} />
                    <FurnitureLayer {...furnitures} />
                    <PanelLayer {...panels} />
                    <PuppetLayer {...puppets} />
                </div>
            )

        } else {
            return null
        }
    }
}

CUBE_Y_INDICES.forEach(yIndex => {
    PresenceLayers[yIndex] =
        connect(getMapStateToProps(yIndex))(Presences)
})

export default PresenceLayers
