/* eslint-disable react/prop-types */
import React from 'react'
// import PropTypes from 'prop-types'
import cx from 'classnames'
import keys from 'lodash/keys'

const DrawingActor = ({

    actor,
    characters,
    rolesTodoCount,
    rolesTotalCount

}) => (
    <div
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
                                    instance,
                                    doneForNow
                                } = character

                                return (
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
                                            {workedHours.toFixed(1) || 0}
                                        </div>
                                        <div
                                            {...{
                                                className: cx(
                                                    'role-info',
                                                    'instance-column'
                                                )
                                            }}
                                        >
                                            {instance}
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
