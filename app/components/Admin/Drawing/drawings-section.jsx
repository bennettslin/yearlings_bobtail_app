import React from 'react'
import keys from 'lodash.keys'

import { getDrawings } from 'helpers/dataHelper'

/*************
 * sCONTAINER *
 *************/

const DrawingsSection = () => {

    const drawings = getDrawings()

    return (
        <DrawingsSectionView {...drawings} />
    )
}

/****************
 * PRESENTATION *
 ****************/

const DrawingsSectionView = ({

    // From controller.
    actors,
    actorsTodoCount,
    actorsTotalCount

}) => (
    <div className="drawings-section">
        <h2>drawings</h2>
        <div className="actors-table">
            <div className="actors-count-row count-row">
                actors: {actorsTotalCount - actorsTodoCount} / {actorsTotalCount}
            </div>
            {actors.map((actorObject, actorIndex) => {
                const { actor,
                        characters,
                        rolesTodoCount,
                        rolesTotalCount } = actorObject

                return (
                    <div
                        key={actorIndex}
                        className="actor-block"
                    >
                        <div className="actor-header-row header-row">
                            {actor}
                        </div>
                        <div className="actor-info-row">
                            {keys(characters).map((characterName, characterIndex) => {
                                return (
                                    <div
                                        key={characterIndex}
                                        className="character-block"
                                    >
                                        <div className="character-header-row header-row">
                                            {characterName}
                                        </div>
                                        <div className="character-info-row">
                                            {characters[characterName].map((character, index) => {
                                                const { songIndex,
                                                        sceneIndex,
                                                        workedHours,
                                                        description,
                                                        doneForNow } = character

                                                return (
                                                    <div
                                                        key={index}
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
            })}
        </div>
    </div>
)

export default DrawingsSection
