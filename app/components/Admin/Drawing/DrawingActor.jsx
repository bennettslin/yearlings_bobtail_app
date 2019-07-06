/* eslint-disable react/prop-types */
import React from 'react'
// import PropTypes from 'prop-types'
import cx from 'classnames'
import keys from 'lodash.keys'

import { getIsV2 } from '../../../album/api/admin'

const DrawingActor = ({

    actor,
    characters,
    rolesTodoCount,
    rolesTotalCount

}) => (
    <div
        key={actor}
        className="actor-block"
    >
        <div className="actor-header-row header-row">
            {actor}
        </div>
        <div className="actor-info-row">
            {keys(characters).map(characterName => {
                return (
                    <div
                        key={characterName}
                        className="character-block"
                    >
                        <div className="character-header-row header-row">
                            {characterName}
                        </div>
                        <div className="character-info-row">
                            {characters[characterName].map(character => {
                                const {
                                        songIndex,
                                        sceneIndex,
                                        workedHours,
                                        description,
                                        doneForNow
                                    } = character,

                                    isV2 = getIsV2(songIndex)

                                return !isV2 && (
                                    <div
                                        key={`${songIndex}${sceneIndex}`}
                                        {...{
                                            className: cx(
                                                'role-row',
                                                'flex-row',
                                                doneForNow ? 'done' : 'todo'
                                            )
                                        }}
                                    >
                                        <div
                                            {...{
                                                className: cx(
                                                    'role-info',
                                                    'song-index-column'
                                                )
                                            }}
                                        >
                                            {songIndex}
                                        </div>
                                        <div
                                            {...{
                                                className: cx(
                                                    'role-info',
                                                    'scene-index-column'
                                                )
                                            }}
                                        >
                                            {sceneIndex}
                                        </div>
                                        <div
                                            {...{
                                                className: cx(
                                                    'role-info',
                                                    'worked-hours-column'
                                                )
                                            }}
                                        >
                                            {workedHours || 0}
                                        </div>
                                        <div
                                            {...{
                                                className: cx(
                                                    'role-info',
                                                    'description-column'
                                                )
                                            }}
                                        >
                                            {description}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
        <div className="roles-count-row count-row">
            roles: {rolesTotalCount - rolesTodoCount} / {rolesTotalCount}
        </div>
    </div>
)

export default DrawingActor
