/**
 * A single row of presences. A presences is any actor, fixture or prop on the
 * stage for any given scene. I really couldn't think of a better word...
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'
import keys from 'lodash.keys'

import Svg from '../../Svg/Svg'
import Presence from './Presence'

import { getSceneObject } from '../../../helpers/dataHelper'

import { PRESENCE_TYPES } from '../sceneConstants'

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
                presences
            } = sceneObject

        return presences ? (
            <Svg
                className={cx(
                    `Presences__y${yIndex}`,
                    'absoluteFullContainer'
                )}
            >
                {/* As of now, keys are actors, cutouts, fixtures. */}
                {PRESENCE_TYPES.map(presenceType => {

                    const presenceTypeObject = presences[presenceType]

                    return presenceTypeObject && (

                        keys(presenceTypeObject).map(presenceKey => {

                            const presence = presenceTypeObject[presenceKey]

                            // TODO: Have build arrange by yIndex.
                            return presence.arrangement.yIndex === yIndex && (
                                <Presence
                                    key={presenceKey}
                                    {...{
                                        type: presenceType,
                                        presenceKey,
                                        presence,
                                        cubesKey,
                                        yIndex
                                    }}
                                />
                            )
                        })
                    )
                })}
            </Svg>
        ) : null
    }
}

export default connect(mapStateToProps)(Presences)
