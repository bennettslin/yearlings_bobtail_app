/* eslint-disable react/prop-types */
import React from 'react'
import cx from 'classnames'
import { useDispatch } from 'react-redux'
import AnnotationCard from '../AnnotationCard'
import {
    getTitleForAnnotation,
    getTodoForAnnotation,
} from '../../../../app/api/album/annotations'
import { getAnnotationCardIndices } from '../../../../app/api/album/cards'
import { updateSelectedStore } from '../../../../app/redux/selected/action'

const Annotation = ({ songIndex, annotationIndex }) => {
    const
        dispatch = useDispatch(),
        annotationTitle = getTitleForAnnotation(songIndex, annotationIndex),
        annotationTodo = getTodoForAnnotation(songIndex, annotationIndex)

    const selectAnnotation = () => {
        dispatch(updateSelectedStore({
            selectedSongIndex: songIndex,
            selectedAnnotationIndex: annotationIndex,
        }))
    }

    return (
        <div
            {...{
                className: cx(
                    'TempGlobalAnnotation',
                    annotationTodo && 'TempGlobalAnnotation__todo',
                    `TempGlobalAnnotation-${songIndex}-${annotationIndex}`,
                ),
            }}
        >
            <div
                {...{
                    className: cx(
                        'TempGlobalAnnotationHeader',
                    ),
                    onClick: selectAnnotation,
                }}
            >
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
