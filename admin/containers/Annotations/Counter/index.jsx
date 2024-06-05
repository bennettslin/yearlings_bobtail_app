import React from 'react'
import cx from 'classnames'
import {
    getTotalCount,
    getTotalTodosCount,
    getTotalReviewsCount,
    getTotalRevisionsCount,
} from '../../../endpoint/album/todos'

const TodoCounter = () => {
    const
        totalCount = getTotalCount(),
        todosCount = getTotalTodosCount(),
        reviewsCount = getTotalReviewsCount(),
        revisionsCount = getTotalRevisionsCount(),
        percentage = parseInt(
            todosCount / totalCount * 100,
        )

    return (
        <div
            {...{
                className: cx(
                    'TodoCounter',
                    'textShadow__light',
                    'font__heading',
                    'fCC',
                ),
            }}
        >
            {revisionsCount} / {reviewsCount} / {totalCount} ({percentage}%)
        </div>
    )
}

export default TodoCounter
