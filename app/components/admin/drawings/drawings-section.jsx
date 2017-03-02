import React from 'react'

/*************
 * CONTAINER *
 *************/

const DrawingsSection = ({

    drawings

}) => {

    const { actors } = drawings

    return (
        <DrawingsSectionView
            actors={actors}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const DrawingsSectionView = ({

    // From controller.
    actors

}) => (
    <div className="section drawings-section">
        <h2>drawings</h2>
        {false && drawings.map((drawing, index) => {

            // Last item in array is the character count.
            const isLastItem = index === drawings.length - 1,
                text = isLastItem ? drawing : `${drawing.character}: ${drawing.quantity}`

            return (
                <div
                    className="drawing-character"
                    key={index}
                >
                    {text}
                </div>
            )
        })}
        <h3>actors</h3>
        <div className="actors-table">
            <div className="actors-header-row header-row flex-row">
                <div className="actors-header character-column">role</div>
                <div className="actors-header song-index-column">song</div>
                <div className="actors-header scene-index-column">scene</div>
                <div className="actors-header description-index-column">description</div>
            </div>
            <div className="actors-row">
                {actors.map((actorObject, actorIndex) => {
                    const { actor,
                            roles } = actorObject

                    return (
                        <div
                            key={actorIndex}
                            className="actor-row"
                        >
                            <div className="actor-header-row header-row">
                                {actor}
                            </div>
                            <div className="actor-info-row">
                                {roles.map((roleObject, roleIndex) => {
                                    const { character,
                                            songIndex,
                                            sceneIndex,
                                            description } = roleObject

                                    return (
                                        <div
                                            key={roleIndex}
                                            className="role-info-row flex-row"
                                        >
                                            <div className="role-info character-column">{character}</div>
                                            <div className="role-info song-index-column">{songIndex}</div>
                                            <div className="role-info scene-index-column">{sceneIndex}</div>
                                            <div className="role-info description-index-column">{description}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
)

export default DrawingsSection
