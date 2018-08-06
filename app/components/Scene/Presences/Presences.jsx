/**
 * A single row of presences. A presences is any actor, fixture or prop on the
 * stage for any given scene. I really couldn't think of a better word...
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import Svg from '../../Svg/Svg'
import Presence from './Presence'

import { getSceneObject } from 'helpers/dataHelper'

const mapStateToProps = ({
    canPresencesRender,
    renderableStore
}) => ({
    canPresencesRender,
    renderableSongIndex: renderableStore.renderableSongIndex,
    renderableSceneIndex: renderableStore.renderableSceneIndex
})

class Presences extends Component {

    static propTypes = {
        // Through Redux.
        canPresencesRender: PropTypes.bool.isRequired,
        renderableSongIndex: PropTypes.number.isRequired,
        renderableSceneIndex: PropTypes.number.isRequired,

        // From parent.
        yIndex: PropTypes.number.isRequired
    }

    render() {
        const {
                /* eslint-disable no-unused-vars */
                canPresencesRender,
                dispatch,
                /* eslint-enable no-unused-vars */

                yIndex,
                renderableSongIndex,
                renderableSceneIndex
            } = this.props,

            sceneObject = getSceneObject(
                renderableSongIndex,
                renderableSceneIndex
            ),

            {
                cubes: cubesKey,
                presenceYIndices
            } = sceneObject,

            presences = presenceYIndices[yIndex]

        return presences ? (
            <Svg
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
            </Svg>
        ) : null
    }
}

export default connect(mapStateToProps)(Presences)
