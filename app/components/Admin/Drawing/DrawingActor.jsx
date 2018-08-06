import React from 'react'
import keys from 'lodash.keys'

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
                                } = character

                                return (
                                    <div
                                        key={`${songIndex}${sceneIndex}`}
                                        className={`role-row flex-row ${doneForNow ? 'done' : 'todo'}`}
                                    >
                                        <div className="role-info song-index-column">{songIndex}</div>
                                        <div className="role-info scene-index-column">{sceneIndex}</div>
                                        <div className="role-info worked-hours-column">{workedHours ? workedHours : 0}</div>
                                        <div className="role-info description-column">{description}</div>
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
