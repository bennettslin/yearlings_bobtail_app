/* eslint-disable react/prop-types */
import React from 'react'
import cx from 'classnames'
import AnnotationCard from '../AnnotationCard'
import {
    getTitleForAnnotation,
    getTodoForAnnotation,
} from '../../../../app/api/album/annotations'
import { getAnnotationCardIndices } from '../../../../app/api/album/cards'

const Annotation = ({ songIndex, annotationIndex }) => {
    if (!songIndex || !annotationIndex) {
        return null
    }

    const
        annotationTitle = getTitleForAnnotation(songIndex, annotationIndex),
        annotationTodo = getTodoForAnnotation(songIndex, annotationIndex)

    return (
        <div
            {...{
                className: cx(
                    'TempGlobalAnnotation',
                    annotationTodo && 'TempGlobalAnnotation__todo',
                ),
            }}
        >
            <div className="TempGlobalAnnotationHeader">
                {annotationIndex}. {annotationTitle}
            </div>
            {getAnnotationCardIndices(
                songIndex,
                annotationIndex,

            ).map(cardIndex => (
                <AnnotationCard
                    {...{
                        key: cardIndex,
                        songIndex,
                        annotationIndex,
                        cardIndex,
                    }}
                />
            ))}
        </div>
    )
}

export default Annotation
