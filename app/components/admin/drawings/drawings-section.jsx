import React from 'react'

/*************
 * sCONTAINER *
 *************/

const DrawingsSection = ({

    drawings

}) => {

    const { actors,
            actorsCount } = drawings

    return (
        <DrawingsSectionView
            actors={actors}
            actorsCount={actorsCount}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const DrawingsSectionView = ({

    // From controller.
    actors,
    actorsCount

}) => (
    <div className="section drawings-section">
        <h2>drawings</h2>
        <h3>actors</h3>
        <div className="actors-table">
            <div className="actors-row">
                {actors.map((actorObject, actorIndex) => {
                    const { actor,
                            characters,
                            rolesCount } = actorObject

                    return (
                        <div
                            key={actorIndex}
                            className="actor-block"
                        >
                            <div className="actor-header-row header-row">
                                {actor}
                            </div>
                            <div className="actor-info-row">
                                {Object.keys(characters).map((characterName, characterIndex) => {
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
                                                        description } = character

                                                    return (
                                                        <div
                                                            key={index}
                                                            className="role-row flex-row"
                                                        >
                                                            <div className="role-info song-index-column">{songIndex}</div>
                                                            <div className="role-info scene-index-column">{sceneIndex}</div>
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
                                total roles: {rolesCount}
                            </div>
                        </div>
                    )
                })}
                <div className="actors-count-row count-row">
                    total roles for all actors: {actorsCount}
                </div>
            </div>
        </div>
    </div>
)

export default DrawingsSection
