import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import ActorLayer from './Actor'
import BackdropLayer from './Backdrop'
import BubbleLayer from './Bubble'

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

class PresenceLayer extends Component {

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
                bubbles
            } = scenePresenceLayer

            return (
                <div
                    className={cx(
                        'PresenceLayer',

                        // TODO: This is only for zIndex, for now. Change stylesheet to get eventually.
                        `Presences__y${yIndex}`,

                        `PresenceLayer__${yIndex}`,
                        'absoluteFullContainer'
                    )}
                >
                    <ActorLayer {...actors} />
                    <BackdropLayer {...backdrops} />
                    <BubbleLayer {...bubbles} />
                </div>
            )

        } else {
            return null
        }
    }
}

CUBE_Y_INDICES.forEach(yIndex => {
    PresenceLayers[yIndex] =
        connect(getMapStateToProps(yIndex))(PresenceLayer)
})

export default PresenceLayers
