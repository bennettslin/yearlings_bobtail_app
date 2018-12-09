/**
 * A single row of presences. A presences is any actor, fixture or prop on the
 * stage for any given scene. I really couldn't think of a better word...
 */

import React, { Component } from 'react'
// eslint-disable-next-line
import { CSSTransitionGroup } from 'react-transition-group'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import Presence from './Presence'

import { getSceneObject } from 'helpers/data'

const mapStateToProps = ({
    renderStore: { canSceneRender },
    renderedStore: { renderedSongIndex },
    sceneStore: { currentSceneIndex }
}) => ({
    canSceneRender,
    renderedSongIndex,
    currentSceneIndex
})

class Presences extends Component {

    static propTypes = {
        // Through Redux.
        canSceneRender: PropTypes.bool.isRequired,
        renderedSongIndex: PropTypes.number.isRequired,
        currentSceneIndex: PropTypes.number.isRequired,

        // From parent.
        yIndex: PropTypes.number.isRequired
    }

    shouldComponentUpdate(nextProps) {
        // Ensure that presences are not unmounted while scene cannot render.
        return nextProps.canSceneRender
    }

    render() {
        const {
                yIndex,
                renderedSongIndex,
                currentSceneIndex
            } = this.props,

            sceneObject = getSceneObject(
                renderedSongIndex,
                currentSceneIndex
            ),

            {
                cubes: cubesKey,
                presenceYIndices
            } = sceneObject,

            presences = presenceYIndices[yIndex]

        return presences ? (
            <div
                className={cx(
                    `Presences__y${yIndex}`,
                    'absoluteFullContainer'
                )}
            >
                {presences.map(presence => (
                    <Presence
                        key={presence.name}
                        {...{
                            presenceType: presence.type,
                            nameKey: presence.name,
                            instanceKey: presence.instance,
                            arrangement: presence.arrangement,
                            cubesKey,
                            yIndex
                        }}
                    />
                ))}
            </div>
        ) : null
    }
}

export default connect(mapStateToProps)(Presences)
