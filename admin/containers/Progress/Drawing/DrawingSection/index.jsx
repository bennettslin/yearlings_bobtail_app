/* eslint-disable react/prop-types */
import React from 'react'
import cx from 'classnames'
import DrawingActor from '../DrawingActor'
import { ACTOR } from '../../../../../src/constants/scene'

const DrawingSection = ({
    [ACTOR]: actors,
    actorsTodoCount,
    actorsHalfTodoCount,
    actorsTotalCount,

}) => (
    <div
        {...{
            className: cx(
                'Progress__field',
            ),
        }}
    >
        <h2>drawings</h2>
        <div className="actors-table">
            <div className="actors-count-row count-row">
                actors:<span {...{ className: 'halfDone' }}> {actorsTotalCount - actorsHalfTodoCount}</span> / <span {...{ className: 'done' }}> {actorsTotalCount - actorsTodoCount}</span> / {actorsTotalCount}
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
