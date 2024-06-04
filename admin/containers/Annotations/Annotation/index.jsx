/* eslint-disable react/prop-types */
import React from 'react'
import cx from 'classnames'
import { useDispatch } from 'react-redux'
import AnnotationCard from '../AnnotationCard'
import { getTitleForAnnotation } from '../../../../src/endpoint/album/annotations'
import { getAnnotationCardIndices } from '../../../../src/endpoint/album/cards'
import { updateSelectedStore } from '../../../../src/redux/selected/action'
import { getTodoForAnnotation } from '../helpers'
import { REVIEW, REVISE } from '../constants/todos'

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
                    annotationTodo === REVISE && 'TempGlobalAnnotation__revise',
                    annotationTodo === REVIEW && 'TempGlobalAnnotation__review',
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
                {`${annotationIndex}. \u201c${annotationTitle}\u201d`}
                {/* {`\u00a0`} */}
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
