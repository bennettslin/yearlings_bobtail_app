/* eslint-disable react/prop-types */
import React from 'react'
import cx from 'classnames'
import { useDispatch } from 'react-redux'
import TodoAnnotationCard from './Card'
import { getTitleForAnnotation } from '../../../../../../src/endpoint/album/annotations'
import { getAnnotationCardIndices } from '../../../../../../src/endpoint/album/cards'
import { updateSelectedStore } from '../../../../../../src/redux/selected/action'
import { getAnnotationTodo } from '../../../../../endpoint/album/todos'
import { REDO, REVIEW, REVISE } from '../../../constants/todos'

const TodoAnnotation = ({ songIndex, annotationIndex }) => {
    const
        dispatch = useDispatch(),
        annotationTitle = getTitleForAnnotation(songIndex, annotationIndex),
        annotationTodo = getAnnotationTodo(songIndex, annotationIndex)

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
                    'TodoAnnotation',
                    annotationTodo === REDO && 'TodoAnnotation__redo',
                    annotationTodo === REVISE && 'TodoAnnotation__revise',
                    annotationTodo === REVIEW && 'TodoAnnotation__review',
                    `TodoAnnotation-${songIndex}-${annotationIndex}`,
                ),
            }}
        >
            <div
                {...{
                    className: cx(
                        'TodoAnnotationHeader',
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
                <TodoAnnotationCard
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

export default TodoAnnotation
