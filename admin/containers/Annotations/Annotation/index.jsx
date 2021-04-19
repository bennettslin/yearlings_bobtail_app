/* eslint-disable react/prop-types */
import React from 'react'
import AnnotationCard from '../AnnotationCard'
import { getNextGlobalAnnotation } from '../../../api/album/globalAnnotation'
import { getTitleForAnnotation } from '../../../../app/api/album/annotations'
import { getAnnotationCardIndices } from '../../../../app/api/album/cards'

const INTERVALS_COUNT = 5

const TempGlobalAnnotation = ({ intervalIndex }) => {
    const {
        songIndex,
        annotationIndex,
        globalIndex,

    } = getNextGlobalAnnotation({
        intervalIndex,
        count: INTERVALS_COUNT,
    })

    if (!songIndex || !annotationIndex) {
        return null
    }

    const annotationTitle = getTitleForAnnotation(songIndex, annotationIndex)

    return (
        <div className="TempGlobalAnnotation">
            <div className="TempGlobalAnnotation__header">
                {globalIndex}. {annotationTitle}
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

export default TempGlobalAnnotation
