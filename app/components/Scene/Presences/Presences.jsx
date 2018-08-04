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
import { getPresencesForCubes } from './presenceHelper'

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

            { cubes: cubesKey } = sceneObject,

            presences = getPresencesForCubes({
                cubesKey,
                songIndex: renderableSongIndex,
                sceneIndex: renderableSceneIndex,
                yIndex
            })

        if (presences) {
            // As of now, keys are actors, cutouts, fixtures.
            const presenceTypes = keys(presences)

            return (
                <Svg
                    className={cx(
                        `Presences__y${yIndex}`,
                        'absoluteFullContainer'
                    )}
                >
                    {presenceTypes.map(presenceType => {
                        const presenceEntity = presences[presenceType],

                            /**
                             * This is either an array of presences, or a single
                             * presence. If it's a single presence, make it an
                             * array of one.
                             */
                            presenceArray = Array.isArray(presenceEntity) ?
                                presenceEntity :
                                [presenceEntity]

                        return presenceArray.map(presence => {

                            const { name } = presence

                            return (
                                <Presence
                                    key={name}
                                    {...presence}
                                    {...{
                                        type: presenceType,
                                        cubesKey,
                                        yIndex
                                    }}
                                />
                            )
                        })
                    })}
                </Svg>
            )
        } else {
            return null
        }
    }
}

export default connect(mapStateToProps)(Presences)
