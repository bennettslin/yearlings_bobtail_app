import React from 'react'

import DrawingActor from './DrawingActor'

const DrawingSection = ({

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
            {actors.map(actorObject => (
                <DrawingActor {...actorObject}
                    key={actorObject.actor}
                />
            ))}
        </div>
    </div>
)

export default DrawingSection
